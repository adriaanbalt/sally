import React from 'react';
import { Link } from 'react-router-dom'

const Checkbox = (props) => {
	console.log("checkbox props", props)
	return (
		<button onClick={ props.toggle } className='checkbox'>
			{ props.childen }
			<input type='checkbox'/>
		</button>
	)
}

export default Checkbox