import {FaMapMarkerAlt, FaPhoneSquare, FaEnvelope} from "react-icons/fa";



const ReferenciasCentro = () => {

    return (
        <>
            <div className="caja central">
                <p className="referencias">Dirección</p>
                <div className="contenedor-1">
                    <div className="lugar">
                        <span><FaMapMarkerAlt className="fas"/></span>
                        <span className="texto">Rio Segundo - Córdoba</span>
                    </div>
                    <div className="telefono">
                        <span><FaPhoneSquare className="fas"/></span>
                        <span className="texto">+59-3572-551576</span>
                    </div>
                    <div className="e-mail">
                        <span><FaEnvelope className="fas"/></span>
                        <span className="texto">lucas.neuen95@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferenciasCentro;