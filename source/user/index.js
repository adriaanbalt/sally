import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Login from '../Login'
import UserDetails from './components/UserDetails'

import {
  setUserLocal,
  getUserDataFromApiAndSave,
  getUserDataFromLocalStorageAndSave,
} from './actions'

class User extends Component {

  async componentWillMount() {
    if ( this.props.user.accessToken ) {
      this.props.getUserDataFromApiAndSave()
    } 
    else if ( !this.props.user.accessToken ){
      // get user's locally stored access tokeAndSaven
      let userObj = await this.props.getUserDataFromLocalStorageAndSave()
      console.log('User componentWillMount userObj', userObj)
      if ( userObj.accessToken ) {
        // if user has an access token then data can be retreive
        this.props.getUserDataFromApiAndSave()
      }
      else {
        // if user does not have an access token then they must register or login
      }
    }
  }

  createUser() {

  }

  toggleNotificationSetting( type ) {
    console.log( 'toggleNotificationSetting', type )
  }
  toggleExchangeSetting( type ) {
    console.log( 'toggleExchangeSetting', type )
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
          <UserDetails {...this.props.user} toggleNotificationSetting={ this.toggleNotificationSetting.bind(this) } toggleExchangeSetting={ this.toggleExchangeSetting.bind(this) } />
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserDataFromApiAndSave,
  getUserDataFromLocalStorageAndSave,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)