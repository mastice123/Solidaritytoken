import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routing/Routing'
import 'antd/dist/antd.css'
import './App.scss'

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
