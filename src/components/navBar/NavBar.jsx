
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dk3okovox/image/upload/v1669479141/Media/computer-png_pbzpx1.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">componentes</li>
                <li className="navbar-item">computadoras</li>
                <li className="navbar-item">perifericos</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;
