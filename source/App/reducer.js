import { SET_MARKET, TOGGLE_DRAWER, SWITCH_EXCHANGE } from './actions'

const initialState = {
  isDrawerOpen: false,
  isLoading: true,
  whichExchange: 'gemini'
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

    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      }

    case SWITCH_EXCHANGE:
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen,
        whichExchange: action.whichExchange
      }

    default:
      return state
  }
}
