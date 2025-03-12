"use client"
import styled from "styled-components"
import type { ProductType } from "../types"
import { useCart } from "../context/CartContext"

const Card = styled.div`
  background-color: white;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.default};
  animation: fadeIn 1s ease;
  position: relative;
  opacity: 1; /* Start visible for SSR */
  transform: translateY(0); /* Start with no transform for SSR */
  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), 
              transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (min-width: 768px) {
    opacity: 0;
    transform: translateY(30px);
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 350px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

const QuickView = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  padding: 15px 0;
  transition: ${({ theme }) => theme.transitions.default};

  ${Card}:hover & {
    bottom: 0;
  }
`

const QuickViewButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const ProductInfo = styled.div`
  padding: 25px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.5px;
`

const Price = styled.p`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  letter-spacing: 1px;
`

const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    letter-spacing: 2px;
  }
`

interface ProductCardProps {
  product: ProductType
  className?: string
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card className={className}>
      <ProductImage>
        <Image src={product.image || "/placeholder.svg"} alt={product.name} />
        <QuickView>
          <QuickViewButton>Quick View</QuickViewButton>
        </QuickView>
      </ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <Price>{product.price}</Price>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ProductInfo>
    </Card>
  )
}

export default ProductCard

