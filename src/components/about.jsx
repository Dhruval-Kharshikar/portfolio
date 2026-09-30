import React, { useRef, useState } from 'react'
import './about.css'
import beep from '../assets/typing_beep.mp3'
import appear from '../assets/text-appear.wav'

function About() {
  const [fn, setFn] = useState(false)

  let txt = `Lorem ipsum dummy text blabla. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas similique atque officiis possimus voluptate modi minima soluta doloremque illo molestiae numquam eos, deserunt reprehenderit nesciunt reiciendis. Qui, eligendi dignissimos.`;
  var speed = 20;
  const [finalText, setFinalText] = useState("")
  
  const timer = useRef(null)
  const appearAudio = useRef(new Audio(appear))
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

          <h2 id='introduction' onClick={()=>{
            (fn)?(setFn(false)):(setFn(true), typeWriter())
            appearAudio.current.currentTime = 0
            appearAudio.play()
            // typeWriter()
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
            <span id='first'>Hi!</span> <span id='second'>My name is Dhruval Kharshikar</span>
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
