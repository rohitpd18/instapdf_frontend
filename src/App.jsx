import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Page/Home'
import SinglePdf from './Page/SinglePdf'
import Create from './Page/Create'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/:id' element={<SinglePdf/>}/>
        <Route exact path='/admin/create' element={<Create/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App