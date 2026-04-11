import { createContext, useContext, useState } from 'react'

const PanierContext = createContext()

export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([])

  const addToPanier = (product) => {
    setPanier(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromPanier = (id) => {
    setPanier(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromPanier(id)
      return
    }
    setPanier(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    )
  }

  const clearPanier = () => setPanier([])

  const panierTotal = panier.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const panierCount = panier.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <PanierContext.Provider value={{ panier, addToPanier, removeFromPanier, updateQuantity, clearPanier, panierTotal, panierCount }}>
      {children}
    </PanierContext.Provider>
  )
}

export function usePanier() {
  return useContext(PanierContext)
}
