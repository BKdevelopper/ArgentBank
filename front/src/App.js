import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Component, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/Login'
import UserPage from './pages/Profil'
import { signInAutoLogin } from './services/API/callAPI'
import { useDispatch } from 'react-redux'
import SetRoute from './services/redux/route'
export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) dispatch(signInAutoLogin(token))
  }, [dispatch])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/signin"
            exact
            element={
              <SetRoute
                redirectTo="/user"
                element={<SignInPage />}
                authenticated={false}
              />
            }
          />
          <Route
            path="/user"
            exact
            element={<SetRoute redirectTo="/signin" element={<UserPage />} />}
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={3500} />
    </>
  )
}
