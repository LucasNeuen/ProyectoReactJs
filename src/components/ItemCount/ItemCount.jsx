import { useState } from "react";
import "./ItemCount.css"



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity (quantity - 1)
        }
    }

    return (
        <>
        <div className="container">
            <div className="column mt-5">
                <div className="columns">
                    <div className="column is-4">
                        <button onClick={increment} className="button is-primary is-fullwidth">+</button>
                    </div>

                    <div className="column mt-5 ">
                        <span className="columns is-centered">Pedido:{ quantity }</span>
                    </div>
                    <div className="column is-4">
                        <button onClick={decrement} className="button is-danger is-fullwidth">-</button>
                    </div>
                </div>
                
                <div className="columns mt-5 is-full">
                    <button className="btnCarro" onClick={() => onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default ItemCount;