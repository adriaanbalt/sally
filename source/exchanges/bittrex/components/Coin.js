import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Coin = (props) => {
	return (
		<Link to={`/${props.symbol}`} className='row columns'>
			<span className="name">{ props.symbol }</span>
			<div className="quantities">
				<span onClick={ props.changeViews } className={`currentPrice`}>{ props.currentPrice }</span>
			</div>
		</Link>
	)
}

export default Coin