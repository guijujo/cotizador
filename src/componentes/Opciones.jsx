import PropTypes from "prop-types";
import useCotizador from "../hooks/useCotizador";

function Opciones({ datos, label, tipo }) {
  const { elementos, setElementos } = useCotizador();
  return (
    <>
      <label htmlFor={tipo}>{label}</label>
      <select
        name={tipo}
        id={tipo}
        defaultValue={0}
        onInput={(e) =>
          setElementos({
            ...elementos,
            [tipo]: isNaN(parseFloat(e.target.value))
              ? 0
              : parseFloat(e.target.value),
          })
        }
      >
        <option disabled value={0}>
          ...
        </option>
        {datos.map((elemento, indice) => (
          <option key={indice} value={elemento.factor}>
            {elemento.tipo}
          </option>
        ))}
      </select>
    </>
  );
}

Opciones.propTypes = {
  datos: PropTypes.arrayOf(
    PropTypes.shape({
      factor: PropTypes.number.isRequired,
      tipo: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
};

export default Opciones;
