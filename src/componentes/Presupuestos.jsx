import { useState } from 'react';
import Navbar from './Navbar';
import usePresupuestos from '../hooks/usePresupuestos';
import Presupuesto from './Presupuesto';
import Footer from './Footer';

const Presupuestos = () => {
  const { presupuestos, setPresupuestos } = usePresupuestos();
  const [paginaActual, setPaginaActual] = useState(1);
  const resultadosPorPagina = 4;

  // Calcular el número total de páginas
  const paginas = Math.ceil(presupuestos.length / resultadosPorPagina);

  // Obtener solo los resultados para la página actual
  const presupuestosActuales = presupuestos.slice((paginaActual - 1) * resultadosPorPagina, paginaActual * resultadosPorPagina);

  // Función para cambiar de página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  // Función para borrar el historial de cotizaciones
  const borrarHistorial = () => {
    setPresupuestos([]);
  };

  // Función para eliminar un presupuesto específico
  const eliminarPresupuesto = (indice) => {
    setPresupuestos((presupuestosActuales) => presupuestosActuales.filter((_, i) => i !== indice));
  };

  return (
    <>
      <Navbar />
      <h2>Historial de cotizaciones</h2>
      {presupuestos.length > 0 && <button onClick={borrarHistorial}>Borrar historial</button>}
      <ul>
        {presupuestosActuales.map((elemento, indice) => (
          <Presupuesto key={indice} {...elemento} onDelete={() => eliminarPresupuesto(indice)} />
        ))}
      </ul>
      {presupuestos.length > 0 && (
        <div id='paginacion'>
          <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            Anterior
          </button>
          {Array.from({length: paginas}, (_, i) => i + 1).map(numeroPagina => (
            <button key={numeroPagina} onClick={() => cambiarPagina(numeroPagina)}>
              {numeroPagina}
            </button>
          ))}
          <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === paginas}>
            Siguiente
          </button>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Presupuestos;
