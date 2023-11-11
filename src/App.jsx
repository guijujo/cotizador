import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/index.jsx";
import Cotizacion from "./componentes/cotizacion.jsx";
import Presupuestos from "./componentes/presupuestos.jsx";
import CotizadorContext from "./contextos/cotizadorContext.jsx";
import PresupuestosContext from "./contextos/presupuestosContext.jsx";
import useLocalstorage from "./hooks/useLocalStorage.jsx";
import { useState } from "react";

function App() {
  const [presupuestos, setPresupuestos] = useLocalstorage("presupuestos", []);
  const [elementos, setElementos] = useState({
    metros2: 20,
    propiedad: 0,
    ubicacion: 0,
  });

  return (
    <>
      <PresupuestosContext.Provider value={{ presupuestos, setPresupuestos }}>
        <CotizadorContext.Provider value={{ elementos, setElementos }}>
          <HashRouter>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/cotizacion/" element={<Cotizacion />} />
              <Route path="/presupuestos/" element={<Presupuestos />} />
            </Routes>
          </HashRouter>
        </CotizadorContext.Provider>
      </PresupuestosContext.Provider>
    </>
  );
}

export default App;
