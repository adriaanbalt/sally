import './index.scss'
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  setSummaryBySymbol
} from './actions'

class Details extends Component {
  componentWillMount() {
     this.props.setSummaryBySymbol( this.props.match.params.symbol )
  }

  render() {
    console.log('Details render', this.props )
    return(
      <section id="about">
        {
          this.props.coin
          &&
          <h1>{ this.props.match.params.symbol } : { this.props.coin.currentPrice }</h1>
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  coin: state.detailsReducer.currentCoin
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSummaryBySymbol
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)