import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/images/logo.png';
import Currency from './Currency';
import Cart from './Cart';

const Header = () => (
  <>
    <header>
      <Nav />
      <img src={logo} alt="logo" />
      <div>
        <Currency />
        <Cart />
      </div>
    </header>
    <Outlet />
  </>
);

export default Header;
