import {FaMapMarkerAlt, FaPhoneSquare, FaEnvelope} from "react-icons/fa";



const ReferenciasCentro = () => {

    return (
        <>
            <div class="caja central">
                <p class="referencias">Dirección</p>
                <div class="contenedor-1">
                    <div class="lugar">
                        <span><FaMapMarkerAlt className="fas"/></span>
                        <span class="texto">Rio Segundo - Córdoba</span>
                    </div>
                    <div class="telefono">
                        <span><FaPhoneSquare className="fas"/></span>
                        <span class="texto">+59-3572-551576</span>
                    </div>
                    <div class="e-mail">
                        <span><FaEnvelope className="fas"/></span>
                        <span class="texto">lucas.neuen95@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferenciasCentro;