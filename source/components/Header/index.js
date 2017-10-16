import React from 'react';
import { Route, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <img className="logo" src="/logo.png" />
    <h1>Sally</h1>
    <Link to="/about">About</Link>
  </header>
)

export default Header


// <Link to="/">Home</Link>
// <Link to="/about-us">About</Link>