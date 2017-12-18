import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  changeViews,
  buy,
  sell,
} from './reducer'
import Columns from './components/Columns'
import Coin from './components/Coin'

const Exchange = props => {
  return(
    <div>
      {
        props.data
        &&
        props.data.sort( (a,b) => {
          if(a.symbol < b.symbol) return 1;
          if(a.symbol > b.symbol) return -1;
          return 0;
        }).map( (coin, index) => {
          return <Coin key={`${coin.symbol}-${index}`} exchange={ props.exchange } {...coin}/>
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  views: state.exchangeReducer.views,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeViews,
  buy,
  sell,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exchange)