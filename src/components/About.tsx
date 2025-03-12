"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import Button from "../components/Button"

const AboutSection = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.05;
    z-index: 0;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.05;
    z-index: 0;
  }
`

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 1;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const AboutImage = styled.div`
  flex: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    z-index: -1;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }

  img {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const AboutText = styled.div`
  flex: 1;
`

const AboutTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`

const AboutParagraph = styled.p`
  margin-bottom: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 1.9;
`

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run the observer if we're in a browser environment
    if (typeof window !== "undefined" && aboutRef.current) {
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

      observer.observe(aboutRef.current)

      return () => {
        if (aboutRef.current) {
          observer.unobserve(aboutRef.current)
        }
      }
    }

    // If we're not in a browser or don't have a ref, make elements visible by default
    return () => {}
  }, [])

  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContent ref={aboutRef}>
          <AboutImage>
            <img src="https://i.pinimg.com/736x/df/a5/ba/dfa5ba772f8095588e3f1ac44fd33065.jpg" alt="Our Atelier" />
          </AboutImage>
          <AboutText>
            <AboutTitle>Our Heritage</AboutTitle>
            <AboutParagraph>
              Founded in 2010, Maison Élégance represents the pinnacle of contemporary luxury fashion. Our pieces are
              meticulously crafted by master artisans who blend traditional techniques with modern innovation.
            </AboutParagraph>
            <AboutParagraph>
              We believe in the philosophy of conscious luxury—creating timeless pieces that transcend seasons and
              trends. Each garment in our collection embodies our commitment to exceptional quality, ethical sourcing,
              and sustainable practices.
            </AboutParagraph>
            <AboutParagraph>
              From the selection of the finest materials to the final stitch, every detail is considered with precision
              and care, ensuring that each piece tells a story of craftsmanship and elegance.
            </AboutParagraph>
            <Button variant="secondary">Discover Our Story</Button>
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  )
}

export default About

