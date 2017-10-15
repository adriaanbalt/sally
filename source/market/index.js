import './index.scss'
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  switchExchange
} from './actions'
import Gemini from '../exchanges/gemini'
import Bittrex from '../exchanges/bittrex'
import Poloniex from '../exchanges/poloniex'

const Market = props => {
  return(
    <div>
      <div>
        <button onClick={() => props.switchExchange('gemini')}>Gemini</button>
        <button onClick={() => props.switchExchange('bittrex')}>Bittrex</button>
        <button onClick={() => props.switchExchange('poloniex')}>Poloniex</button>
      </div>
      {
        props.whichExchange == "gemini"
        &&
        <Gemini />
      }
      {
        props.whichExchange == "bittrex"
        &&
        <Bittrex />
      }
      {
        props.whichExchange == "poloniex"
        &&
        <Poloniex />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  whichExchange: state.marketReducer.whichExchange
})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchExchange,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market)