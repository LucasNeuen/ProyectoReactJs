import { useState } from "react";
import "./CheckoutForm.css";



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, celular, email
        }

        onConfirm(userData)
    }
    
    return (
        <div className="contenedorFormulario">
            <form className="checkFormulario" onSubmit={handleConfirm}>
                <label >
                    Nombre
                    <input
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label>
                    Celular
                    <input 
                    type="text" 
                    value={celular}
                    onChange={({target}) => setCelular(target.value)}
                    />
                </label>
                <label >
                    Email
                    <input 
                    type="text" 
                    value={email}  
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div className="contenedorOrdenBtn">
                    <button type="submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;