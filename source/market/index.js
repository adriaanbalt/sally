import './index.scss'
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  getMarket,
  switchExchange
} from './actions'
import Gemini from '../exchanges/gemini'
import Bittrex from '../exchanges/bittrex'
import Poloniex from '../exchanges/poloniex'
import Winkdex from '../exchanges/winkdex'

class Market extends Component {
  componentDidMount() {
    this.poll()
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  poll() {
    console.log ( "Market Poll", this.props)
    this.interval =setInterval( this.props.getMarket, 10000 )
    this.props.getMarket()
  }

  render(){
    return(
      <section id="market">
        <div>
          <button onClick={() => this.props.switchExchange('gemini')}>Gemini</button>
          <button onClick={() => this.props.switchExchange('bittrex')}>Bittrex</button>
          <button onClick={() => this.props.switchExchange('poloniex')}>Poloniex</button>
          <button onClick={() => this.props.switchExchange('winkdex')}>Winkdex</button>
        </div>
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
      </section>
    )
  }
}

const mapStateToProps = state => ({
  gemini: state.marketReducer.gemini,
  bittrex: state.marketReducer.bittrex,
  poloniex: state.marketReducer.poloniex,
  winkdex: state.marketReducer.winkdex,
  whichExchange: state.marketReducer.whichExchange
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMarket,
  switchExchange,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market)