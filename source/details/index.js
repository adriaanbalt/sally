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
          <h1>{ this.props.match.params.symbol }</h1>
        }
        {
          this.props.coin
          &&
          <p>Current Price: { this.props.coin.currentPrice }</p>
        }
        {
          this.props.coin
          &&
          <p>24 Hour Percentage: { this.props.coin.percentage }</p>
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