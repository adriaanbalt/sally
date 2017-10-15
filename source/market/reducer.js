import { SWITCH_EXCHANGE } from './actions'

const initialState = {
  whichExchange: 'gemini'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_EXCHANGE:
      return {
        ...state,
        whichExchange: action.whichExchange
      }

    default:
      return state
  }
}
