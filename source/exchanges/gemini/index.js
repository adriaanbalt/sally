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
    this.poll()
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.interval)
  }

  poll() {
    this.interval =setInterval( this.props.getMarket, 10000 )
    this.props.getMarket()
  }

  render() {
    return(
      <div>
        <p>Based on data from the Gemini exchange</p>
        <Columns changeViews={this.props.changeViews} views={this.props.views}/>
        <div>
          {
            this.props.data
            &&
            this.props.data.sort( (a,b) => {
              if(a.symbol < b.symbol) return -1;
              if(a.symbol > b.symbol) return 1;
              return 0;
            }).map( (coin, index) => {
              return <Coin key={`${coin.symbol}-${index}`} changeViews={this.props.changeViews} {...coin} />
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