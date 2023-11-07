import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const useLocalStorage = (clave, valorInicial) => {
  const obtener = () => {
    try {
      if (localStorage.getItem(clave)) {
        return JSON.parse(localStorage.getItem(clave));
      }
      localStorage.setItem(clave, JSON.stringify(valorInicial));
      return valorInicial;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al obtener los datos del almacenamiento local!',
      });
    }
  };
  const [valor, setValor] = useState(obtener);

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al establecer los datos en el almacenamiento local!',
      });
    }
  }, [valor, clave]);
  return [valor, setValor];
};

export default useLocalStorage;