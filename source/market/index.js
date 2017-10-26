import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Gemini from '../exchanges/gemini'
import Bittrex from '../exchanges/bittrex'
import Poloniex from '../exchanges/poloniex'
import Winkdex from '../exchanges/winkdex'

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
      <section id="market">
        {
          this.props.whichExchange == "gemini"
          &&
          <Gemini data={this.props.gemini}/>
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
  isLoading: state.marketReducer.isLoading,
  gemini: state.marketReducer.gemini,
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