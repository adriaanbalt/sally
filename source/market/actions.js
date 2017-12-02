import { getProd } from '../API'

export const SET_MARKET = 'SET_MARKET'

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await getProd(`/summary/crypto`)
  console.log( 'getMarket')
  dispatch({
    type: SET_MARKET,
    gemini: res.body.filter( item => item.symbol.indexOf('GEMINI') > -1 ),
    bittrex: res.body.filter( item => item.symbol.indexOf('BITTREX') > -1 ),
    poloniex: res.body.filter( item => item.symbol.indexOf('POLONIEX') > -1 ),
    winkdex: res.body.filter( item => item.symbol.indexOf('WINKDEX') > -1 ),
  })
}
