import { useContext } from 'react';
import PresupuestosContext from '../contextos/PresupuestosContext';

const usePresupuestos = () => useContext(PresupuestosContext);

export default usePresupuestos;