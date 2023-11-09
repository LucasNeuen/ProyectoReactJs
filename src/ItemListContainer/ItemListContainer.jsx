import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return (
        <section className="tituloPrincipal">
            <h1>{greeting}</h1>
        </section>
    )
};

export default ItemListContainer;