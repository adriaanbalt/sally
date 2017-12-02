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
  loadGraphDataBySymbol,
  getAutomationPreview
} from './actions'

import {
  setRiskPercentageBySymbol
} from '../user/actions'

class Details extends Component {

  componentWillMount() {
     this.props.setSummaryBySymbol( this.props.match.params.symbol )
     this.props.loadGraphDataBySymbol( this.props.match.params.symbol )
  }

  onRiskChange( e ) {
    this.props.setRiskPercentageBySymbol({ symbol: this.props.coin.symbol, risk: e.target.value })
    this.queue();
  }

  queue() {
    if ( this.timeout ) {
      clearTimeout( this.timeout )
    }
    this.timeout = setTimeout( () => this.props.getAutomationPreview({ symbol: this.props.coin.symbol, risk: this.getRisk() }), 100 )
  }

  getRisk() {
    let asset = this.props.user.portfolio.find( asset => asset.symbol === this.props.coin.symbol )
    if ( asset ) {
      return asset.risk 
    }
    return this.props.user.defaultRisk
  }

  render() {
    return(
      <section id='details' className='page'>
        <h1 className='exchange-name'>{ this.props.match.params.symbol }</h1>
        {
          ( !this.props.isGraphLoaded && !this.props.isDataLoaded )
          &&
          <Loader />
        }
        {
          this.props.coin
          &&
          <div className='stats'>
            <h2 className='current-price'>{`$${this.props.coin.currentPrice}`}</h2>
            <h2 className='percent-change'>{`${round(this.props.coin.percentage, 2)}%`}</h2>
          </div>
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
          this.props.user
          &&
          this.props.coin
          &&
          <div className='automation'>
            <h2>Risk Tolerance: <span>{ this.getRisk() / 100 }</span></h2>
            <input className='slider' type='range' min='0' max='100' value={ this.getRisk() } step='1' onChange={ this.onRiskChange.bind(this) }/>
            <small className='low'>Low</small>
            <small className='high'>High</small>
          </div>
        }
        {
          this.props.coin
          &&
          <div className='buttons'>
            <button>BUY</button>
            <button>SELL</button>
          </div>
        }
        {
          this.props.coin
          &&
          <div className='modals'>
          </div>
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  coin: state.detailsReducer.currentCoin,
  isDataLoaded: state.detailsReducer.isDataLoaded,
  isGraphLoaded: state.detailsReducer.isGraphLoaded,
  user: state.userReducer,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSummaryBySymbol,
  loadGraphDataBySymbol,
  setRiskPercentageBySymbol,
  getAutomationPreview,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)