import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import "./App.css"

function App() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a FromdaHood'} />
      </div>
      
    );
  }
  
  export default App;