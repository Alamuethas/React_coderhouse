import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartaItem from "./components/CartaItem/CartaItem";

function App() {
  return (
    <div >
      <NavBar />
      <ItemListContainer greeting={"hola usuario"} />
      <CartaItem></CartaItem>
    </div>
  );
}

export default App;
