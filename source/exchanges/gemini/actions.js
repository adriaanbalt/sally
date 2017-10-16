import { get } from '../../API'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const SELL = 'SELL'
export const BUY = 'BUY'
export const GEMINI = 'GEMINI'

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await get('/summary/crypto')
  dispatch({
    type: GEMINI,
    data: res.body
  })
}

export const buy = ( amount, type ) => ( dispatch, getState ) => {
  dispatch({
    type: BUY,
    amount,
    conversion
  })
}

export const sell = () => ( dispatch, getState ) => {
  dispatch({
    type: SELL,
    amount,
    conversion
  })
}

export const changeViews = () => ( dispatch, getState ) => {
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