import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import Certifications from './components/certifications.jsx'
import Contacts from './components/contacts.jsx'
import RoutedPage from './components/RoutedPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/skills' element={<RoutedPage Page={Skills} />} />
        <Route path='/projects' element={<RoutedPage Page={Projects} />} />
        <Route path='/certifications' element={<RoutedPage Page={Certifications} />} />
        <Route path='/contacts' element={<RoutedPage Page={Contacts} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
