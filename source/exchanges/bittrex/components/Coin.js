import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { replace } from 'lodash'

const Coin = (props) => {
	return (
		<Link to={`/${props.symbol}`} className='row columns'>
			<span className="name">{ replace( props.symbol, props.exchange, '') }</span>
			<div className="quantities">
				<span onClick={ props.changeViews } className={`currentPrice`}>{ props.price }</span>
			</div>
		</Link>
	)
}

export default Coin