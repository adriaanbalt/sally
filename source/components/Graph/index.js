import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Constants from '../../constants'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryCandlestick, VictoryTheme } from 'victory'

const Graph = (props) => (
  <div className='container-graph'>
    <VictoryChart>
      <VictoryAxis 
        tickFormat={(t) => `${new Date(t).getMonth()}/${new Date(t).getDate()}`} 
        style={{
          axis: {stroke: Constants.COLOR_GRAPH},
          tickLabels: {fill: Constants.COLOR_GRAPH, fontSize: 10, padding: 5}
        }}
      />
      <VictoryAxis 
        dependentAxis 
        style={{
          fill: Constants.COLOR_GRAPH,
          axis: {stroke: Constants.COLOR_GRAPH},
          tickLabels: {fill: Constants.COLOR_GRAPH, fontSize: 10, padding: 5}
        }}
      />
      <VictoryLine
        style={{
          data: { stroke: Constants.COLOR_GRAPH, strokeWidth: 1 }
        }}
        data={props.coin.graph} />
    </VictoryChart>
  </div>
)

export default Graph