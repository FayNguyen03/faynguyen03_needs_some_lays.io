import { useState } from 'react'
import './App.css'
import Footer from './Footer/Footer.tsx'
import Contact from './Contact/Contact.tsx'
import Header from './Header/Header.tsx'
import Experience from './Experience/Experience.tsx'
import About from './About/About.tsx'
import Project from './Project/Project.tsx'

function App() {
  return (
    <div className="">
      <Header />
      <div className='main'>
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
