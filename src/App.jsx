import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'

function App() {

  return (  
    <div className=''>
      <Router>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
