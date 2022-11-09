//react page
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { signInLogout } from '../services/API/callAPI'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Update from '../components/Update'
import { account } from '../mocks/account'

const UserPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.infoUser)
  const loading = useSelector((state) => state.loading)
  if (loading) {
    return <Loader />
  }
  if (!loading && user.infoUser) {
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
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.infoUser.firstName}
            </NavLink>
            <NavLink to="/" onClick={() => dispatch(signInLogout())}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        </nav>
        <main className="main bg-dark">
          <Update></Update>
          <h2 className="sr-only">Accounts</h2>

          {account.map((account, index) => {
            return (
              <section className="account" key={index}>
                <div className="account-content-wrapper">
                  <h3 className="account-title">{account.title}</h3>
                  <p className="account-amount">${account.amount}</p>
                  <p className="account-amount-description">
                    {account.description}
                  </p>
                </div>
                <div className="account-content-wrapper cta">
                  <button className="transaction-button">
                    View transactions
                  </button>
                </div>
              </section>
            )
          })}
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </div>
    )
  }
}
export default UserPage
