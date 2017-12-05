import { getSummary } from '../API'

export const SET_MARKET = 'SET_MARKET'

export const getMarket = () => async ( dispatch, getState ) => {
  let res = await getSummary()
  dispatch({
    type: SET_MARKET,
    gemini: res.body.filter( item => item.exchange == 'gemini' ),
    binance: res.body.filter( item => item.exchange == 'binance' ),
    bittrex: res.body.filter( item => item.exchange == 'bittrex' ),
    poloniex: res.body.filter( item => item.exchange == 'poloniex' ),
    winkdex: res.body.filter( item => item.exchange == 'winkdex' ),
  })
}
