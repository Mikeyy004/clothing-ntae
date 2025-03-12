"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import Button from "./Button"

const HeroSection = styled.section`
  height: 100vh;
  background-image: url('/placeholder.svg?height=1080&width=1920');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 102, 35, 0.7);
  backdrop-filter: blur(2px);
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 0 20px;
`

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  animation: fadeInDown 1.2s ease;
  letter-spacing: 4px;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 40px;
  animation: fadeInUp 1.2s ease;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`

const ButtonWrapper = styled.div`
  animation: fadeIn 1.8s ease;
`

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Only run the scroll effect if we're in a browser environment
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (heroRef.current) {
          const scrollPosition = window.pageYOffset
          heroRef.current.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }

    // If we're not in a browser, do nothing
    return () => {}
  }, [])

  return (
    <HeroSection id="home" ref={heroRef}>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>Timeless Elegance, Modern Luxury</HeroTitle>
        <HeroSubtitle>Discover Curated Fashion For The Discerning Individual</HeroSubtitle>
        <ButtonWrapper>
          <Button
            variant="primary"
            onClick={() => {
              document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore Collection
          </Button>
        </ButtonWrapper>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero

