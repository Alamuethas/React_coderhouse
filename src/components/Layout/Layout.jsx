import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../navBar/NavBar";
import "./layout.css";

const Layout = (props) => {
    const { children } = props;
    return (
        <div id="layout">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;