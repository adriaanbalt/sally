import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appReducer from './App/reducer'
import marketReducer from './market/reducer'
import exchangeReducer from './exchange/reducer'
import detailsReducer from './details/reducer'
import userReducer from './User/reducer'
import loginReducer from './Login/reducer'

export default combineReducers({
  routing: routerReducer,
  appReducer,
  marketReducer,
  exchangeReducer,
  detailsReducer,
  userReducer,
  loginReducer,
})