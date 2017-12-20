import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  setStatus,
  setPhoneNumber,
  setCode,
  onSubmitPhoneNumber,
} from './actions'

import {
  setUserLocal,
  validateAccessToken,
} from '../User/actions'

class Login extends Component {

  onSubmitPhoneNumber() {
    this.props.setUserLocal({ phoneNumber: this.props.phoneNumber })
    this.props.onSubmitPhoneNumber(this.props.phoneNumber)
  }

  async onSubmitCode() {
    let accessToken = await this.props.validateAccessToken(this.props.phoneNumber, this.props.code)
    if ( accessToken ) {
      this.props.setUserLocal({ phoneNumber: this.props.phoneNumber, accessToken: accessToken })
    }
  }

  renderForm() {
    if ( this.props.accessToken ){
      return (
        <p>AccessToken: { this.props.accessToken }</p>
      )
    }
    return (
      <div>
        {
          this.props.status !== 'VALID_CODE'
          &&
          <div className='input-wrapper'>
            <input id='input-phoneNumber' placeholder={'Phone Number'} onChange={ (e) => {
                this.props.setPhoneNumber({phoneNumber:e.target.value})
              }}/>
            <button onClick={ this.onSubmitPhoneNumber.bind(this) }>REQUEST VERIFICATION CODE</button>
          </div>
        }
        {
          this.props.status === 'VALID_PHONE_NUMBER'
          &&
          this.props.phoneNumber
          &&
          <div className='input-wrapper'>
            <input id='input-code' placeholder={'Verification Code'} onChange={ (e) => {
                this.props.setCode({code:e.target.value})
              }}/>
            <button onClick={ this.onSubmitCode.bind(this) }>SUBMIT</button>
          </div>
        }
        {
          this.props.error
          &&
          <p>{ this.props.error }</p>
        }
      </div>
    )
  }

  render(){
    return(
      <div id='login' className='page'>
        {
          this.renderForm()
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  status: state.loginReducer.status,
  phoneNumber: state.loginReducer.phoneNumber,
  code: state.loginReducer.code,
  error: state.loginReducer.error,
  accessToken: state.userReducer.accessToken,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setStatus,
  setPhoneNumber,
  setCode,
  onSubmitPhoneNumber,
  setUserLocal,
  validateAccessToken,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)