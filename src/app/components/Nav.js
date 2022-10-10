import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../css/nav.module.css'

const nav = [
    {
        path: '/',
        children: 'Women',
    },
    {
        path: 'men',
        children: 'Men',
    },
    {
        path: 'kids',
        children: 'Kids'
    }
]



const navigation = nav.map(({path, children}) => {
    console.log(path, children)
   return <NavLink to={path} children={children} className={(isActive) => isActive ? styles.active : styles.inactive}/>
})


const Nav = () => {
  return (
    <nav>
        {navigation}
    </nav>
  )
}

export default Nav
