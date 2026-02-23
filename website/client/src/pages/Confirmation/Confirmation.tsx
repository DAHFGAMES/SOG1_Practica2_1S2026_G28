import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import Button from '../../components/atoms/Button';
import Badge from '../../components/atoms/Badge';
import './Confirmation.css';

interface OrderData {
  id: string;
  nombre: string;
  telefono: string;
  direccion: string;
  cantidad: number;
  metodoPago: string;
  productoNombre: string;
  precioUnitario: number;
  total: number;
  fecha: string;
}

const paymentLabels: Record<string, string> = {
  efectivo: 'Efectivo',
  tarjeta: 'Tarjeta',
  transferencia: 'Transferencia',
};

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = (location.state as { order?: OrderData })?.order ?? null;

  if (!order) {
    return (
      <div className="confirmation">
        <Card className="confirmation__empty" padding="48px">
          <svg className="confirmation__empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
          <h2>No hay pedido para mostrar</h2>
          <p>Parece que no has realizado ningún pedido aún.</p>
          <Button variant="primary" onClick={() => navigate('/catalogo')}>
            Ir al Catálogo
          </Button>
        </Card>
      </div>
    );
  }

  const fecha = new Date(order.fecha);
  const fechaStr = fecha.toLocaleDateString('es-GT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="confirmation">
      <div className="confirmation__icon-wrapper">
        <Card className="confirmation__check-circle" padding="24px" variant="convex">
          <svg className="confirmation__check" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </Card>
      </div>

      <h1 className="confirmation__title">¡Pedido Confirmado!</h1>
      <p className="confirmation__subtitle">
        Gracias por tu compra, {order.nombre}. Tu pedido ha sido registrado exitosamente.
      </p>

      <Card className="confirmation__details" padding="32px">
        <div className="confirmation__row">
          <span className="confirmation__label">ID del Pedido</span>
          <Badge>{order.id}</Badge>
        </div>
        <div className="confirmation__row">
          <span className="confirmation__label">Fecha</span>
          <span className="confirmation__value">{fechaStr}</span>
        </div>
        <div className="confirmation__divider" />
        <div className="confirmation__row">
          <span className="confirmation__label">Producto</span>
          <span className="confirmation__value">{order.productoNombre}</span>
        </div>
        <div className="confirmation__row">
          <span className="confirmation__label">Cantidad</span>
          <span className="confirmation__value">{order.cantidad} lb</span>
        </div>
        <div className="confirmation__row">
          <span className="confirmation__label">Precio unitario</span>
          <span className="confirmation__value">Q{order.precioUnitario.toFixed(2)}</span>
        </div>
        <div className="confirmation__divider" />
        <div className="confirmation__row">
          <span className="confirmation__label">Dirección</span>
          <span className="confirmation__value">{order.direccion}</span>
        </div>
        <div className="confirmation__row">
          <span className="confirmation__label">Teléfono</span>
          <span className="confirmation__value">{order.telefono}</span>
        </div>
        <div className="confirmation__row">
          <span className="confirmation__label">Método de pago</span>
          <Badge variant="success">{paymentLabels[order.metodoPago] || order.metodoPago}</Badge>
        </div>
        <div className="confirmation__divider" />
        <div className="confirmation__row confirmation__row--total">
          <span className="confirmation__label">Total</span>
          <span className="confirmation__value">Q{order.total.toFixed(2)}</span>
        </div>
      </Card>

      <div className="confirmation__actions">
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          Volver al Inicio
        </Button>
        <Button variant="secondary" size="lg" onClick={() => navigate('/catalogo')}>
          Seguir Comprando
        </Button>
      </div>
    </div>
  );
}
