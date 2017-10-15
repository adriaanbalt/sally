export const CHANGE_VIEW = 'CHANGE_VIEW'
export const SELL = 'SELL'
export const BUY = 'BUY'
export const POLONIEX = 'POLONIEX'

export const buy = ( amount, type ) => {
  return dispatch => {
    dispatch({
      type: BUY,
      amount,
      conversion
    })
  }
}

export const sell = () => {
  return dispatch => {
    dispatch({
      type: SELL,
      amount,
      conversion
    })
  }
}

export const changeViews = () => {
  return (dispatch, getState) => {
    const reducer = getState().geminiReducer;
    // TODO > handle the quantity view manipulation
    const previousQuantityView = reducer.views.current
    let currentQuantityViewIndex = 0
    reducer.views.options.map( (item, index) => {
      if ( item == previousQuantityView ) {
        currentQuantityViewIndex = index+1
        return
      }
    })
    if ( currentQuantityViewIndex > reducer.views.options.length-1 ) {
      currentQuantityViewIndex = 0;
    }
    dispatch({
      type: CHANGE_VIEW,
      currentQuantityView: reducer.views.options[currentQuantityViewIndex]
    })
  }
}