import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsById } from "../../data/asynProducts";
import ItemList from "../ItemList/ItemList";


import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsById : getProducts


        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })

            .catch(error => {
                console.error(error);
            })
    }, [categoryId])


    return (
        <>
            <h1 className="tituloPrincipal">{greeting}</h1>
            <ItemList products={products} />
        </>
    )
};

export default ItemListContainer;