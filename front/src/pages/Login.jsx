//react page
import React from 'react'
import Login from '../components/Login'
import { NavLink } from 'react-router-dom'
const SignInPage = () => {
  return (
    <div className="container">
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="../../img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      <main className="main bg-dark">
        <Login></Login>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}
export default SignInPage
