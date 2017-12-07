import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Constants from '../../constants'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryCandlestick, VictoryTheme } from 'victory'
import MetricsGraphics from 'react-metrics-graphics';

const Graph = (props) => {
  console.log( 'Graphi', props )
  return (
    <div className='container-graph'>
      <MetricsGraphics
        title="Downloads"
        description="This graphic shows a time-series of downloads."
        data={ props.coin.graph }
        width={600}
        height={250}
        x_accessor="date"
        y_accessor="value" />
    </div>
  )
}

export default Graph