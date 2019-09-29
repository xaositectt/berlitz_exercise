import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './router'
import './styles/main.scss'

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
