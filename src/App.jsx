import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App
