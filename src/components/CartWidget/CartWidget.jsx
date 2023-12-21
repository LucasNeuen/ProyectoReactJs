import { useContext } from 'react';
import carrito from './assets/carrito.png';
import "./CartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)


    return (
        <div className='imgCarrito'>
            <Link to="/cart" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
                <img src={carrito} alt="carrito" />
                { totalQuantity }
            </Link>
            
            
        </div>
    )
}

export default CartWidget;