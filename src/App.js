import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Signup from './Signup/Signup'
import Login from './Login/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
