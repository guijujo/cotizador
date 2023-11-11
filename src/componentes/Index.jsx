import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
function Home() {
  return (
    <>
      <Navbar />
      <article className="contenedor">
        <Link to={"/cotizacion"}>
          <img
            src="/cotizador/SegurosUNTREF.webp"
            alt="Logo SeguroUNTREF"
            title="Logo Seguro UNTREF"
          />
        </Link>
        <h1>Seguros de viviendas</h1>
        <p>Cotizamos tu vivienda al mejor precio</p>
        <p>Pide tu cotización aquí</p>
        <Link to={"/cotizacion"}>
          <button>Cotización</button>
        </Link>
      </article>
      <Footer />
    </>
  );
}

export default Home;
