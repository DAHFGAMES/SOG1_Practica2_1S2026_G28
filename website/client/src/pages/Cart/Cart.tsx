import { useNavigate } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import Button from '../../components/atoms/Button';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart">
        <Card className="cart__empty" padding="48px">
          <svg className="cart__empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos desde nuestro catálogo para comenzar.</p>
          <Button variant="primary" onClick={() => navigate('/catalogo')}>
            Ir al Catálogo
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Tu Carrito</h1>

      <div className="cart__layout">
        <div className="cart__items">
          {items.map((item) => (
            <Card key={item.product.id} className="cart__item" padding="20px">
              <div className="cart__item-img-wrap">
                <img src={item.product.image} alt={item.product.name} />
              </div>
              <div className="cart__item-info">
                <h3>{item.product.name}</h3>
                <p className="cart__item-origin">{item.product.origin}</p>
                <p className="cart__item-price">Q{item.product.price.toFixed(2)} / unidad</p>
              </div>
              <div className="cart__item-actions">
                <div className="cart__qty-control">
                  <button
                    type="button"
                    className="cart__qty-btn"
                    onClick={() => updateQuantity(item.product.id, item.cantidad - 1)}
                  >
                    −
                  </button>
                  <span className="cart__qty-value">{item.cantidad}</span>
                  <button
                    type="button"
                    className="cart__qty-btn"
                    onClick={() => updateQuantity(item.product.id, item.cantidad + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="cart__item-subtotal">
                  Q{(item.product.price * item.cantidad).toFixed(2)}
                </p>
                <button
                  type="button"
                  className="cart__remove-btn"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Eliminar
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="cart__summary" padding="28px">
          <h3>Resumen</h3>
          {items.map((item) => (
            <div key={item.product.id} className="cart__summary-row">
              <span>{item.product.name} x{item.cantidad}</span>
              <span>Q{(item.product.price * item.cantidad).toFixed(2)}</span>
            </div>
          ))}
          <div className="cart__summary-divider" />
          <div className="cart__summary-row cart__summary-row--total">
            <span>Total</span>
            <span>Q{totalPrice.toFixed(2)}</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => navigate('/checkout')}
          >
            Proceder al Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
}
