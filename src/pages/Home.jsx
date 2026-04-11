import { Link } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { usePanier } from '../context/PanierContext'
import './Home.css'

const featuredProducts = products.filter(p => p.featured).slice(0, 4)

export default function Home() {
  const { addToPanier } = usePanier();


  return (
    <div className="home">

      
      <section className="hero-banners">
        <div className="container hero-banners-grid">

          <Link to="/products" className="banner-main">
            <div className="banner-main-content">
              <p className="banner-eyebrow">Bienvenue chez PharmaFamily</p>
              <h2>Une offre exclusive<br />pour votre santé</h2>
              <div className="banner-price-tag">
                <span className="price-big">-15%</span>
                <span className="price-label">sur votre<br />1ère commande</span>
              </div>
              <span className="banner-cta">Découvrir</span>
            </div>
          </Link>

          <div className="banner-side">
            <Link to="/products?category=health-care" className="banner-small banner-blue">
              <div className="banner-small-content">
                <p className="banner-eyebrow-sm">Pour vous...</p>
                <h3>Health Care</h3>
                <span className="banner-cta-sm">J'en profite</span>
              </div>
            </Link>

            <Link to="/products" className="banner-small banner-pink">
              <div className="banner-small-content">
                <h3>Remises exceptionnelles</h3>
                <div className="banner-discount">
                  <span className="discount-up">jusqu'à</span>
                  <span className="discount-pct">-40%</span>
                </div>
                <span className="banner-eyebrow-sm">Livraison gratuite</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-item"> Livraison sur toute la Tunisie</div>
          <div className="trust-item"> Paiement sécurisé</div>
          <div className="trust-item"> Retour sous 30 jours</div>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Nos Catégories</h2>
            <Link to="/products" className="section-link">Voir tout →</Link>
          </div>
          <div className="categories-scroll">
            {categories.map(cat => (
              <Link key={cat.id} to={`/products?category=${cat.id}`} className="category-card" style={{ background: cat.color }}>
                {cat.image
                  ? <img src={cat.image} alt={cat.name} className="category-card-image" />
                  : <span className="category-initial">{cat.name.charAt(0)}</span>
                }
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Nos Produits Vedettes</h2>
            <Link to="/products" className="section-link">Voir tout →</Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToPanier={addToPanier} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="promo-banner">
        <div className="container">
          <h2>Offre du Mois</h2>
          <p>Jusqu'à 30% de remise sur les soins de peau, vitamines et produits bien-être. Offre limitée.</p>
          <Link to="/products" className="btn btn-primary btn-lg">Profiter de l'offre</Link>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <h2 className="section-title-center">Pourquoi choisir PharmaFamily ?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <span className="feature-icon">🛡️</span>
              <h3>Qualité garantie</h3>
              <p>Tous les produits sont testés — garantie satisfait ou remboursé.</p>
            </div>
            <div className="feature-card card">
              <span className="feature-icon"></span>
              <h3>Livraison rapide</h3>
              <p>Livraison sur toute la Tunisie en 24 à 48h.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}