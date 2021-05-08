import React from 'react'
import ReactDOM from 'react-dom'
import './styles/bootstrap.min.css'
import App from './App'

document.oncontextmenu = () => false

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
