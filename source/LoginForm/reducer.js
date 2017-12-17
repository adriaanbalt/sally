import { SET_LOGIN_STATE, SET_LOGIN_QUERY } from './actions'

const initialState = {
  status: false,
  username,
  password,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_LOGIN_STATE:
      return {
        ...state,
        status: action.status,
      }

    case SET_LOGIN_QUERY:
      return {
        ...state,
        username: action.username || state.username,
        password: action.password || state.password,
      }

    default:
      return state
  }
}
