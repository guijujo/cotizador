import { useContext } from "react";
import PresupuestosContext from "../contextos/presupuestosContext";

const usePresupuestos = () => useContext(PresupuestosContext);

export default usePresupuestos;
