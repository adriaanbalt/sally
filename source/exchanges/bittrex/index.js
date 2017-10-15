import './index.scss'
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

const Bittrex = props => {
  return(
    <div>
      <p>Based on data from the Bittrex exchange</p>
      <Columns changeViews={props.changeViews} views={props.views}/>
      <div>
        {
          Object.keys(props.coins).sort( (a,b) => {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
          }).map( (coinName, index) => {
            return <Coin key={`${coinName}-${index}`} changeViews={props.changeViews} views={props.views} name={coinName} values={props.coins[coinName].values}/>
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  views: state.bittrexReducer.views,
  data: state.bittrexReducer.data,
  coins: state.bittrexReducer.coins,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeViews,
  buy,
  sell,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bittrex)