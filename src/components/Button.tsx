"use client"
import styled, { css } from "styled-components"
import type { ButtonProps } from "../types"

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  display: inline-block;
  padding: 14px 36px;
  border-radius: 0;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: ${({ theme }) => theme.fonts.primary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: ${({ theme }) => theme.transitions.default};
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  ${({ variant, theme }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.dark};

      &:hover {
        background-color: ${theme.colors.primary};
        color: white;
      }
    `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: transparent;
      color: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.dark};
      }
    `}
`

const Button = ({ children, variant = "primary", onClick, type = "button" }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button

