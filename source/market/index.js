import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Exchange from '../exchange'
import Loader from '../components/Loader'

import {
  getMarket
} from './actions'

class Market extends Component {
  componentDidMount() {
    this.poll()
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  poll() {
    this.interval =setInterval( this.props.getMarket, 10000 )
    this.props.getMarket()
  }

  render(){
    return(
      <section id="market" className="page">
        <Exchange exchange={ this.props.whichExchange } data={this.props[this.props.whichExchange]}/>
        {
          this.props.isLoading
          &&
          <Loader />
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.marketReducer.isLoading,
  gemini: state.marketReducer.gemini,
  binance: state.marketReducer.binance,
  bittrex: state.marketReducer.bittrex,
  poloniex: state.marketReducer.poloniex,
  winkdex: state.marketReducer.winkdex,
  whichExchange: state.appReducer.whichExchange
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMarket
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market)