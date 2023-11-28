import carrito from './assets/carrito.png';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className='imgCarrito'>
            <img src={carrito} alt="carrito" />
            0
        </div>
    )
}

export default CartWidget;