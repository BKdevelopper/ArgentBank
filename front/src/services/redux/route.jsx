import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
// import { authSelector } from '../redux/reducer/selector'

export default function SetRoute({
  element,
  redirectTo = '/',
  authenticated = true,
}) {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const location = useLocation()
  if (!(isAuthenticated === authenticated))
    return <Navigate to={redirectTo} state={{ from: location }} />
  return element
}
// Props types
SetRoute.propTypes = {
  element: propTypes.element.isRequired,
  redirectTo: propTypes.string,
  authenticated: propTypes.bool,
}
