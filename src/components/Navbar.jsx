import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const navCategories = [
  { label: 'Women Care',   id: 'women-care' },
  { label: 'Men Care',     id: 'men-care' },
  { label: 'Mom & Baby',   id: 'baby-care' },
  { label: 'Sun Care',     id: 'sun-care' },
  { label: 'Health Care',  id: 'health-care' },
  { label: 'Orthopédie',   id: 'orthopedics' },
  { label: 'Offre du Mois', id: 'promo', highlight: true },
]

export default function Navbar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`)
      setSearch('')
    }
  }

  return (
    <header className="site-header">

      {/* Top bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-social">
            <a href="https://www.facebook.com/profile.php?id=61555161667976&sk=about" className="social-link"><img src="fb_logo.svg" alt="FB" /></a>
            <a href="https://www.instagram.com/para.pharmafamily?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link"><img src="insta_logo.svg" alt="IG" /></a>
          </div>
          <nav className="top-bar-links">
            <Link to="/products">Nouveautés</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="container main-header-inner">

          <Link to="/" className="site-logo">
            <span className="logo-pharma">Pharma</span>
            <span className="logo-family">Family</span>
          </Link>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </form>

          <div className="header-icons">
            <Link to="/contact" className="header-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Category bar */}
      <nav className={`cat-nav ${menuOpen ? 'open' : ''}`}>
        <div className="container cat-nav-inner">
          {navCategories.map(cat => (
            <NavLink
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className={`cat-nav-link ${cat.highlight ? 'highlight' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {cat.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}