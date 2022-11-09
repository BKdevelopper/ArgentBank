import React, { useEffect } from 'react'
import { signInUser } from '../services/API/callAPI'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const inputEmail = useRef()
  const inputPassword = useRef()
  const inputRemember = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const loading = useSelector((state) => state.loading)
  /**
   * Send the form to the server
   */
  const loginFormSubmit = (event) => {
    event.preventDefault()
    const userData = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      remember: inputRemember.current.checked,
    }
    dispatch(signInUser(userData))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user')
    }
  }, [isAuthenticated, navigate])
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={loginFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            ref={inputEmail}
            disabled={loading && 'disabled'}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={inputPassword}
            disabled={loading && 'disabled'}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            ref={inputRemember}
            disabled={loading && 'disabled'}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          type="submit"
          className="sign-in-button"
          disabled={loading && 'disabled'}
        >
          Sign In
        </button>
      </form>
    </section>
  )
}
export default Login
