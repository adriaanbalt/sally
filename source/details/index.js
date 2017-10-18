import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

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
      <section id="details">
        <Link to="/">back</Link>
        {
          this.props.coin
          &&
          <h1>{ this.props.match.params.symbol }</h1>
        }
        {
          this.props.coin
          &&
          <h2>Current Price: { this.props.coin.currentPrice }</h2>
        }
        {
          this.props.coin
          &&
          <h2>24 Hour Percentage: { this.props.coin.percentage }</h2>
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