import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({id, nombre, precio, img, stock}) => {

    return (
        
        <div className="column">

            <article >
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
                            <p className="title is-4">
                                Precio: ${precio}
                            </p>
                            <p className="subtitle is-6">
                                Stock disponible: {stock}
                            </p>
                        </div>
                    </div>

                    <footer className="detalles">
                        
                            <Link className="detalle" to={`/item/${id}`}>Ver detalles</Link>
                        
                    </footer>
                </div>
            </article>
            </div>

        
    )
}

export default Item;