"use client"

import React from 'react';
import { useEffect } from "react"
import styled from "styled-components"
import { FiCheck } from "react-icons/fi"
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
        <FiCheck size={20} style={{ display: 'block' }} />
      </NotificationIcon>
      <NotificationText>Item added to your collection</NotificationText>
    </NotificationContainer>
  )
}

export default CartNotification

