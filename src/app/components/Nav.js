import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../css/nav.module.css'
import { Outlet } from 'react-router-dom'

const Nav = () => {

    const nav = [
        {
            id: 1,
            path: 'women',
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
            children: 'Kids'
        }
    ]

    const navigation = nav.map(({id, path, children}) => (
       <NavLink key={id} to={path} children={children} className={({isActive}) => isActive ? styles.active : styles.inactive}/>
    ))

  return (
    <nav>
        {navigation}
        <Outlet />
    </nav>
  )
}

export default Nav
