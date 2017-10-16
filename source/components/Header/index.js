import './index.scss'
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const Header = ( props ) => (
  <header>
    <div className="container-logo">
      <Link to="/" className="anchor-home"><img className="logo" src="/logo.png" /></Link>
      <Hamburger onClick={ props.openDrawer }/>
      <h1>Sally.Exchange</h1>
    </div>
    <nav>
      <Link to="/">Market</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
)

export default Header


// <Link to="/">Home</Link>
// <Link to="/about-us">About</Link>