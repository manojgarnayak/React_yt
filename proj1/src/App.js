import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/Services.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App