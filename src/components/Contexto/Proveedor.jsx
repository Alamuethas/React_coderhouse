import React from "react";
import { useState } from "react";
import { ItemContext } from "./ItemContext";

const Proveedor = ({ children }) => {
    const [Item, setItem] = useState([]);
    return (
        <ItemContext.Provider value={{ Item, setItem }}>
            {children}
        </ItemContext.Provider>
    );
};

export default Proveedor;