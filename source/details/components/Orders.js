import React from 'react'
import classNames from 'classnames'

const Orders = (props) => {
	console.log('orders', props )
	return (
	  <section className='orders'>
	    <h2>Orders</h2>
	    <ul>
	    {
	    	props.orders
	    }
	    </ul>
	  </section>
	)
}
export default Orders