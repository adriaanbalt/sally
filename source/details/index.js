import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { round } from 'lodash'


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
      <section id='details'>
        <Link to='/'>back</Link>
        <h1 className='exchange-name'>{ this.props.match.params.symbol }</h1>
        {
          this.props.coin
          &&
          <div className='stats'>
            <p>Current Price</p>
            <h2>{ this.props.coin.currentPrice }</h2>
            <p>24 Hour Percentage</p>
            <h2>{this.props.coin.percentage}</h2>
            <h2>{`${this.props.coin.percentage} ${round(this.props.coin.percentage, 2)}%`}</h2>
          </div>
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