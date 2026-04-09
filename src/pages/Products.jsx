import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

const SORT_OPTIONS = [
  { value: 'default',    label: 'Par défaut' },
  { value: 'price-asc',  label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating',     label: 'Mieux notés' },
  { value: 'name',       label: 'Nom A–Z' },
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [sort, setSort] = useState('default')
  const [priceMax, setPriceMax] = useState(100)

  const selectedCategory = searchParams.get('category') || ''

  const setCategory = (cat) => {
    if (cat) setSearchParams({ category: cat })
    else setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategory) list = list.filter(p => p.category === selectedCategory)
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    list = list.filter(p => p.price <= priceMax)
    switch (sort) {
      case 'price-asc':  return list.sort((a, b) => a.price - b.price)
      case 'price-desc': return list.sort((a, b) => b.price - a.price)
      case 'rating':     return list.sort((a, b) => b.rating - a.rating)
      case 'name':       return list.sort((a, b) => a.name.localeCompare(b.name))
      default:           return list
    }
  }, [selectedCategory, search, sort, priceMax])

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <h1>Nos Produits</h1>
          <p>Découvrez {products.length}+ produits santé et bien-être</p>
        </div>
      </div>

      <div className="container products-layout">

        {/* Sidebar */}
        <aside className="filters-sidebar card">
          <h3>Filtres</h3>

          <div className="filter-group">
            <label className="filter-label">Recherche</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Rechercher..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">Catégorie</label>
            <ul className="category-filter">
              <li>
                <button className={`cat-btn ${!selectedCategory ? 'active' : ''}`} onClick={() => setCategory('')}>
                  Toutes
                  <span className="cat-count">{products.length}</span>
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setCategory(cat.id)}
                  >
                    <span>{cat.name}</span>
                    <span className="cat-count">{products.filter(p => p.category === cat.id).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <label className="filter-label">Prix max : {priceMax} DT</label>
            <input type="range" min={5} max={100} value={priceMax} onChange={e => setPriceMax(Number(e.target.value))} className="price-range" />
            <div className="price-labels"><span>5 DT</span><span>100 DT</span></div>
          </div>

          <button className="btn btn-ghost btn-sm" onClick={() => { setSearch(''); setPriceMax(100); setCategory('') }}>
            Réinitialiser
          </button>
        </aside>

        {/* Main */}
        <div className="products-main">
          <div className="products-toolbar">
            <p className="results-count">
              <strong>{filtered.length}</strong> produit{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
            </p>
            <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>🔍</span>
              <h3>Aucun produit trouvé</h3>
              <p>Essayez de modifier vos filtres.</p>
            </div>
          ) : (
            <div className="products-grid-main">
              {filtered.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}