import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({id, nombre, category, precio, img, stock, descripcion}) => {

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
                                    Precio: ${precio}
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

                        <footer>
                            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
                        </footer>
                    </div>  
                </article>
            </div>
        </div>
        
    )
}

export default ItemDetail;