import { getEstimatedReturnsBySymbol, getAutomationPreviewBySymbol, getSummaryBySymbol, getRecordsBySymbol } from '../API'
export const SET_DETAILS = 'SET_DETAILS'
export const SET_GRAPH_DATA = 'SET_GRAPH_DATA'

export const setSummaryBySymbol = ( symbol ) => async ( dispatch, getState ) => {
  let res = await getSummaryBySymbol( { symbol: symbol } )
  dispatch({
    type: SET_DETAILS,
    data: res.body
  })
}

export const loadGraphDataBySymbol = ( symbol ) => async ( dispatch, getState ) => {
  let res = await getEstimatedReturnsBySymbol({ symbol })
  dispatch({
    type: SET_GRAPH_DATA,
    data: res.body.records.map( ( record ) => Object.assign(
      record, { date: new Date(record.date) }
    ))
  })
}

export const getAutomationPreview = ({ symbol, risk }) => async ( dispatch, getState ) => {
  let res = await getAutomationPreviewBySymbol({ symbol, risk })
  // dispatch({
  //   type: SET_DETAILS,
  //   data: res.body
  // })
}

export const getCoinFromUser = ({ user }) => async ( dispatch, getState ) => {
  let orders = user.portfolios[  ].positions.orders
  dispatch({
    type: SET_ORDERS,
    orders: user.portfolios.positions.orders
  })
}

const parseISOString = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

