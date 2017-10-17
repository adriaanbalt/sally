import { get } from '../API'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SET_MARKET = 'SET_MARKET'
export const SWITCH_EXCHANGE = 'SWITCH_EXCHANGE'

export const switchExchange = ( newExchange ) => {
  return dispatch => {
    dispatch({
      type: SWITCH_EXCHANGE,
      whichExchange: newExchange
    })
  }
}

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await get('/summary/crypto')
  dispatch({
    type: SET_MARKET,
    gemini: res.body.filter( item => item.symbol.indexOf('GEMINI') > -1 ),
    bittrex: res.body.filter( item => item.symbol.indexOf('BITTREX') > -1 ),
    poloniex: res.body.filter( item => item.symbol.indexOf('POLONIEX') > -1 ),
    winkdex: res.body.filter( item => item.symbol.indexOf('WINKDEX') > -1 ),
  })
}

export const toggleDrawer = ( isDrawerOpen ) => dispatch => {
  dispatch({
    type: TOGGLE_DRAWER,
    isDrawerOpen
  })
}