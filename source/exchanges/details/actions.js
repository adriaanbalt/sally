import { get } from '../../API'
export const SET_DETAILS = 'SET_DETAILS'

export const setSummaryBySymbol = ( symbol ) => async ( dispatch, getState ) => {
  let res = await get(`/summary/crypto/${symbol}`)
  dispatch({
    type: SET_DETAILS,
    data: res.body
  })
}