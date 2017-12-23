import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Login from '../Login'
import UserDetails from './components/UserDetails'

import {
  getUserDataFromApi,
  getUserDataFromLocalStorage,
} from './actions'

class User extends Component {

  async componentWillMount() {
    if ( this.props.user.accessToken ) {
      this.props.getUserDataFromApi()
    } 
    else if ( !this.props.user.accessToken ){
      await this.props.getUserDataFromLocalStorage()
      this.props.getUserDataFromApi()
    }
  }

  render() {
    return(
      <section id='user' className='page'>
        {
          !this.props.user.accessToken
          &&
          <Login />
        }
        {
          this.props.user.accessToken
          &&
          <UserDetails {...this.props.user} />
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserDataFromApi,
  getUserDataFromLocalStorage,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)