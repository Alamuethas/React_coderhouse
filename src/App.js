import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Proveedor from "./componentes/Contexto/Proveedor";
import ItemListContainer from "./componentes/itemListConteiner/ItemListContainer";
import Layout from "./componentes/Layout/Layout";
import Tienda from "./components/Paginas/Tienda";
import Info from "./componentes/Utils/Info"; 


//-------------------------------SEPARACION-------------------
var listaComponentes = [
  {
    id: "MotherAmd",
    img: "https://www.soscomputacion.com.ar/16861/mother-amd-gigabyte-a320m-s2h-am4-ryzen.jpg",
    titulo: "Mother Amd",
    descripcion: "Motherboard",
  },
  {
    id: "Nvidia",
    img: "https://www.tryhardware.com.ar/wp-content/uploads/2022/08/Placa-de-Video-EVGA-GeForce-RTX-3050-8GB-GDDR6-XC.jpg",
    titulo: "Rtx Nvidia 3050",
    descripcion: "Placa de video",
  },
  {
    id: "Procesador",
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-3600-0.jpg",
    titulo: "Ryzen 5",
    descripcion: "procesador",
  },
];
//-------------------------------SEPARACION-------------------
var listaComputadoras = [
  {
    id: "pc",
    img: "https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg",
    titulo: "Computadora",
    descripcion: "Computadora",
  },
  {
    id: "note1",
    img: "https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg",
    titulo: "Notebook ",
    descripcion: "notebook",
  },
  {
    id: "pc2",
    img: "https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg",
    titulo: "Computadora",
    descripcion: "computadora",
  },
];
//-------------------------------SEPARACION-------------------
var listaPerifericos = [
  {
    id: "redragon",
    img: "https://spacegamer.com.ar/img/Public/1058-producto-teclado-mecanico-redragon-kumara-white-switch-blue2-7813.jpg",
    titulo: "Kumara ",
    descripcion: "teclado mecanico",
  },
  {
    id: "hyperx",
    img: "https://http2.mlstatic.com/D_NQ_NP_730898-MLA42462914246_072020-O.webp",
    titulo: "auricular",
    descripcion: "auricular gaming",
  },
  {
    id: "corsair",
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-corsair-nightsword-rgb-fps-moba-0.jpg",
    titulo: "mouse corsair",
    descripcion: "mouse gaming",
  },
];
//-------------------------------SEPARACION-------------------
//-------------------------------SEPARACION-------------------
function App() {
  return (
    <React.StrictMode>
      <Proveedor>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<ItemListContainer />} />
            <Route
              path="/componentes"
              element={<Tienda lista={listaComponentes}></Tienda>}
            ></Route>
            <Route
              path="/componentes/"
              element={<Info lista={listaComponentes}></Info>}
            ></Route>
            <Route
              path="/perifericos/"
              element={<Tienda lista={listaPerifericos}></Tienda>}
            ></Route>
            <Route
              path="/perifericos/"
              element={<Info lista={listaPerifericos}></Info>}
            ></Route>
            <Route
              path="/computadoras/"
              element={<Tienda lista={listaComputadoras}></Tienda>}
            ></Route>
            <Route
              path="/computadoras/"
              element={<Info lista={listaComputadoras}></Info>}
            ></Route>
          </Routes>
        </Layout>
      </Proveedor>
    </React.StrictMode >
  );
}

export default App;
