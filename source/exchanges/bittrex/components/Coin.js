import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { replace } from 'lodash'

const Coin = (props) => {
	console.log ( 'coin', props.symbol, props.exchange,	replace( props.symbol, props.exchange, ''))
	return (
		<Link to={`/${props.symbol}`} className='row columns'>
			<span className="name">{ replace( props.symbol, props.exchange, '') }</span>
			<div className="quantities">
				<span onClick={ props.changeViews } className={`currentPrice`}>{ props.currentPrice }</span>
			</div>
		</Link>
	)
}

export default Coin