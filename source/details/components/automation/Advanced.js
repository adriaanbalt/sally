import React from 'react'
import classNames from 'classnames'

const Advanced = (props) => (
  <div className='automation'>
    <h2>Risk Tolerance: <span>{ this.getRisk() / 100 }</span></h2>
    <input className='slider' type='range' min='0' max='100' value={ this.getRisk() } step='1' onChange={ this.onRiskChange.bind(this) }/>
    <small className='low'>Low</small>
    <small className='high'>High</small>
  </div>
)

export default Advanced