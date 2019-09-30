import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './router'
import './styles/main.scss'
import './styles/antd/antd.css'

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
