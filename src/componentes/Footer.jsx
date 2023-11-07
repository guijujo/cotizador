import '../estilos/footer.css'
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6'
function Footer() {
    return (
        <>
        <footer>
            <article id='contactos'>
                <h2>Contactos</h2>
                <p><a href='mailto:seguros@untref.com'> <FaEnvelope/> Email: seguros@untref.com</a></p>
                <p><a href='tel:+5411333444'><FaWhatsapp/> Teléfono: +5411333444</a></p>

            </article>
            <article id='redes'>
                <h2>Redes Sociales</h2>
                <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><FaFacebook/> Facebook</a>
                <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><FaInstagram/> Instagram</a>
                <a href='https://www.x.com' target='_blank' rel='noreferrer'><RiTwitterXFill/> Twitter</a>
            </article>
            <article id='horarios'>
                <h2>Horarios de atención</h2>
                <p>Lunes a Viernes 9am - 7pm</p>
                <p>Sábados y Domingos cerrado</p>
            </article>
        </footer>
        </>
    );
}

export default Footer;