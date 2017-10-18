import React from 'react';
import { Link } from 'react-router-dom'

const Drawer = (props) => (
  <div id='drawer' className={props.isOpen ? ' is-active': '' }>
    <div className='inner'>
      <img className='logo' src='logo.png' />
      <h1 className='app-name'>Sally</h1>
      <nav>
        <ul>
          <li>
            <ul className='sub'>
              <li><Link className={props.whichExchange=='gemini' ? ' is-active': '' } onClick={() => props.switchExchange('gemini')} to='/'>Gemini</Link></li>
              <li><Link className={props.whichExchange=='bittrex' ? ' is-active': '' } onClick={() => props.switchExchange('bittrex')} to='/'>Bittrex</Link></li>
              <li><Link className={props.whichExchange=='poloniex' ? ' is-active': '' } onClick={() => props.switchExchange('poloniex')} to='/'>Poloniex</Link></li>
              <li><Link className={props.whichExchange=='winkdex' ? ' is-active': '' } onClick={() => props.switchExchange('winkdex')} to='/'>Winkdex</Link></li>
            </ul>
          </li>
          <li>
            <Link to='/about' onClick={props.closeDrawer}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className='footer'><p>version 0.0.1</p></div>
  </div>
)

export default Drawer