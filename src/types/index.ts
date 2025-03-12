import type React from "react"

export interface ThemeType {
  colors: {
    primary: string
    primaryDark: string
    secondary: string
    secondaryLight: string
    background: string
    cream: string
    dark: string
    text: string
    lightGray: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  fontWeights: {
    light: number
    regular: number
    medium: number
    semiBold: number
    bold: number
  }
  shadows: {
    sm: string
    md: string
    lg: string
  }
  transitions: {
    default: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  container: {
    width: string
    padding: string
  }
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export interface ProductType {
  id: number
  name: string
  price: string
  image: string
}

export interface TestimonialType {
  id: number
  text: string
  name: string
  title: string
  rating: number
}

export interface CartContextType {
  cartItems: number
  addToCart: (product: ProductType) => void
  showNotification: boolean
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>
  currentProduct: ProductType | null
}

