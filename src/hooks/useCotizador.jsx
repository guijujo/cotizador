import { useContext } from "react";
import CotizadorContext from "../contextos/cotizadorContext";

const useCotizador = () => useContext(CotizadorContext);

export default useCotizador;
