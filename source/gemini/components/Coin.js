import React from 'react';
import classNames from 'classnames'

const Coin = (props) => {
	return (
		<div className='row columns'>
			<span className="name">{`${props.name.toUpperCase().substring(0,3)} - USD`}</span>
			<div className="quantities">
				<span onClick={ props.changeViews } className={`quantity ${props.views.options[0].id}${ props.views.current == props.views.options[0].id ? ' is-active' : '' }`}>{ props.values.events[0].price } </span>
			</div>
		</div>
	)
}

export default Coin