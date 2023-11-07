import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './componentes/Index';
import Cotizacion from './componentes/Cotizacion';
import Presupuestos from './componentes/Presupuestos';
import CotizadorContext from './contextos/CotizadorContext';
import PresupuestosContext from './contextos/PresupuestosContext';
import { useState } from 'react';
import useLocalstorage from './hooks/useLocalStorage';

function App() {
  const [presupuestos, setPresupuestos] = useLocalstorage('presupuestos', []);
  const [elementos, setElementos] = useState({
    metros2: 20,
    propiedad: 0,
    ubicacion: 0,
  });

  return (
    <>
      <PresupuestosContext.Provider value={{ presupuestos, setPresupuestos }}>
        <CotizadorContext.Provider value={{ elementos, setElementos }}>
          <BrowserRouter>
            <Routes>
              <Route path='/Cotizador' index element={<Index />} />
              <Route path='/Cotizacion' element={<Cotizacion />} />
              <Route path='/Presupuestos' element={<Presupuestos />} />
            </Routes>
          </BrowserRouter>
        </CotizadorContext.Provider>
      </PresupuestosContext.Provider>
    </>
  )
}

export default App
