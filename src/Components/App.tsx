import './App.css'
import Footer from './Footer/Footer.tsx'
import Header from './Header/Header.tsx'
import {useRoutes} from 'react-router'
import About from './About/About.tsx'
import Experience from './Experience/Experience.tsx'
import Project from './Project/Project.tsx'
import Contact from './Contact/Contact.tsx'
import Landing from './Landing/Landing.tsx'

function App() {
    let element = useRoutes(
    [
      {
        path: "/",
        element: <Landing />},
      {
        path: "/about",
        element: <About  />,
      },
      {path: "/experience", element: <Experience />},
      {path: "/project", element: <Project/>},
      {path: "/contact", element: <Contact />},
    ]
  )
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {element}
      </div>
      <Footer />
    </div>
  )
}

export default App
