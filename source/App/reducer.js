import { SET_MARKET, TOGGLE_DRAWER, SWITCH_EXCHANGE } from './actions'

const initialState = {
  isDrawerOpen: false,
  whichExchange: 'bittrex'
}

export default (state = initialState, action) => {
  switch (action.type) {

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
