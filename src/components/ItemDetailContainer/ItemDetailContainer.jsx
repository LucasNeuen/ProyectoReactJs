//   REACT
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//   COMPONENT
import ItemDetail from "../ItemDetail/ItemDetail";

//   FIREBASE
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
            
    }, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;