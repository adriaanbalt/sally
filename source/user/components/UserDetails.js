import React from 'react'
import classNames from 'classnames'

const UserDetails = (props) => (
  <div className='card'>
  	<h2>{`Welcome ${props.phoneNumber}`}</h2>
  	<h3>{`Access Token: ${props.accessToken}`}</h3>
  </div>
)

export default UserDetails