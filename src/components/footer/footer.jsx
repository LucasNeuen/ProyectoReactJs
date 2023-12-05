import ReferenciasCentro from "./ReferenciasCentro";
import ReferenciasIzquierda from "./ReferenciasIzquierda";
import Contacto from "./Contacto";
import Autor from "./Autor";

import "./footer.css"


const Footer = () => {

    return(
        <>
            <footer className="Footer">

                <div className="contenedor-central">
                    <ReferenciasIzquierda/>
                    <ReferenciasCentro/>
                    <Contacto/>
                </div>

                <Autor/>
                
            </footer>
        </>
    )
}

export default Footer;