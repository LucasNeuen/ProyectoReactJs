import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";





import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
/* import SearchBar from "./components/SearchBar/SearchBar"; */

import { CartProvider } from "./context/CartContext";


function App() {

    return (
      <>
        <BrowserRouter >
          <CartProvider >
            <NavBar/>
            <Routes >
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<h1>404 ERROR</h1>}/>
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
    </> 
      
    );
  }
  
  export default App;