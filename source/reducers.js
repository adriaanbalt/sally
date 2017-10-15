import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from './home/reducer'
import geminiReducer from './gemini/reducer'
import bittrexReducer from './bittrex/reducer'
import poloniexReducer from './poloniex/reducer'


export default combineReducers({
  routing: routerReducer,
  homeReducer,
  geminiReducer,
  bittrexReducer,
  poloniexReducer
})