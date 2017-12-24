import { SET_RISK_PERCENTAGE_BY_SYMBOL, SET_PORTFOLIO, GET_USER } from './actions'
import { ACCESS_GRANTED } from '../Login/actions'

const initialState = {
  name: null, // user's name (optional)
  phoneNumber: null, // id && phone number 
  accessToken: null, // token
  portfolios: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_PORTFOLIO: {
      return {
        ...state,
        portfolio: action.portfolio,
      }
    }

    case GET_USER: 
      return {
        ...state,
        ...action.user,
      }

    case ACCESS_GRANTED: 
      return {
        ...state,
        accessToken:action.accessToken
      }

    case SET_RISK_PERCENTAGE_BY_SYMBOL: {
      let found = false
      let folio = state.portfolio.reduce((portfolio, asset) => {
        if (asset.symbol === action.symbol) {
          found = true
          asset.risk = action.risk;
        }
        return portfolio.concat([asset]);
      }, []);
      if ( !found ) {
        folio.push({
          symbol: action.symbol,
          risk: action.risk,
          // TODO > handle position
        })
      }
      return {
        ...state,
        portfolio: folio,
      }
    }

    default:
      return state
  }
}
