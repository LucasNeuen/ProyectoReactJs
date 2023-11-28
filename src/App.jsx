import "./App.css"
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
/* import ItemCount from "./components/ItemCount/ItemCount"; */


import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
/* import Item from "./components/Item/Item"; */

function App() {
    return (
      
      <>
        <BrowserRouter >
            <NavBar/>
            <Routes >
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    </> 
      
    );
  }
  
  export default App;