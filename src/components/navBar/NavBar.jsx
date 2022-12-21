import React from "react";
import "./NavBar.css"
import Carrito from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navegacion">
            <div className="navegacion__div">
                <li>
                    <NavLink to={"home"}></NavLink>
                </li>
                <ul className="navegacion__div__contenedor">
                    <li>
                        <NavLink to={"Componentes"}>Componentes</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Computadoras"}>Computadoras</NavLink>
                    </li>
                    <li>
                        <NavLink to={"Perifericos"}>Perifericos</NavLink>
                    </li>
                    <Carrito></Carrito>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
