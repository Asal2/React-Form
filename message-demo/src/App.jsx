import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './components/signup'
import Login from './components/login'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<SignUp />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  )
}

export default App
