import React from 'react'
import classNames from 'classnames'

const Basic = (props) => {
	console.log( 'props', props )
	return (
	  <div className='automation'>
	    <h2>Risk Tolerance: <span>{ props.getRisk() / 100 }</span></h2>
	    <input className='slider' type='range' min='0' max='100' value={ props.getRisk() } step='1' onChange={ props.onRiskChange.bind(this) }/>
	    <small className='low'>Low</small>
	    <small className='high'>High</small>
	  </div>
	)
}

export default Basic