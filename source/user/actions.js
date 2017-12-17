import { debounce } from 'lodash'

import { getAutomationPreviewBySymbol } from '../API'

export const SET_PORTFOLIO = 'SET_PORTFOLIO'
export const SET_RISK_PERCENTAGE_BY_SYMBOL = 'SET_RISK_PERCENTAGE_BY_SYMBOL'

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
