import type { Product } from '../components/molecules/ProductCard';

export interface OrderFormData {
  nombre: string;
  telefono: string;
  direccion: string;
  cantidad: number;
  metodoPago: string;
  producto: Product | null;
}

export interface Order extends OrderFormData {
  id: string;
  fecha: string;
  total: number;
}
