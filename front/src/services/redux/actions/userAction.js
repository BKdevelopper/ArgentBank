export const SIGNIN_REQUEST = 'SIGNIN_REQUEST'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'
export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const signinRequest = (loading) => ({
  type: SIGNIN_REQUEST,
  payload: loading,
})
export const signinSuccess = (token) => ({
  type: SIGNIN_SUCCESS,
  payload: { token },
})
export const signinFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
})
export const SetUser = (infoUser) => ({
  type: SET_USER,
  payload: { infoUser },
})
export const UpdateUser = (infoUser) => ({
  type: UPDATE_USER,
  payload: { infoUser },
})
