import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/css/main.css'
import { Provider } from 'react-redux'
import store from './services/redux/store'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/api/v1'
axios.defaults.headers.common['accept'] = `application/json`
axios.defaults.headers.common['Content-Type'] = `application/json`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
