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