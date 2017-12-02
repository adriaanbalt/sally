import { getSummary } from '../API'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SET_MARKET = 'SET_MARKET'
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

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await getSummary()

  res.body = res.body.map(item => Object.assign({ symbol: item.id }, item));

  dispatch({
    type: SET_MARKET,
    gemini: res.body.filter( item => item.symbol.indexOf('GEMINI') > -1 ),
    binance: res.body.filter( item => item.symbol.indexOf('BINANCE') > -1 ),
    bittrex: res.body.filter( item => item.symbol.indexOf('BITTREX') > -1 ),
    poloniex: res.body.filter( item => item.symbol.indexOf('POLONIEX') > -1 ),
    winkdex: res.body.filter( item => item.symbol.indexOf('WINKDEX') > -1 ),
  })
}

export const toggleDrawer = ( isDrawerOpen ) => dispatch => {
  console.log('toggleDrawer', isDrawerOpen)
  dispatch({
    type: TOGGLE_DRAWER,
    isDrawerOpen
  })
}