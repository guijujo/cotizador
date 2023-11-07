import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Index() {
  return (
    <>
      <Navbar />
      <article className="contenedor">
        <Link to={"/Cotizacion"}>
          <img
            src="/cotizador/SegurosUNTREF.webp"
            alt="Logo SeguroUNTREF"
            title="Logo Seguro UNTREF"
          />
        </Link>
        <h1>Seguros de viviendas</h1>
        <p>Cotizamos tu vivienda al mejor precio</p>
        <p>Pide tu cotización aquí</p>
        <Link to={"/Cotizacion"}>
          <button>Cotización</button>
        </Link>
      </article>
      <Footer />
    </>
  );
}

export default Index;
