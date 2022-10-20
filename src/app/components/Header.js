import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/images/logo.png';
import Currency from './Currency';
import Cart from './Cart';
import styles from '../../css/header.module.css';

const Header = ({ cloth }) => (
  <>
    <header className={styles.header}>
      <Nav />
      <img src={logo} alt="logo" />
      <div className={styles.purchase}>
        <Currency />
        <Cart cloth={cloth} />
      </div>
    </header>
    <Outlet />
  </>
);

Header.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Header;
