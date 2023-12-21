



const Contacto = () => {

    return(
        <>
            <div className="caja derecha">
                <p className="referencias">Contácto</p>
                <div className="contenedor-1">
                    <form id="form" action="#">
                        <div className="email">
                            <div  className="texto">Email *</div>
                            <input id="emailConsulta" type="email" required/>
                        </div>
                        <div className="mensaje">
                            <div className="texto">Mensaje *</div>
                            <textarea id="textoConsulta"  cols="25" rows="2"></textarea>
                        </div>
                        <div className="boton">
                            <button id="btnConsulta" value="Send Email">Enviar</button>
                        </div>    
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacto;