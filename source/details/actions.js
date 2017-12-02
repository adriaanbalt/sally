import { getAutomationPreviewBySymbol, getSummaryBySymbol, getRecordsBySymbol } from '../API'
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
  let res = await getRecordsBySymbol({ symbol: symbol, period: '60m', length: '100' })
  let results = res.body.map(( entry ) => {
  	return {
	   	x: parseISOString(entry.date),
	   	y: entry.close,
	  }
	})
  dispatch({
    type: SET_GRAPH_DATA,
    data: results
  })
}

export const getAutomationPreview = ({ symbol, risk }) => async ( dispatch, getState ) => {
  let res = await getAutomationPreviewBySymbol({ symbol, risk })
  console.log('getAutomationPreview', res )
  // dispatch({
  //   type: SET_DETAILS,
  //   data: res.body
  // })
}

const parseISOString = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}