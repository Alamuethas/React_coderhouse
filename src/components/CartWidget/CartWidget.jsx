import { AiOutlineShoppingCart } from "react-icons/ai"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="container-carro">
            <AiOutlineShoppingCart style={{
                fontSize: "2rem",
                color: "black"
            }}
            />
        </div>
    )
}

export default CartWidget


// use effect funciona como un actualizador de componentes
// basicamente, podemos usar el ciclo de vida de un componente
// para no tener renderizado un componente de manera inutil
// hasta que sea requerido de nuevo.
// ejemplo: si necesito una lista de usuarios de una base de datos
// voy a usar un useEffect para no renderizar 2 veces en la misma pantalla
//la misma lista de usuarios actualizada.
