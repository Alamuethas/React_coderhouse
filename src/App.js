import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div >
<NavBar />
<ItemListContainer greeting={"hola usuario"}/>
    </div>
  );
}

export default App;
