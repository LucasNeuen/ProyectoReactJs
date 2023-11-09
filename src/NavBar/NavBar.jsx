import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <nav>
                <a className="logo" href="/#">FromDaHood</a>
                <div>
                    <button>Ayuda</button>
                    <button>Iniciar Sesion</button>
                </div> 
                <CartWidget />
                <hr />
                <ul>
                    <li>
                        <a href="/#">Inicio</a>
                        <a href="/#">¿Como comprar?</a>
                        <a href="/#">Productos</a>
                        <a href="/#">Policticas de devolucion</a>
                        <a href="/#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;