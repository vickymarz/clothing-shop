import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/images/logo.png';
import Currency from './Currency';
import Cart from './Cart';
import styles from '../../css/header.module.css';

const Header = () => (
  <>
    <header className={styles.header}>
      <Nav />
      <img src={logo} alt="logo" />
      <div className={styles.purchase}>
        <Currency />
        <Cart />
      </div>
    </header>
    <Outlet />
  </>
);

export default Header;
