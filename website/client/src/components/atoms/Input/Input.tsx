import type { InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, id, className = '', ...props }: InputProps) {
  return (
    <div className={`neu-input-wrapper ${className}`}>
      {label && <label htmlFor={id} className="neu-input-label">{label}</label>}
      <input id={id} className={`neu-input ${error ? 'neu-input--error' : ''}`} {...props} />
      {error && <span className="neu-input-error">{error}</span>}
    </div>
  );
}
