import { HashRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.tsx'

//use HashRouter to avoid issues with the server with GitHub pages
createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
