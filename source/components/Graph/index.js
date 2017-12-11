import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import MetricsGraphics from 'react-metrics-graphics';

const Graph = (props) => {
  console.log('graph', props.coin.graph )
  return (
    <div className='container-graph'>
      <MetricsGraphics
        data={ props.coin.graph || null }
        width='600'
        height='500'
        x_accessor='date'
        y_accessor='price'
        min_y_from_data={true} 
        lowess={true}
        show_confidence_band={true}
        y_extended_ticks={true}
        yax_count={5}
      />
    </div>
  )
}

export default Graph