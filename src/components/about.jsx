import React, { useState } from 'react'
import './about.css'

function About() {
  const [fn, setFn] = useState(false)

  let txt = `Lorem ipsum dummy text blabla. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas similique atque officiis possimus voluptate modi minima soluta doloremque illo molestiae numquam eos, deserunt reprehenderit nesciunt reiciendis. Qui, eligendi dignissimos.`;
  var speed = 20;
  const [finalText, setFinalText] = useState("")
  let i = 0;
  let temp = ""
  
  function typeWriter() {
    if( i < txt.length){
      temp += txt.charAt(i)
      setFinalText(temp)
      i++
    }
    setTimeout(typeWriter, speed)

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
