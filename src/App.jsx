import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';


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
            <Footer />
        </BrowserRouter>
    </> 
      
    );
  }
  
  export default App;