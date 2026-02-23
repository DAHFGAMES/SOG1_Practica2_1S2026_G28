import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import './ProductCard.css';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  secondaryImage?: string;
  origin: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="product-card">
      <div className="product-card__image-wrapper">
        <img src={product.image} alt={product.name} className="product-card__img" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__origin">{product.origin}</p>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">Q{product.price.toFixed(2)}</span>
          <Button variant="primary" size="sm" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </Card>
  );
}
