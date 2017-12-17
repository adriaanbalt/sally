import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import {
} from './actions'

class User extends Component {

  render() {
    return(
      <section id='user' className='page'>
        <LoginForm />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)