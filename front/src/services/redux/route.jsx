import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
