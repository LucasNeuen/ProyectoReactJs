import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";
import "./CartItem.css";



const CartItem = ({id, nombre, price, img, quantity}) => {

    

    const { removeItem } = useContext(CartContext);

    return(

            <div className="contenedorCarro">
                <h2>{nombre}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button onClick={()=> removeItem(id)}>Eliminar</button>
            </div>

    )
}

export default CartItem;