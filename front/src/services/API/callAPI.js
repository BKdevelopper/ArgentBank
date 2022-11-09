import {
  signinRequest,
  signinSuccess,
  signinFailure,
  SetUser,
  UpdateUser,
} from '../redux/actions/userAction'
import axios from 'axios'
import { notify } from '../other/notification'
import { errorAPI } from './errorAPI'

/**
 * Token
 * @param {string} token
 * @returns {Function}
 */
function AuthorizationToken(token) {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
}
/**
 * Signin
 * @param {String} user.email
 * @param {String} user.password
 * @param {Boolean} user.remember
 * @returns {Function}
 */
export const signInUser = (user) => async (dispatch) => {
  try {
    dispatch(signinRequest(true))
    const responseLogin = await axios.post('/user/login', user)
    const token = responseLogin.data.body.token
    if (user.remember) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
    AuthorizationToken(token)
    dispatch(signinSuccess(token))
    notify('Welcome to your account', 'success')
    const responseProfile = await axios.post('/user/profile')
    const infoUser = responseProfile.data.body
    dispatch(SetUser(infoUser))
  } catch (error) {
    dispatch(signinRequest(false))
    errorAPI('Wrong email or password', error, dispatch)
  }
}
/**
 *
 * @param {string} token
 * @returns {Function}
 */
export const postDataUser = (token) => async (dispatch) => {
  try {
    AuthorizationToken(token)
    dispatch(signinSuccess(token))
    const response = await axios.post('/user/profile')
    const infoUser = response.data.body
    dispatch(SetUser(infoUser))
  } catch (error) {
    errorAPI('Wrong email or password', error, dispatch)
  }
}
/**
 * Logout
 * @returns {Function}
 */
export const signInLogout = () => async (dispatch) => {
  localStorage.removeItem('token')
  dispatch(signinFailure(null))
  window.location.href = '/'
}

/**
 * Update user
 * @param {String} dataUser.firstName
 * @param {String} dataUser.lastName
 * @returns {Function}
 */
export const signInUpdate = (dataUser) => async (dispatch) => {
  try {
    const response = await axios.put('/user/profile', dataUser)
    const infoUser = response.data.body
    dispatch(UpdateUser(infoUser))
    notify('Update has been successfully completed', 'success')
  } catch (error) {
    errorAPI('Failure update', error, dispatch)
  }
}
