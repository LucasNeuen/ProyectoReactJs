//   REACTS
import { BrowserRouter, Routes, Route } from "react-router-dom";


//   COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/checkout";


//   ESTILOS 
import 'bulma/css/bulma.css';
import "./App.css"

//   CONTEXT
import { CartProvider } from "./context/CartContext";



//   APP
function App() {


    return (
      <>
        <BrowserRouter >
          <CartProvider >
            <NavBar/>
            <Routes >
                <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}  />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos por categoria'}/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<h1>404 ERROR</h1>}/>
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
    </> 
      
    );
  }
  
  export default App;