import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { round } from 'lodash'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryCandlestick, VictoryTheme } from 'victory'

import Constants from '../constants'
import Loader from '../components/Loader'

import {
  setSummaryBySymbol,
  loadGraphDataBySymbol
} from './actions'

class Details extends Component {
  componentWillMount() {
     this.props.setSummaryBySymbol( this.props.match.params.symbol )
     this.props.loadGraphDataBySymbol( this.props.match.params.symbol )
  }

  render() {
    return(
      <section id='details'>
        <Link to='/' className='btn-back'>back</Link>
        <h1 className='exchange-name'>{ this.props.match.params.symbol }</h1>
        {
          this.props.isLoading
          &&
          <Loader />
        }
        {
          this.props.coin
          &&
          this.props.coin.graph
          &&
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
                data={this.props.coin.graph} />
            </VictoryChart>
          </div>
        }
        {
          this.props.coin
          &&
          <div className='stats'>
            <p>Current Price</p>
            <h2>{ this.props.coin.currentPrice }</h2>
            <p>24 Hour Percentage</p>
            <h2>{`${round(this.props.coin.percentage, 2)}%`}</h2>
          </div>
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  coin: state.detailsReducer.currentCoin
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSummaryBySymbol,
  loadGraphDataBySymbol,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)