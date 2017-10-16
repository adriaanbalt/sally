import { get } from '../API'

export const SWITCH_EXCHANGE = 'SWITCH_EXCHANGE'
export const GET_MARKET = 'GET_MARKET'

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await get('/summary/crypto')
  dispatch({
    type: GET_MARKET,
    gemini: res.body.filter( item => item.symbol.indexOf('GEMINI') > -1 ),
    bittrex: res.body.filter( item => item.symbol.indexOf('BITTREX') > -1 ),
    poloniex: res.body.filter( item => item.symbol.indexOf('POLONIEX') > -1 ),
    winkdex: res.body.filter( item => item.symbol.indexOf('WINKDEX') > -1 ),
  })
}

export const switchExchange = ( newExchange ) => dispatch => {
  dispatch({
    type: SWITCH_EXCHANGE,
    whichExchange: newExchange
  })
}