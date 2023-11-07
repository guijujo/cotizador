import { useContext } from 'react';
import CotizadorContext from '../contextos/CotizadorContext';

const useCotizador = () => useContext(CotizadorContext);

export default useCotizador;