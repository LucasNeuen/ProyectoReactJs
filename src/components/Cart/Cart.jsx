import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"





const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)


    if (totalQuantity() === 0) {
        return (
            <div className="contenedorNoProd">
                <h1>No hay productos en el carrito</h1>
                <Link className="noProd" to="/">Ir a Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/> )}
            <div className="contenedorCart_">
                <div className="contenedorCart">
                    <h3>Total: ${totalPrice()}</h3>
                    <button onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link className="contenedorBoton" to='/'>
                        Seguir agregando
                    </Link>
                </div>
            </div>
            <div className="contenedorCheckout">
                <Link className="textCheckout" to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart;