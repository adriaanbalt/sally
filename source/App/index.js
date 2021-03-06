import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../Store'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Drawer from 'components/Drawer'
import Market from 'source/market'
import About from 'source/about'
import Details from 'source/details'
import User from 'source/User'
import Login from 'source/Login'
import NotFound from 'source/NotFound'

import {
  switchExchange,
  toggleDrawer
} from './actions'


class App extends Component {

  getUser() {

  }

  render(){
    return(
      <ConnectedRouter history={history}>
        <main className={`${this.props.isDrawerOpen ? 'drawer-open': '' }`}>
          <Drawer closeDrawer={()=>this.props.toggleDrawer(false)} isOpen={this.props.isDrawerOpen} switchExchange={this.props.switchExchange} whichExchange={this.props.whichExchange}/>
          <Header toggleDrawer={this.props.toggleDrawer} isOpen={this.props.isDrawerOpen}/>
          <div className={`wrapper`}>
            {
              this.props.isDrawerOpen
              &&
              <div className='btn-close-drawer' onClick={this.props.toggleDrawer}></div>
            }
            <div className='bg-color'></div>
            <div className='content'>
              <Switch>
                <Route exact path='/' component={Market} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/user' component={User} />
                <Route path='/:symbol' component={Details} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </div>
          </div>
        </main>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = state => ({
  isDrawerOpen: state.appReducer.isDrawerOpen,
  whichExchange: state.appReducer.whichExchange,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchExchange,
  toggleDrawer,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)