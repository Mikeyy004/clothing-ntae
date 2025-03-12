"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Button from "./Button"

const NewsletterSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.cream};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.05;
  }
`

const NewsletterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
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
`

const NewsletterTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const NewsletterDescription = styled.p`
  margin-bottom: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 1.1rem;
`

const NewsletterForm = styled.form`
  display: flex;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const NewsletterInput = styled.input`
  flex: 1;
  padding: 15px 25px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(11, 102, 35, 0.1);
  }
`

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const contentRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert("Thank you for subscribing to our private collection")
      setEmail("")
    }
  }

  useEffect(() => {
    // Only run the observer if we're in a browser environment
    if (typeof window !== "undefined" && contentRef.current) {
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

      observer.observe(contentRef.current)

      return () => {
        if (contentRef.current) {
          observer.unobserve(contentRef.current)
        }
      }
    }

    // If we're not in a browser or don't have a ref, make elements visible by default
    return () => {}
  }, [])

  return (
    <NewsletterSection id="newsletter">
      <div className="container">
        <NewsletterContent ref={contentRef}>
          <NewsletterTitle>Join Our Private Collection</NewsletterTitle>
          <NewsletterDescription>
            Subscribe to receive exclusive previews of new collections, private event invitations, and personalized
            style recommendations.
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </NewsletterForm>
        </NewsletterContent>
      </div>
    </NewsletterSection>
  )
}

export default Newsletter

