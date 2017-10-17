import React from 'react';
import { Link } from 'react-router-dom'

const Drawer = (props) => (
  <div id='drawer' className={props.isOpen ? ' is-active': '' }>
    <div className='inner'>
    	<h1>Sally.exchange</h1>
      <hr/>
      <button className={props.whichExchange=="gemini" ? ' is-active': '' } onClick={() => props.switchExchange('gemini')}>Gemini</button>
      <button className={props.whichExchange=="bittrex" ? ' is-active': '' } onClick={() => props.switchExchange('bittrex')}>Bittrex</button>
      <button className={props.whichExchange=="poloniex" ? ' is-active': '' } onClick={() => props.switchExchange('poloniex')}>Poloniex</button>
      <button className={props.whichExchange=="winkdex" ? ' is-active': '' } onClick={() => props.switchExchange('winkdex')}>Winkdex</button>
      <hr/>
      <nav>
        <Link to="/">Market</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  </div>
)

export default Drawer