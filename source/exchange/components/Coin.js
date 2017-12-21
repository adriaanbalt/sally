import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { replace } from 'lodash'

const Coin = (props) => {
	// if positive > add class for 'lightgreen'
	// if negative > add class for 'red'
	// need percent change
	return (
		<Link to={`/${props.id}`} className='row columns'>
			<span className="name">{ props.id }</span>
			<span className={`quantity currentPrice`}>{ props.price }</span>
		</Link>
	)
}

export default Coin