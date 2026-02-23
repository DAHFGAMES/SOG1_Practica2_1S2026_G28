import type { ReactNode } from 'react';
import './PaymentMethodSelector.css';

interface PaymentMethodSelectorProps {
  selected: string;
  onChange: (method: string) => void;
}

const CashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const CardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const BankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/><path d="M3 10h18"/><path d="M12 2L2 10h20L12 2z"/><path d="M5 10v11"/><path d="M19 10v11"/><path d="M9 10v11"/><path d="M14 10v11"/>
  </svg>
);

const methods: { id: string; label: string; icon: ReactNode }[] = [
  { id: 'efectivo', label: 'Efectivo', icon: <CashIcon /> },
  { id: 'tarjeta', label: 'Tarjeta', icon: <CardIcon /> },
  { id: 'transferencia', label: 'Transferencia', icon: <BankIcon /> },
];

export default function PaymentMethodSelector({ selected, onChange }: PaymentMethodSelectorProps) {
  return (
    <div className="payment-methods">
      <label className="payment-methods__label">Método de pago</label>
      <div className="payment-methods__grid">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={`payment-method ${selected === method.id ? 'payment-method--active' : ''}`}
            onClick={() => onChange(method.id)}
          >
            <span className="payment-method__icon">{method.icon}</span>
            <span className="payment-method__label">{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
