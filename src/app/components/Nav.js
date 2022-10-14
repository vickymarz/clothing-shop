import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../css/nav.module.css';

const Nav = () => {
  const nav = [
    {
      id: 1,
      path: '/',
      children: 'Women',
    },
    {
      id: 2,
      path: 'men',
      children: 'Men',
    },
    {
      id: 3,
      path: 'kids',
      children: 'Kids',
    },
  ];

  const navigation = nav.map(({ id, path, children }) => (
    <li key={id}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        end
      >
        {children}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>
        {navigation}
      </ul>
    </nav>
  );
};

export default Nav;
