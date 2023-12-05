



const Contacto = () => {

    return(
        <>
            <div class="caja derecha">
                <p class="referencias">Contácto</p>
                <div class="contenedor-1">
                    <form id="form" action="#">
                        <div class="email">
                            <div  class="texto">Email *</div>
                            <input id="emailConsulta" type="email" required/>
                        </div>
                        <div class="mensaje">
                            <div class="texto">Mensaje *</div>
                            <textarea id="textoConsulta"  cols="25" rows="2"></textarea>
                        </div>
                        <div class="boton">
                            <button id="btnConsulta" value="Send Email">Enviar</button>
                        </div>    
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacto;