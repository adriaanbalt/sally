export const SET_USER_QUERY = 'SET_USER_QUERY'

export const setLoginQuery = ({ username, password }) => ( dispatch, getState ) => {
  dispatch({
    type: SET_USER_QUERY,
    username,
    password,
  })
}

export const setStatus = ({ status }) => ( dispatch, getState ) => {
  dispatch({
    type: SET_STATUS,
    status,
  })
}
