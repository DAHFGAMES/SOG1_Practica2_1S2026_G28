import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__top">
          <div className="app-footer__brand">
            <Logo size="md" />
            <p className="app-footer__tagline">
              El mejor café de Guatemala, directo a tu puerta.
            </p>
          </div>

          <div className="app-footer__col">
            <h4 className="app-footer__col-title">Navegación</h4>
            <Link to="/" className="app-footer__link">Inicio</Link>
            <Link to="/catalogo" className="app-footer__link">Catálogo</Link>
            <Link to="/carrito" className="app-footer__link">Carrito</Link>
          </div>

          <div className="app-footer__col">
            <h4 className="app-footer__col-title">Contacto</h4>
            <span className="app-footer__info">Guatemala, C.A.</span>
            <span className="app-footer__info">info@quetzaldev.gt</span>
            <span className="app-footer__info">+502 5555-1234</span>
          </div>
        </div>

        <div className="app-footer__divider" />

        <div className="app-footer__bottom">
          <p className="app-footer__copy">
            &copy; {new Date().getFullYear()} QuetzalDev Coffee. Todos los derechos reservados.
          </p>
          <p className="app-footer__credits">
            Hecho con dedicación en Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
}
