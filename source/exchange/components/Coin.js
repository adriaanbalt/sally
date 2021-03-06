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
			<small>{ props.exchange.toUpperCase() }</small>
			<div>
				<p className="name">{`${props.symbol} / ${props.baseCurrency} `}</p>
				<p className={`quantity currentPrice`}>{ props.price }</p>
			</div>
		</Link>
	)
}

export default Coin