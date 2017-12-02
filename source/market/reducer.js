import { SET_MARKET } from './actions'

const initialState = {
  isLoading: true
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_MARKET:
      return {
        ...state,
        isLoading: false,
        gemini: action.gemini,
        bittrex: action.bittrex,
        poloniex: action.poloniex,
        winkdex: action.winkdex,
      }

    default:
      return state
  }
}
