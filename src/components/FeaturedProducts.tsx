"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import ProductCard from "../components/ProductCard"
import Button from "./Button"
import type { ProductType } from "../types"

const FeaturedSection = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.cream};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`

const SectionContainer = styled.div`
  position: relative;
  z-index: 1;
`

const SectionHeader = styled.div`
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 1px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.8;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ViewMore = styled.div`
  text-align: center;
  margin-top: 30px;
`

const products: ProductType[] = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: "$1,295",
    image: "https://i.pinimg.com/736x/a4/2b/d8/a42bd8e8a10892abe6a4c487c04e13e4.jpg",
  },
  {
    id: 2,
    name: "Cashmere Blend Sweater",
    price: "$895",
    image: "https://i.pinimg.com/736x/66/3b/ae/663baea6b8e45cd5d68e3f869a280e64.jpg",
  },
  {
    id: 3,
    name: "Italian Wool Blazer",
    price: "$1,450",
    image: "https://i.pinimg.com/236x/5d/c1/d5/5dc1d5a30893e9e99b8d9620e1e106c6.jpg",
  },
  {
    id: 4,
    name: "Leather Structured Handbag",
    price: "$1,895",
    image: "https://i.pinimg.com/736x/e4/8a/ce/e48ace2d9d432bbeb4d3857a1dd45ef9.jpg",
  },
]

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run the observer if we're in a browser environment
    if (typeof window !== "undefined" && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList) {
              entry.target.classList.add("visible")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      const elements = sectionRef.current.querySelectorAll(".animate")
      if (elements && elements.length > 0) {
        elements.forEach((el) => {
          if (el) observer.observe(el)
        })
      }

      return () => {
        if (elements && elements.length > 0) {
          elements.forEach((el) => {
            if (el) observer.unobserve(el)
          })
        }
      }
    }

    // If we're not in a browser or don't have a ref, make elements visible by default
    return () => {}
  }, [])

  return (
    <FeaturedSection id="featured">
      <SectionContainer className="container" ref={sectionRef}>
        <SectionHeader>
          <SectionTitle className="animate">Signature Collection</SectionTitle>
          <SectionSubtitle className="animate">
            Meticulously crafted pieces that embody sophistication and timeless style
          </SectionSubtitle>
        </SectionHeader>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} className="animate" />
          ))}
        </ProductsGrid>

        <ViewMore className="animate">
          <Button variant="secondary">View Full Collection</Button>
        </ViewMore>
      </SectionContainer>
    </FeaturedSection>
  )
}

export default FeaturedProducts

