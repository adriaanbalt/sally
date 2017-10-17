import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Gemini from '../exchanges/gemini'
import Bittrex from '../exchanges/bittrex'
import Poloniex from '../exchanges/poloniex'
import Winkdex from '../exchanges/winkdex'

class Market extends Component {

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
      </section>
    )
  }
}

const mapStateToProps = state => ({
  gemini: state.appReducer.gemini,
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