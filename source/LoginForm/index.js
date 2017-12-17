import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  setStatus,
  setLoginQuery,
} from './reducer'

const LoginForm = props => {
  return(
    <div className='login'>
      <input id='input-username' placeholder={'Username'} onChange={ (e) => {
          this.props.setLoginQuery({username:e.target.value})
        }}/>
      <input id='input-password' placeholder={'Password'} onChange={ (e) => {
          this.props.setLoginQuery({password:e.target.value})
        }}/>
    </div>
  )
}

const mapStateToProps = state => ({
  status: state.loginReducer.status,
  username: state.loginReducer.username,
  password: state.loginReducer.password,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setStatus,
  setLoginQuery,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)