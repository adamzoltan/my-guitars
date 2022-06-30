import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from  './Header.module.css'

const Header = () => {
  return (
    <header className={classes['header']}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes['active']} to="/myguitars">My Guitars</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes['active']} to="/wishlist">Wishlist</NavLink>
                </li>
            </ul>
            <NavLink activeClassName={classes['active']} to="/addguitar">Add Guitar</NavLink>
        </nav>
    </header>
  )
}

export default Header
