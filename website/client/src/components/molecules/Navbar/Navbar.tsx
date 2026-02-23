import { Link, useLocation } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import { useCart } from '../../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="neu-navbar">
      <div className="neu-navbar__container">
        <Link to="/" className="neu-navbar__brand">
          <Logo size="sm" />
        </Link>
        <div className="neu-navbar__links">
          <Link to="/" className={`neu-navbar__link ${isActive('/') ? 'neu-navbar__link--active' : ''}`}>
            Inicio
          </Link>
          <Link to="/catalogo" className={`neu-navbar__link ${isActive('/catalogo') ? 'neu-navbar__link--active' : ''}`}>
            Catálogo
          </Link>
          <Link to="/carrito" className={`neu-navbar__cart-link ${isActive('/carrito') ? 'neu-navbar__link--active' : ''}`}>
            <svg className="neu-navbar__cart-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {totalItems > 0 && (
              <span className="neu-navbar__cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
