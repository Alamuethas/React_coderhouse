import React from "react";
import { outlet } from "react-router-dom";
import CartaItem from "../CartaItem/CartaItem";
import "./categoria.css";

const Tienda = (props) => {
    const { lista } = props;
    return (
        <>
            <div id="conteiner">
                {lista.map((Comp, index) => (
                    <CartaItem
                        key={index}
                        id={Comp.id}
                        img={Comp.img}
                        titulo={Comp.titulo}
                        descrpicion={Comp.descripcion}
                    ></CartaItem>
                ))}
            </div>
        </>
    );
};

export default Tienda;