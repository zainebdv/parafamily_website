import { useState } from 'react'
import { categories } from '../data/products'
import './ProductCard.css'

export default function ProductCard({ product, onAddToPanier }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [added, setAdded] = useState(false)
  const cat = categories.find(c => c.id === product.category)

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAdd = (e) => {
    e.stopPropagation()
    if (onAddToPanier) {
      onAddToPanier(product)
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    }
  }

  const handleModalAdd = () => {
    if (onAddToPanier) {
      onAddToPanier(product)
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    }
  }

  const stars = (rating) => {
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0))
  }

  return (
    <>
      {/* ── Card ── */}
      <div className="product-card card" onClick={() => setModalOpen(true)}>
        <div className="product-card-img-wrap">
          <img src={product.image} alt={product.name} className="product-card-image" />
          {discount && <span className="discount-badge">-{discount}%</span>}
        </div>

        <div className="product-card-body">
          <span className="badge-green">{cat?.name || product.category}</span>
          <p className="product-name">{product.name}</p>

          <div className="product-rating">
            <span className="stars">{stars(product.rating)}</span>
            <span className="rating-count">({product.reviews})</span>
          </div>

          <div className="product-footer">
            <div className="product-price">
              <span className="price-current">{product.price.toFixed(3)} DT</span>
              {product.originalPrice && (
                <span className="price-original">{product.originalPrice.toFixed(3)} DT</span>
              )}
            </div>
          </div>

          <button className={`add-btn ${added ? 'add-btn--added' : ''}`} onClick={handleAdd}>
            {added ? '✓ Ajouté !' : '🛒 Ajouter au panier'}
          </button>
        </div>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>

            <div className="modal-inner">
              <div className="modal-img-wrap">
                <img src={product.image} alt={product.name} className="modal-img" />
                {discount && <span className="discount-badge modal-discount">-{discount}%</span>}
              </div>

              <div className="modal-info">
                <span className="badge-green">{cat?.name || product.category}</span>
                <h2 className="modal-title">{product.name}</h2>

                <div className="product-rating">
                  <span className="stars">{stars(product.rating)}</span>
                  <span className="rating-count">{product.rating} / 5 ({product.reviews} avis)</span>
                </div>

                <p className="modal-description">{product.description}</p>

                <div className="modal-price-row">
                  <span className="price-current modal-price">{product.price.toFixed(3)} DT</span>
                  {product.originalPrice && (
                    <span className="price-original">{product.originalPrice.toFixed(3)} DT</span>
                  )}
                </div>

                <button
                  className={`add-btn add-btn--modal ${added ? 'add-btn--added' : ''}`}
                  onClick={handleModalAdd}
                >
                  {added ? '✓ Ajouté au panier !' : '🛒 Ajouter au panier'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
