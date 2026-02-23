import type { Product } from '../components/molecules/ProductCard';

export const products: Product[] = [
  {
    id: 1,
    name: 'Café Soluble',
    description: 'Café soluble de alta calidad, listo para preparar en segundos. Ideal para quienes buscan practicidad sin sacrificar el sabor auténtico guatemalteco.',
    price: 45.00,
    image: '/assets/01_soluble.jpeg',
    secondaryImage: '/assets/02_soluble.webp',
    origin: 'Guatemala',
  },
  {
    id: 2,
    name: 'Café en Grano al Gusto',
    description: 'Granos selectos tostados artesanalmente. Preparamos tu café en grano según tu preferencia: molido fino, medio o grueso para la experiencia perfecta.',
    price: 85.00,
    image: '/assets/01_grano.webp',
    secondaryImage: '/assets/02_grano.jpeg',
    origin: 'Tierras Altas de Guatemala',
  },
];
