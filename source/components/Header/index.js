import './index.scss'

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import {
  toggleDrawer
} from './actions'

class Header extends Component {
  render(){
    return(
      <header>
        <div className="container-logo">
          <Link to="/" className="anchor-home"><img className="logo" src="/logo.png" /></Link>
          <button onClick={ this.props.toggleDrawer } className={`c-hamburger c-hamburger--htx${this.props.isOpen ? ' is-active': '' }`}>
            <span>toggle menu</span>
          </button>
        </div>
        <nav>
          <Link to="/">Market</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isOpen: state.headerReducer.isOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleDrawer
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)