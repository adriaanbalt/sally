import { GET_MARKET, SWITCH_EXCHANGE } from './actions'

const initialState = {
  whichExchange: 'gemini'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_MARKET:
      return {
        ...state,
        gemini: action.gemini,
        bittrex: action.bittrex,
        poloniex: action.poloniex,
        winkdex: action.winkdex,
      }

    case SWITCH_EXCHANGE:
      return {
        ...state,
        whichExchange: action.whichExchange
      }

    default:
      return state
  }
}
