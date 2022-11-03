import { initialState } from './initialState'
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SET_USER,
  UPDATE_USER,
} from '../actions/userAction'

const init = { ...initialState }

export const signinReducer = (state = init, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, loading: action.payload }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        infoUser: {},
        token: null,
      }
    case SET_USER:
      return { ...state, infoUser: action.payload, loading: false }
    case UPDATE_USER:
      return {
        ...state,
        infoUser: action.payload,
      }
    default:
      return state
  }
}
