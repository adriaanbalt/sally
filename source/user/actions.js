import { debounce } from 'lodash'

import { setUserLocalStorage,getUserLocalStorage, getUser } from '../API'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const SET_RISK_PERCENTAGE_BY_SYMBOL = 'SET_RISK_PERCENTAGE_BY_SYMBOL'
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const AUTH_ERROR = 'AUTH_ERROR'
export const GET_USER = 'GET_USER'

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

export const setUserLocal = ( userObj ) => async ( dispatch, getState ) => {
	// console.log('setUserLocal', userObj)
	setUserLocalStorage( userObj )
}

export const getUserDataFromApi = () => async ( dispatch, getState ) => {
	let res = getUser( getState().userReducer )
	dispatch({
      type: GET_USER,
      user: res,
    })
}

export const getUserDataFromLocalStorage = () => async ( dispatch, getState ) => {
	let res = getUserLocalStorage()
	dispatch({
      type: GET_USER,
      user: res,
    })
}