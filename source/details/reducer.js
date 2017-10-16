import { SET_DETAILS } from './actions'

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        currentCoin: action.data
      }

    default:
      return state
  }
}
