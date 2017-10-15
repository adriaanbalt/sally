import React from 'react';
import classNames from 'classnames'

const Coin = (props) => {
	console.log ( "Coin", props )
	return (
		<div className='row columns'>
			<span className="name">{`${props.name}`}</span>
			<div className="quantities">
				{
					props.views.options.map( (view,key) => <span key={`view-${key}`} onClick={ props.changeViews } className={`quantity ${view.id}${ props.views.current == view.id ? ' is-active' : '' }`}>{ props.values[5] }</span> )
				}
			</div>
		</div>
	)
}

export default Coin