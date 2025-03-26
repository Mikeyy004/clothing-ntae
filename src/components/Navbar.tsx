"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { useCart } from "../context/CartContext"

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ scrolled }) => (scrolled ? "15px 0" : "25px 0")};
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ scrolled, theme }) => (scrolled ? theme.colors.primary : "transparent")};
  box-shadow: ${({ scrolled, theme }) => (scrolled ? theme.shadows.md : "none")};
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    top: 80px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    text-align: center;
    transition: ${({ theme }) => theme.transitions.default};
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: 30px 0;
    height: 100vh;
  }
`

const NavItem = styled.li`
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 25px 0;
  }
`

const NavLink = styled.a<{ active?: boolean }>`
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  position: relative;
  transition: ${({ theme }) => theme.transitions.default};
  letter-spacing: 1px;
  padding: 5px 0;

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`

const CartIcon = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.7rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const { cartItems } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLinkClick = (id: string) => {
    setActiveLink(id)
    setIsOpen(false)
  }

  return (
    <NavbarContainer scrolled={scrolled}>
      <div className="container">
        <NavbarContent>
          <Logo>Maison Élégance</Logo>
          <NavLinks isOpen={isOpen}>
            <NavItem>
              <NavLink href="#home" active={activeLink === "home"} onClick={() => handleLinkClick("home")}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#featured" active={activeLink === "featured"} onClick={() => handleLinkClick("featured")}>
                Collection
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" active={activeLink === "about"} onClick={() => handleLinkClick("about")}>
                Our Story
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" active={activeLink === "contact"} onClick={() => handleLinkClick("contact")}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <CartIcon href="#cart">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <CartCount>{cartItems}</CartCount>
              </CartIcon>
            </NavItem>
          </NavLinks>
          <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </HamburgerButton>
        </NavbarContent>
      </div>
    </NavbarContainer>
  )
}

export default Navbar

