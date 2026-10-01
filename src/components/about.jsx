import React, { useRef, useState } from 'react'
import './about.css'
import beep from '../assets/typing_beep.mp3'
import appear from '../assets/text-appear.wav'

function About() {
  const [fn, setFn] = useState(false)
  const introref = useRef(null)

  let txt = `I’m Dhruval Kharshikar, a passionate Computer Science and Engineering student at Parul University, driven by curiosity and creativity in building digital experiences. 
  
  With hands-on skills in Java, Python, and JavaScript, I focus on crafting efficient solutions through data structures, algorithms, and modern web development. 
  
  My projects—from interactive scoring platforms to responsive UI designs—reflect my commitment to clean code, user-centric design, and continuous learning. 
  
  I’m currently expanding my expertise in MERN Stack and the SQL to develop dynamic, full‑stack applications that merge functionality with innovation.`;
  var speed = 20;
  const [finalText, setFinalText] = useState("")
  
  const timer = useRef(null)
  const appearAudio = useRef(null)

  if(!appearAudio.current){
    appearAudio.current = new Audio(appear)
  }
  // const beepAudio = new Audio(beep)
  
  function typeWriter() {
    
    clearTimeout(timer.current)
    let temp = ""
    let i = 0

    function write(){


      if( i < txt.length && !fn){
        temp += txt.charAt(i)
        setFinalText(temp)
        i++
        timer.current = setTimeout(write, speed)
        
      }
    }
    write()
  }

  return (
    <div>
        <div className="introduction" style={
          {
            height : fn?'45em':'17em'
          }
        }>

          <h2 id='introduction'
          ref = {introref}
           onClick={()=>{
            (fn)?(setFn(false)):(setFn(true), typeWriter())
            appearAudio.current.pause()
            appearAudio.current.currentTime = 0
            appearAudio.current.play()

            introref.current.scrollIntoView({
              behavior : "smooth",
              block : "start"
            })
          }} 
          style={
            {
              fontSize : fn?'10em':'17em'

            }
          }>INTRODUCTION</h2>

          <p id='intro-para' style={
            {
              opacity : fn?1:0,
              zIndex : fn?0:-1
            }
          }>
            <p>{finalText}</p>
          </p>

        </div>
        <div className="Education">
          <h2>EDUCATION</h2>
          <p></p>
        </div>

    </div>
  )
}

export default About
