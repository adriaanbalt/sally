export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export const toggleDrawer = ( isOpen ) => dispatch => {
  console.log ("toggleDrawer")
  dispatch({
    type: TOGGLE_DRAWER,
    isOpen
  })
}