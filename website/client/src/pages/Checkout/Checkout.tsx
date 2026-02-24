import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import PaymentMethodSelector from '../../components/molecules/PaymentMethodSelector';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../services/orderService';
import './Checkout.css';

interface CheckoutForm {
  nombre: string;
  telefono: string;
  direccion: string;
  metodoPago: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    nombre: '',
    telefono: '',
    direccion: '',
    metodoPago: 'efectivo',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="checkout">
        <Card className="checkout__empty" padding="48px">
          <svg className="checkout__empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h2>Tu carrito está vacío</h2>
          <p>Visita nuestro catálogo para elegir tu café favorito.</p>
          <Button variant="primary" onClick={() => navigate('/catalogo')}>
            Ir al Catálogo
          </Button>
        </Card>
      </div>
    );
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!form.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    else if (!/^\d{8}$/.test(form.telefono.trim())) newErrors.telefono = 'Ingresa un teléfono válido (8 dígitos)';
    if (!form.direccion.trim()) newErrors.direccion = 'La dirección es requerida';
    if (!form.metodoPago) newErrors.metodoPago = 'Selecciona un método de pago';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const productosResumen = items.map((i) => `${i.product.name} x${i.cantidad}`).join(', ');

    const orderPayload = {
      nombre: form.nombre,
      telefono: form.telefono,
      direccion: form.direccion,
      cantidad: items.reduce((s, i) => s + i.cantidad, 0),
      metodoPago: form.metodoPago,
      productoId: items[0].product.id,
      productoNombre: productosResumen,
      precioUnitario: 0,
      total: totalPrice,
    };

    const order = createOrder(orderPayload);
    clearCart();
    navigate('/confirmacion', {
      state: { order },
    });
    setSubmitting(false);
  };

  return (
    <div className="checkout">
      <h1 className="checkout__title">Finalizar Pedido</h1>

      <div className="checkout__layout">
        {/* Order Summary */}
        <Card className="checkout__summary" padding="28px">
          <h3>Resumen del pedido</h3>
          {items.map((item) => (
            <div key={item.product.id} className="checkout__product-preview">
              <div className="checkout__product-img-wrap">
                <img src={item.product.image} alt={item.product.name} />
              </div>
              <div>
                <p className="checkout__product-name">{item.product.name}</p>
                <p className="checkout__product-origin">Cantidad: {item.cantidad}</p>
              </div>
              <span className="checkout__product-subtotal">Q{(item.product.price * item.cantidad).toFixed(2)}</span>
            </div>
          ))}
          <div className="checkout__summary-divider" />
          <div className="checkout__summary-row checkout__summary-row--total">
            <span>Total</span>
            <span>Q{totalPrice.toFixed(2)}</span>
          </div>
        </Card>

        {/* Form */}
        <Card className="checkout__form-card" padding="32px">
          <form className="checkout__form" onSubmit={handleSubmit}>
            <h3>Datos de entrega</h3>

            <Input
              id="nombre"
              label="Nombre completo"
              placeholder="Ej: Juan Pérez"
              value={form.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              error={errors.nombre}
            />

            <Input
              id="telefono"
              label="Teléfono"
              placeholder="Ej: 55551234"
              value={form.telefono}
              onChange={(e) => handleChange('telefono', e.target.value)}
              error={errors.telefono}
            />

            <Input
              id="direccion"
              label="Dirección de entrega"
              placeholder="Ej: 5ta Avenida 10-20, Zona 1"
              value={form.direccion}
              onChange={(e) => handleChange('direccion', e.target.value)}
              error={errors.direccion}
            />

            <PaymentMethodSelector
              selected={form.metodoPago}
              onChange={(method) => handleChange('metodoPago', method)}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={submitting}
            >
              {submitting ? 'Procesando...' : `Confirmar Pedido — Q${totalPrice.toFixed(2)}`}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
