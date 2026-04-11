import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-pharma">Pharma</span>
              <span className="footer-family">Family</span>
            </Link>
            <p>Votre partenaire santé de confiance. Produits de qualité et livraison rapide sur toute la Tunisie.</p>
          </div>

          <div className="footer-col">
            <h4>Liens Rapides</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/products">Produits</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Catégories</h4>
            <ul>
              <li><Link to="/products?category=women-care">Women Care</Link></li>
              <li><Link to="/products?category=health-care">Health Care</Link></li>
              <li><Link to="/products?category=baby-care">Mom & Baby</Link></li>
              <li><Link to="/products?category=sun-care">Sun Care</Link></li>
              <li><Link to="/products?category=orthopedics">Orthopédie</Link></li>
              <li><Link to="/products?category=hair-care">Hair Care</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📍 <a href="https://maps.google.com/?q=Rue+14+Janvier+Rond+point+Zarrouk" target="_blank" rel="noopener noreferrer">Rue 14 Janvier, Zarrouk</a></li>
              <li>📞 +216 29 438 826</li>
              <li>✉️ para.pharmafamily@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PharmaFamily. Tous droits réservés.</p>
          <div className="footer-badges">
            <span>🚚 Livraison Tunisie</span>
            <span>🔒 Paiement sécurisé</span>
            <span>↩️ Retour 30 jours</span>
          </div>
        </div>
      </div>
    </footer>
  )
}