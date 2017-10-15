export const SWITCH_EXCHANGE = 'SWITCH_EXCHANGE'

export const switchExchange = ( newExchange ) => {
  return dispatch => {
    dispatch({
      type: SWITCH_EXCHANGE,
      whichExchange: newExchange
    })
  }
}