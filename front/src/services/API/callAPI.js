import {
  signinRequest,
  signinSuccess,
  signinFailure,
  SetUser,
  UpdateUser,
} from '../redux/actions/userAction'
import axios from 'axios'

function setAuthorizationToken(token) {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
}
export const signInUser = (user) => async (dispatch) => {
  try {
    dispatch(signinRequest(true))
    const responseLogin = await axios.post('/user/login', user)
    const token = responseLogin.data.body.token
    if (user.remember) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
    setAuthorizationToken(token)
    dispatch(signinSuccess(token))

    const responseProfile = await axios.post('/user/profile')
    const infoUser = responseProfile.data.body
    console.log('infouser', infoUser)

    dispatch(SetUser(infoUser))
  } catch (error) {
    dispatch(signinRequest(false))
    dispatch(
      signinFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
export const signInAutoLogin = (token) => async (dispatch) => {
  try {
    setAuthorizationToken(token)
    dispatch(signinSuccess(token))
    const response = await axios.post('/user/profile')
    const infoUser = response.data.body
    dispatch(SetUser(infoUser))
  } catch (error) {
    dispatch(
      signinFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}

export const signInLogout = () => async (dispatch) => {
  localStorage.removeItem('token')
  dispatch(signinFailure(null))
  window.location.href = '/'
}
export const signInUpdate = (formData) => async (dispatch) => {
  try {
    const response = await axios.put('/user/profile', formData)
    const infoUser = response.data.body
    dispatch(UpdateUser(infoUser))
  } catch (error) {
    if (error.response.status >= 500)
      // Error 500
      return dispatch(
        signinFailure(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    if (error.response.status >= 400)
      // Error 400
      return dispatch(
        signinFailure(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
  }
}
