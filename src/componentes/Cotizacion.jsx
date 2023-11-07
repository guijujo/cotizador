import { useState, useEffect } from "react";
import Opciones from "./Opciones";
import Navbar from "./Navbar";
import useCotizador from "../hooks/useCotizador";
import usePresupuestos from "../hooks/usePresupuestos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from "./Footer";

function Cotizacion() {
  const costoM2 = 35.86;
  const [precio, setPrecio] = useState(0);
  const [datos, setDatos] = useState([]);
  const { elementos, setElementos } = useCotizador();
  const { presupuestos, setPresupuestos } = usePresupuestos();
  const realizarCotizacion = () => {
    const { metros2, propiedad, ubicacion } = elementos;
    if (!propiedad || metros2 < 20 || !ubicacion) {
      Swal.fire("Error", "Debes completar los datos", "error");
    } else {
      const cuenta = costoM2 * metros2 * propiedad * ubicacion;
      setPrecio(cuenta.toFixed(2));
    }
  };

  const MySwal = withReactContent(Swal);

  const guardarCotizacion = () => {
    setPresupuestos([
      ...presupuestos,
      {
        fecha: new Date().toLocaleString(),
        ...elementos,
        cotizacion: (
          costoM2 *
          elementos.metros2 *
          elementos.propiedad *
          elementos.ubicacion
        ).toFixed(2),
      },
    ]);
    setPrecio(0);
    setElementos({ metros2: 20, propiedad: 0, ubicacion: 0 }); // Resetear los datos

    MySwal.fire({
      title: "¡Éxito!",
      text: "La cotización se ha guardado con éxito.",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  useEffect(() => {
    const leer = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un problema al obtener los datos del JSON!",
        });
      }
    };
    leer();
  }, []);

  return (
    <>
      <Navbar />
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <h1>Cotizador</h1>
        <Opciones
          datos={datos.filter(({ categoria }) => categoria === "propiedad")}
          label={"Tipo de propiedad"}
          tipo={"propiedad"}
        />
        <Opciones
          datos={datos.filter(({ categoria }) => categoria === "ubicacion")}
          label={"Tipo de ubicacion"}
          tipo={"ubicacion"}
        />
        <label htmlFor="metros2">Ingrese los metros cuadrados</label>
        <input
          type="number"
          id="metros2"
          placeholder="Ingrese los metros cuadrados de la propiedad"
          min={20}
          defaultValue={20}
          onInput={(e) =>
            setElementos({
              ...elementos,
              metros2: isNaN(parseInt(e.target.value))
                ? 20
                : parseInt(e.target.value) < 20
                ? 20
                : parseInt(e.target.value),
            })
          }
        />
        <label htmlFor="valor">Valor de la cotización $: </label>
        <input type="text" value={"$" + precio} placeholder="$" readOnly />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
        {precio !== 0 && (
          <>
            <button type="button" onClick={guardarCotizacion}>
              Guardar cotización
            </button>
          </>
        )}
      </form>
      <Footer />
    </>
  );
}

export default Cotizacion;
