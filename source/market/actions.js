import { getSummary } from '../API'

export const SET_MARKET = 'SET_MARKET'

export const getMarket = () => async ( dispatch, getState ) => {
  console.log("GET MARKET! ACTION ")
  let res = await getSummary()

  res.body = res.body.map(item => Object.assign({ symbol: item.id }, item));
  console.log('res.body', res.body)

  dispatch({
    type: SET_MARKET,
    gemini: res.body.filter( item => item.symbol.indexOf('GEMINI') > -1 ),
    binance: res.body.filter( item => item.symbol.indexOf('BINANCE') > -1 ),
    bittrex: res.body.filter( item => item.symbol.indexOf('BITTREX') > -1 ),
    poloniex: res.body.filter( item => item.symbol.indexOf('POLONIEX') > -1 ),
    winkdex: res.body.filter( item => item.symbol.indexOf('WINKDEX') > -1 ),
  })
}
