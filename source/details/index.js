import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { round } from 'lodash'
import moment from 'moment'

import Loader from '../components/Loader'
import Graph from '../components/Graph'


import UserAssetDetails from './components/UserAssetDetails'
import AutomationBasic from './components/automation/Basic'

import {
  setSummaryBySymbol,
  loadGraphDataBySymbol,
  getAutomationPreview,
  getEstimatedReturns
} from './actions'

import {
  setRiskPercentageBySymbol
} from '../user/actions'

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

  render() {
    return(
      <section id='details' className='page'>
        <h1 className='exchange-name'>{ this.props.match.params.symbol }</h1>
        {
          this.props.coin
          &&
          <div className="lastUpdate">
            <p>Last Update</p>
            <h3>{ moment( this.props.coin.now ).format( "H:mm:ss MM/D/YY" ) }</h3>
          </div>
        }
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
          <Graph coin={ this.props.coin }/>
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
          false
          &&
          this.props.user
          &&
          this.props.coin
          &&
          <AutomationBasic getRisk={this.getRisk.bind(this)} onRiskChange={this.onRiskChange.bind(this)}/>
        }
        {
          this.props.user
          &&
          <UserAssetDetails user={this.props.user} coin={this.props.coin}/>
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
  getEstimatedReturns,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)