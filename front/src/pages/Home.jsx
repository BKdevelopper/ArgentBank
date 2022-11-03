import React from 'react'
import { NavLink } from 'react-router-dom'
import { feature } from '../mocks/feature'
const Home = () => {
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
          <NavLink to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {feature.map((feature, index) => {
            return (
              <div className="feature-item" key={index}>
                <img
                  className="feature-icon"
                  src={feature.imgPath}
                  alt={feature.alt}
                />
                <h3 className="feature-item-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}

export default Home
