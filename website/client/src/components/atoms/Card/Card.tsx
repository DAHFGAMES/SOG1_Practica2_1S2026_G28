import type { ReactNode, HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'pressed' | 'convex';
  children: ReactNode;
  padding?: string;
}

export default function Card({
  variant = 'flat',
  children,
  padding = '24px',
  className = '',
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={`neu-card neu-card--${variant} ${className}`}
      style={{ padding, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
