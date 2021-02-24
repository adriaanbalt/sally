import React from 'react';
import { Link } from 'react-router-dom'

const Drawer = (props) => (
  <div id='drawer' className={props.isOpen ? ' is-active': '' }>
    <div className='inner'>
      <img className='logo' src='logo-black.png' />
      <h1 className='app-name'>Sally</h1>
      <nav>
        <ul>
          <li>
            <Link to='/' className='btn-about' onClick={props.closeDrawer}>Coins</Link>
          </li>
          <li>
            <Link to='/user' className='btn-about' onClick={props.closeDrawer}>Profile</Link>
          </li>
          <li>
            <Link to='/about' className='btn-about' onClick={props.closeDrawer}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className='footer'><p>version 0.0.1</p></div>
  </div>
)

export default Drawer