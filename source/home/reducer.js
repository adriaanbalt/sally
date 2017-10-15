export const SWITCH_EXCHANGE = 'SWITCH_EXCHANGE'

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



export const switchExchange = ( newExchange ) => {
  return dispatch => {
    dispatch({
      type: SWITCH_EXCHANGE,
      whichExchange: newExchange
    })
  }
}


