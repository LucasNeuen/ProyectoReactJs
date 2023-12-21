import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"




const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)


    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/> )}
            <div className="contenedorCheckout">
                <h3>Total: ${totalPrice}</h3>
                <button onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;