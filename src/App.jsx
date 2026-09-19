import './App.css'
import Omnitrix from './components/omnitrix'
import About from './components/about'
import loader from '../src/assets/omnitrix-loader.png'
import { use, useEffect, useState } from 'react'
import Projects from './components/projects'
import Skills from './components/skills'
import Certifications from './components/certifications'
import Contacts from './components/contacts'

function App() {

  const [opv, setOpv] = useState(0)
  const [size, setSize] = useState("30em")
  const [flag, setFlag] = useState(false)

  return (
    <>
        <div className='opvpar'>
            <div className='pages'>
              {opv==1 && (
                <Skills value={setSize} opv={setOpv} setflag={setFlag}/>
              )}
              {opv==2 && (
                <Projects value={setSize} opv={setOpv} setflag={setFlag}/>
              )}
              {opv == 3 && (
                <Certifications value={setSize} opv={setOpv} setflag={setFlag}/>
              )}
              {opv == 4 && (
                <Contacts value={setSize} opv={setOpv} setflag={setFlag} />
              )}
            </div>
        </div>
      <div className='app-main'>
        <div className="heading">
          <h1>
            DHRUVAL KHARSHIKAR
          </h1>
          <p>
            My Portfolio
          </p>
        </div>
        <Omnitrix opvalue = {setOpv} setSize = {setSize} size = {size} setFlag = {setFlag} flag = {flag}/>
          <div className='hi'>hi</div>
        <About />
      </div>
    </>
  )
}

export default App
