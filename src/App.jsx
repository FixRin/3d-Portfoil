import './App.css'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Home, About, Projects, Contact } from "./pages"

export default function App() {
  return (
    <main className='bg-slate-300/20 h-[100vh]' >
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}