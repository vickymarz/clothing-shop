import React from 'react'
import Nav from './Nav'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <>
    <header>
        <Nav />
        <img src={logo} alt='logo' />
    </header>

    </>
  )
}

export default Header
