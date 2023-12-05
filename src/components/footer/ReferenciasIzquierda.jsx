import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa"



const ReferenciasIzquierda = () => {

    return (
        <>
            <div className="caja izquierda">
                <p className="referencias">Sobre mi</p>
                    <div className="contenedor-1">
                        <p>Busco incorporarme a esta industria tecnológica que me gusta, con el objetivo de ayudar a las empresas informáticas a través de mis conocimientos. Me gustan los retos porque me considero una persona proactiva y dinámica. Por otro lado, me gusta mucho trabajar en equipo y ser parte de la solución.</p>
                        <div className="social">
                            <a href="https://www.instagram.com/"><span><FaInstagram className="fa"/></span></a>
                            <a href="https://www.facebook.com/"><span><FaFacebook className="fa"/></span></a>
                            <a href="https://www.twitter.com/"><span><FaTwitter className="fa"/></span></a>
                            <a href="https://www.linkedin.com/"><span><FaLinkedin className="fa"/></span></a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ReferenciasIzquierda;