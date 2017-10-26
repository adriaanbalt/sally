import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header>
    <div className="container-logo">
      <Link to="/" className="anchor-home"><img className="logo" src="logo.png" /></Link>
      <div onClick={ props.toggleDrawer } className={`c-hamburger c-hamburger--htx${props.isOpen ? ' is-active': '' }`}>
        <span>toggle menu</span>
      </div>
    </div>
    <div className="arrow"></div>
    <div className="line"></div>
  </header>
)

export default Header