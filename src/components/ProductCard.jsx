import { categories } from '../data/products'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const cat = categories.find(c => c.id === product.category)

  return (
    <div className="product-card card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-body">
        <span className="badge-green">{cat?.name || product.category}</span>
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="price-current">{product.price.toFixed(2)} DT</span>
        </div>
      </div>
    </div>
  )
}
