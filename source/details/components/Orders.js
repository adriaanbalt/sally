import React from 'react'
import classNames from 'classnames'

const Orders = (props) => {
	console.log('orders', props)
	return (
	  <section className='orders'>
	    <h2>Orders</h2>
	    <ul>
	    {
	    	props.orders.map( (order, index) => {
	    		return <div key={`order-${index}`}><span>Quantity: { order.quantity }</span> <span>Price: { order.price }</span></div>
	    	})
	    }
	    </ul>
	  </section>
	)
}
export default Orders