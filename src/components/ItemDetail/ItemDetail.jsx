import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

import { CartContext } from "../../context/CartContext";



const ItemDetail = ({id, nombre, category, price, img, stock, descripcion}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, price, img
        }

        addItem(item, quantity)
    }

    return (
        <div className="columns is-centered">
            <div className="column is-4">
                <article>
                    <header>
                        <h2 className="mt-5 mb-1">
                            {nombre}
                        </h2>
                    </header>

                    <div className="card">
                        <div className="card-img">
                            <figure className="image is-1by1">
                                <img src={img} alt={nombre} />
                            </figure>
                        </div>
                        
                        <div className="card-content">
                            <div className="media-content">
                                <p className=" title is-4">
                                    Precio: ${price}
                                </p>
                                <p className="title is-5">
                                Categoria: {category}  
                                </p>
                                <p className="mt-3 subtitle is-6">
                                    Descripcion: {descripcion}
                                </p>
                                <p className="subtitle is-6">
                                    Stock disponible: {stock}
                                </p>
                            </div>
                        </div>

                        <footer className="terminar0" >
                            <div className="contenedorTerminar">
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart' className="terminar">Terminar compra</Link>
                                ) : (
                                    <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                            </div>
                        </footer>
                    </div>  
                </article>
            </div>
        </div>
        
    )
}

export default ItemDetail;