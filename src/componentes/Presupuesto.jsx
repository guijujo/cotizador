import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6'

const Presupuesto = ({ index, fecha, metros2, propiedad, ubicacion, cotizacion, onDelete }) => {
  const [prop, setProp] = useState(null);
  const [ubi, setUbi] = useState(null);

  useEffect(() => {
    const datos = async () => {
      let query = await (await fetch('/data.json')).json();
      setProp(query.find(({ factor }) => factor === propiedad));
      setUbi(query.find(({ factor }) => factor === ubicacion));
    };
    datos();
  }, [propiedad, ubicacion]);

  const handleDelete = () => {
    // Llama a la función onDelete con el índice como argumento para eliminar la consulta.
    onDelete(index);
  };

  return (
    <>
      <li>
        <div id='titulo'>
          <h4>Fecha: {fecha}</h4>
          <button id='eliminar' onClick={handleDelete}> <FaX/> </button>
        </div>
        <div id='propiedades'>
          <p>Metros: <span>{metros2 + 'm2'}</span></p>
          <p>Propiedad: <span>{prop && prop.tipo}</span></p>
          <p>Ubicacion: <span>{ubi && ubi.tipo}</span></p>
        </div>
        <div id='cotizacion'>
          <span>Cotizacion: {'$' + cotizacion} </span>
        </div>
      </li>
    </>
  );
};

export default Presupuesto;
