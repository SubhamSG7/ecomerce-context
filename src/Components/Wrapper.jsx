import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { CartContextProvider } from '../Context/CartContext'
import { CurrencyContextProvider } from '../Context/CurrencyContext'

export default function Wrapper() {
  return (
    <>
    <CartContextProvider>
      <CurrencyContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </CurrencyContextProvider>
    </CartContextProvider>
    
    </>
  )
}
