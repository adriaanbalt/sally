import React from 'react'
import classNames from 'classnames'

const UserDetails = (props) => (
  <section>
  	<p>{`Welcome ${props.phoneNumber}`}</p>
  	<p>{`Access Token: ${props.accessToken}`}</p>
  </section>
)

export default UserDetails