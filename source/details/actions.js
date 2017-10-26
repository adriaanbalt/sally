import { getProd, getWWW, get } from '../API'
export const SET_DETAILS = 'SET_DETAILS'
export const SET_GRAPH_DATA = 'SET_GRAPH_DATA'

export const setSummaryBySymbol = ( symbol ) => async ( dispatch, getState ) => {
  let res = await getProd(`/summary/crypto/${symbol}`)
  console.log( 'setSummaryBySymbol')
  dispatch({
    type: SET_DETAILS,
    data: res.body
  })
}

export const loadGraphDataBySymbol = ( symbol ) => async ( dispatch, getState ) => {
  let res = await getWWW(`/records/${ symbol}?period=1m&length=200`)
  console.log( 'loadGraphDataBySymbol')
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


const parseISOString = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}