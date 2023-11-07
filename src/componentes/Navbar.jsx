import { Link } from 'react-router-dom';
import { FaClipboardList } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';
import { FaCalculator } from 'react-icons/fa6';
function Navbar() {
  const logo = '/SegurosUNTREF.webp';

  return (
    <>
      <div className='nav'>
        <input type='checkbox' id='nav-check' />
        <Link to={'/'} className='nav-header'>
          <img src={logo} itemType='image/webp' alt='Logo empresa' title='Seguros UNTREF' />
        </Link>
        <div className='nav-btn'>
          <label htmlFor='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className='nav-links'>
          <Link to={'/Cotizador'}><FaHouse/> Inicio</Link>
          <Link to={'/Cotizacion'}><FaCalculator/> Cotizador</Link>
          <Link to={'/Presupuestos'}><FaClipboardList/> Presupuestos</Link>          
        </div>
      </div>
    </>
  );
}

export default Navbar;
