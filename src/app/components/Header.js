import React from 'react'
import Nav from './Nav'
import logo from '../../assets/images/logo.png'
import Currency from './Currency'

const Header = () => {
  return (
    <>
    <header>
        <Nav />
        <img src={logo} alt='logo' />
        <Currency />
    </header>

    </>
  )
}

export default Header
