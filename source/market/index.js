import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Gemini from '../exchanges/gemini'
import Binance from '../exchanges/binance'
import Bittrex from '../exchanges/bittrex'
import Poloniex from '../exchanges/poloniex'
import Winkdex from '../exchanges/winkdex'

import Loader from '../components/Loader'

class Market extends Component {

  render(){
    console.log('isLoading', this.props.isLoading )
    return(
      <section id="market">
        {
          this.props.whichExchange == "gemini"
          &&
          <Gemini data={this.props.gemini}/>
        }
        {
          this.props.whichExchange == "binance"
          &&
          <Binance data={this.props.binance}/>
        }
        {
          this.props.whichExchange == "bittrex"
          &&
          <Bittrex data={this.props.bittrex}/>
        }
        {
          this.props.whichExchange == "poloniex"
          &&
          <Poloniex data={this.props.poloniex}/>
        }
        {
          this.props.whichExchange == "winkdex"
          &&
          <Winkdex data={this.props.winkdex}/>
        }
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
  isLoading: state.appReducer.isLoading,
  gemini: state.appReducer.gemini,
  binance: state.appReducer.binance,
  bittrex: state.appReducer.bittrex,
  poloniex: state.appReducer.poloniex,
  winkdex: state.appReducer.winkdex,
  whichExchange: state.appReducer.whichExchange
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market)