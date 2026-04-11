import { Link } from 'react-router-dom'
import { usePanier } from '../context/PanierContext'
import './Panier.css'

export default function Panier() {
  const { panier, removeFromPanier, updateQuantity, clearPanier, panierTotal } = usePanier()

  if (panier.length === 0) {
    return (
      <div className="panier-page">
        <div className="panier-empty">
          <div className="panier-empty-icon">🛒</div>
          <h2>Votre panier est vide</h2>
          <p>Découvrez nos produits et ajoutez-les à votre panier.</p>
          <Link to="/products" className="btn-continuer">Continuer mes achats</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="panier-page">
      <div className="panier-header">
        <h1>Mon Panier</h1>
        <span className="panier-count">{panier.reduce((s, i) => s + i.quantity, 0)} article(s)</span>
      </div>

      <div className="panier-layout">
        <div className="panier-items">
          {panier.map(item => (
            <div key={item.id} className="panier-item">
              <img
                src={item.image}
                alt={item.name}
                className="panier-item-img"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="panier-item-info">
                <h3 className="panier-item-name">{item.name}</h3>
                <p className="panier-item-price">{item.price.toFixed(3)} DT / unité</p>
              </div>
              <div className="panier-item-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Diminuer"
                >−</button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Augmenter"
                >+</button>
              </div>
              <p className="panier-item-total">
                {(item.price * item.quantity).toFixed(3)} DT
              </p>
              <button
                className="panier-item-remove"
                onClick={() => removeFromPanier(item.id)}
                aria-label="Retirer"
              >✕</button>
              
            </div>
          ))}

          <div className="panier-actions">
            <Link to="/products" className="btn-continuer">← Continuer mes achats</Link>
            <button className="btn-vider" onClick={clearPanier}>Vider le panier</button>
          </div>
        </div>

        <aside className="panier-summary">
          <h2>Récapitulatif</h2>

          <div className="summary-lines">
            {panier.map(item => (
              <div key={item.id} className="summary-line">
                <span>{item.name.length > 30 ? item.name.slice(0, 30) + '…' : item.name} × {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(3)} DT</span>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>Total</span>
            <span>{panierTotal.toFixed(3)} DT</span>
          </div>

          <p className="summary-shipping">Livraison calculée à la prochaine étape</p>

          <button className="btn-commander">
            Passer la commande
          </button>
        </aside>
      </div>
    </div>
  )
}
