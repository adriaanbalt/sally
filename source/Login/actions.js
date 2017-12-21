import { authSendPhoneNumber, authSendCode, setUserLocalStorage } from '../API'

export const ACCESS_GRANTED = 'ACCESS_GRANTED'
export const AUTH_ERROR = 'AUTH_ERROR'
export const SET_STATUS = 'SET_STATUS'
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER'
export const SET_CODE = 'SET_CODE'
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE'

export const setPhoneNumber = ({ phoneNumber }) => ( dispatch, getState ) => {
	dispatch({
		type: SET_PHONE_NUMBER,
		phoneNumber,
	})
}

export const setCode = ({ code }) => ( dispatch, getState ) => {
  dispatch({
    type: SET_CODE,
    code,
    status: 'VALID_CODE'
  })
}

export const setStatus = ({ status }) => ( dispatch, getState ) => {
	dispatch({
		type: SET_STATUS,
		status,
	})
}

export const onSubmitPhoneNumber = ( phoneNumber ) => async ( dispatch, getState ) => {
  console.log('onSubmitPhoneNumber', phoneNumber)
  try {
    let res = await authSendPhoneNumber({ phoneNumber })
    console.log( 'onSubmitPhoneNumber 2', res)
		dispatch({
			type: SET_LOGIN_STATE,
			status: 'VALID_PHONE_NUMBER',
		})
  } catch( err ){
    dispatch({
      type: AUTH_ERROR,
      error: err.message,
    })
  }
}

export const onSubmitCode = ( phoneNumber, code ) => async ( dispatch, getState ) => {
  try {
    let res = await authSendCode({ phoneNumber, code })
    dispatch({
      type: ACCESS_GRANTED,
      status: 'VALID_CODE',
      accessToken: res.body.accessToken
    })
  } catch( err ){
    dispatch({
      type: AUTH_ERROR,
      error: err.message,
    })
  }
}