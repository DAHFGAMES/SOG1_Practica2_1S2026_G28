import type { SelectHTMLAttributes } from 'react';
import './Select.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export default function Select({ label, options, error, id, className = '', ...props }: SelectProps) {
  return (
    <div className={`neu-select-wrapper ${className}`}>
      {label && <label htmlFor={id} className="neu-select-label">{label}</label>}
      <select id={id} className={`neu-select ${error ? 'neu-select--error' : ''}`} {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className="neu-select-error">{error}</span>}
    </div>
  );
}
