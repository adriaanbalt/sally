export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SWITCH_EXCHANGE = 'SWITCH_EXCHANGE'

export const switchExchange = ( newExchange ) => {
  return dispatch => {
    dispatch({
      type: SWITCH_EXCHANGE,
      whichExchange: newExchange,
      isDrawerOpen: false
    })
  }
}
export const toggleDrawer = ( isDrawerOpen ) => dispatch => {
  dispatch({
    type: TOGGLE_DRAWER,
    isDrawerOpen
  })
}