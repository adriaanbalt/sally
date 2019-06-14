import { AUTH_ERROR, SUBMIT_PHONE_NUMBER, SUBMIT_VERIFICATION_CODE, SET_LOGIN_STATE, SET_LOGIN_QUERY, SET_CODE, SET_PHONE_NUMBER } from './actions'

const initialState = {
  status: false,
  phoneNumber: '',
  code: '',
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
      }

    case SET_LOGIN_STATE:
      return {
        ...state,
        status: action.status,
      }

    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.phoneNumber || state.phoneNumber,
      }

    case SET_CODE:
      return {
        ...state,
        code: action.code || state.code,
      }

    default:
      return state
  }
}
