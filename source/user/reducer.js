import { SET_RISK_PERCENTAGE_BY_SYMBOL, SET_PORTFOLIO, GET_USER } from './actions'
import { ACCESS_GRANTED } from '../Login/actions'

const initialState = {
  name: null, // user's name (optional)
  phoneNumber: null, // id && phone number 
  accessToken: null, // token
  currentPortfolioIndex: 0,
  portfolios: [
    {
      id: "001",
      name: "Custom Portfolio Name",
      value: 1000, // total value
      price: 500, // total purchase price
      positions : [
        {
          baseCurrency: "USDT",
          baseCurrencyLong: "US Dollar Tender",
          purchaseCurrency: "BTC",
          purchaseCurrencyLong: "Bitcoin",
          value: 1000, // current value of asset
          price: 500, // purchase price
          strategy: "", // ref to algo
          orders: [  // ref to algo
            {
              date: "Jan 1, 2018", // date order was made
              quantity: 1, // quantity of coin 
              price: 500 // price of individual coin when purchased
            }
          ],
        }
      ]
    }
  ]

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
