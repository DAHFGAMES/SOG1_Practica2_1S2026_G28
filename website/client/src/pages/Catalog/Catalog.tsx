import { useState } from 'react';
import ProductCard from '../../components/molecules/ProductCard';
import type { Product } from '../../components/molecules/ProductCard';
import Card from '../../components/atoms/Card';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import './Catalog.css';

export default function Catalog() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <div className="catalog">
      <div className="catalog__header">
        <h1>Nuestro Catálogo</h1>
        <p>Descubre nuestra selección de cafés premium guatemaltecos</p>
      </div>
      <div className="catalog__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {added !== null && (
        <Card className="catalog__toast" padding="12px 24px" variant="convex">
          Producto agregado al carrito
        </Card>
      )}
    </div>
  );
}
