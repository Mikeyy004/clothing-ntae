"use client"

import React from 'react';
import { useEffect } from "react"
import styled from "styled-components"
import { useCart } from "../context/CartContext"

const NotificationContainer = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: ${({ show }) => (show ? "30px" : "-100px")};
  right: 30px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: 18px 30px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.default};
  z-index: 1000;
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
`

const NotificationIcon = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotificationText = styled.p`
  margin: 0;
`

const CartNotification = () => {
  const { showNotification, setShowNotification } = useCart()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [showNotification, setShowNotification])

  return (
    <NotificationContainer show={showNotification}>
      <NotificationIcon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </NotificationIcon>
      <NotificationText>Item added to your collection</NotificationText>
    </NotificationContainer>
  )
}

export default CartNotification

