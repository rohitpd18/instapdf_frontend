import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import SinglePdf from './Page/SinglePdf'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<SinglePdf/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App