"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"
import type { CartContextType, ProductType } from "../types"

// Create the context with an undefined initial value
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>(null)

  const addToCart = (product: ProductType) => {
    setCartItems((prev) => prev + 1)
    setCurrentProduct(product)
    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        showNotification,
        setShowNotification,
        currentProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

