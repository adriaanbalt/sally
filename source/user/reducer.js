import { SET_RISK_PERCENTAGE_BY_SYMBOL, SET_PORTFOLIO } from './actions'

const initialState = {
  defaultRisk: 50,
  portfolio: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_PORTFOLIO: {
      return {
        ...state,
        portfolio: action.portfolio,
      }
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
