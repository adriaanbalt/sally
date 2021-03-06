import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { round } from 'lodash'

import Loader from '../components/Loader'

import UserAssetDetails from '../components/User/AssetDetails'
import AutomationBasic from './components/automation/Basic'

import Orders from './components/Orders'
import Strategy from './components/Strategy'

import {
  setSummaryBySymbol,
  loadGraphDataBySymbol,
  getAutomationPreview,
  getEstimatedReturns
} from './actions'

import {
  setRiskPercentageBySymbol
} from '../User/actions'

class Details extends Component {

  componentWillMount() {
    this.poll()
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  getData() {
    this.props.setSummaryBySymbol( this.props.match.params.symbol )
    this.props.loadGraphDataBySymbol( this.props.match.params.symbol )
  }

  poll() {
    // this.interval = setInterval( () => this.getData(), 10000 )
    this.getData()
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

  getOrdersBySymbol() {
    return this.props.user.portfolios[ this.props.user.currentPortfolioIndex ].positions
      .filter( position => (position.baseCurrency === this.props.coin.baseCurrency && position.purchaseCurrency === this.props.coin.purchaseCurrency ) )[0].orders
  }

  render() {
    console.log('details', this.props.coin )
    return(
      <section id='details' className='page'>
        <div className='card'>
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
            this.props.user
            &&
            this.props.coin
            &&
            <Orders orders={ this.getOrdersBySymbol() } />
          }
          {
            this.props.coin
            &&
            <Strategy coin={ this.props.coin }/>
          }
        </div>
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
  getEstimatedReturns,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)