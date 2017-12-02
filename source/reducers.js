import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import marketReducer from './market/reducer'
import geminiReducer from './exchanges/gemini/reducer'
import bittrexReducer from './exchanges/bittrex/reducer'
import poloniexReducer from './exchanges/poloniex/reducer'
import binanceReducer from './exchanges/binance/reducer'
import detailsReducer from './details/reducer'
import userReducer from './user/reducer'
import appReducer from './App/reducer'

export default combineReducers({
  routing: routerReducer,
  appReducer,
  marketReducer,
  geminiReducer,
  bittrexReducer,
  poloniexReducer,
  binanceReducer,
  detailsReducer,
  userReducer,
})