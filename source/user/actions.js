import { debounce } from 'lodash'

import { setUserLocalStorage } from '../API'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const SET_RISK_PERCENTAGE_BY_SYMBOL = 'SET_RISK_PERCENTAGE_BY_SYMBOL'
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const AUTH_ERROR = 'AUTH_ERROR'

export const setPortfolio = ({ portfolio }) => ( dispatch, getState ) => {
  dispatch({
    type: SET_PORTFOLIO,
    portfolio
  })
}

export const setRiskPercentageBySymbol = ({ symbol, risk }) => ( dispatch, getState ) => {
  dispatch({
    type: SET_RISK_PERCENTAGE_BY_SYMBOL,
    symbol,
    risk: parseInt(risk, 10),
  })
  debounce( () => getAutomationPreviewBySymbol({ symbol, risk }), 1000 )
}

export const validateAccessToken = ( phoneNumber, code ) => async ( dispatch, getState ) => {
  try {
    let res = await authSendCode({ phoneNumber, code })
    console.log( 'validateAccessToken')
    dispatch({
      type: SET_ACCESS_TOKEN,
      status: 'VALID_CODE',
      accessToken: res.body.accessToken
    })
    return res.body.accessToken
  } catch( err ){
    dispatch({
      type: AUTH_ERROR,
      error: err.message,
    })
  }
}

export const setUserLocal = ( userObj ) => async ( dispatch, getState ) => {
	console.log('setUserLocal', userObj)
	setUserLocalStorage( userObj )
}
