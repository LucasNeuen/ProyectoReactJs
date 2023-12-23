import { useContext } from 'react';
import carrito from './assets/carrito.png';
import "./CartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return (
        
            <Link to="/cart" className='imgCarrito' style={{display: totalQuantity() > 0 ? 'flex' : 'none'}} >
                <img className='imgCarrito_' src={carrito} alt="carrito" />
                <span className='cantidad'>{ totalQuantity() }</span>
            </Link> 
            
          
    )
}

export default CartWidget;