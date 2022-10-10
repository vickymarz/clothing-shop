import React from 'react'
import Nav from './Nav'
import logo from '../../assets/images/logo.png'
import Currency from './Currency'
import Cart from './Cart'

const Header = () => {
  return (
    <>
    <header>
        <Nav />
        <img src={logo} alt='logo' />
        <div>
        <Currency />
        <Cart />
        </div>
    </header>

    </>
  )
}

export default Header
