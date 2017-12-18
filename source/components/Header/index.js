import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header>
    <div className="container-logo">
      <Link to="/" className="anchor-home"><img className="logo" src="logo-black.png" /></Link>
      <div onClick={ props.toggleDrawer } className={`c-hamburger c-hamburger--htx${props.isOpen ? ' is-active': '' }`}>
        <span>toggle menu</span>
      </div>
    </div>
  </header>
)

export default Header