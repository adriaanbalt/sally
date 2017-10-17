import React from 'react';
import { Link } from 'react-router-dom'

const Drawer = () => (
  <div id='drawer'>
  	<h1>Sally.exchange</h1>
    <hr/>
    <button onClick={() => this.props.switchExchange('gemini')}>Gemini</button>
    <button onClick={() => this.props.switchExchange('bittrex')}>Bittrex</button>
    <button onClick={() => this.props.switchExchange('poloniex')}>Poloniex</button>
    <button onClick={() => this.props.switchExchange('winkdex')}>Winkdex</button>
    <hr/>
    <nav>
      <Link to="/">Market</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
)

export default Drawer