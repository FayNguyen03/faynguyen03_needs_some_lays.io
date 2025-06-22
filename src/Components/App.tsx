import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './App.css'
import Footer from './Footer/Footer.tsx'
import Contact from './Contact/Contact.tsx'
import Header from './Header/Header.tsx'
import Experience from './Experience/Experience.tsx'

function App() {
  return (
    <div className="">
      <Header />
      <div className='main'>
        <Experience />
        <Contact />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
