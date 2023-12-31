import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, getDocs, writeBatch, where, query, documentId } from "firebase/firestore";
import { db } from "../../config/firebase";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./checkout.css";




const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, celular, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, celular, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db,'items')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que estan fuera de stock')
            }   
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if (loading) {
        return <h1 className="ordenId">Aguarde un momento, se esta generando su orden</h1>
    }
    if (orderId) {
        return <h1 className="ordenId">El id de su orden es: <span>{orderId}</span></h1>
    }
    
    return (
        <div className="checkoutContainer">
            <h1>Complete los datos...</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;