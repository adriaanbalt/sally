import './index.scss'
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'

import {
  getMarket,
  changeViews,
  buy,
  sell,
} from './actions'
import Columns from './components/Columns'
import Coin from './components/Coin'

class Gemini extends Component {
  componentWillMount() {
    console.log( "Gemini.componentWillMount")
    this.props.getMarket()
  }

  render() {
    return(
      <div>
        <p>Based on data from the Gemini exchange</p>
        <Columns changeViews={props.changeViews} views={props.views}/>
        <div>
          {
            Object.keys(props.data).sort( (a,b) => {
              if(a < b) return 1;
              if(a > b) return -1;
              return 0;
            }).map( (coinName, index) => {
              return <Coin key={`${coinName}-${index}`} changeViews={props.changeViews} views={props.views} name={coinName} values={props.data[coinName].values}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  views: state.geminiReducer.views,
  data: state.geminiReducer.data,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMarket,
  changeViews,
  buy,
  sell,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gemini)