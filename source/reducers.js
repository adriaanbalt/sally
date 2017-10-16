import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import marketReducer from './market/reducer'
import geminiReducer from './exchanges/gemini/reducer'
import bittrexReducer from './exchanges/bittrex/reducer'
import poloniexReducer from './exchanges/poloniex/reducer'
import detailsReducer from './details/reducer'
import headerReducer from './components/Header/reducer'

export default combineReducers({
  routing: routerReducer,
  marketReducer,
  geminiReducer,
  bittrexReducer,
  poloniexReducer,
  detailsReducer,
  headerReducer,
})