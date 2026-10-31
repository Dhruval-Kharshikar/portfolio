import React, { useRef, useState } from 'react'
import './about.css'
import beep from '../assets/typing_beep.mp3'
import appear from '../assets/text-appear.wav'
import face_portfolio from '../assets/face-portfolio.jpeg'

function About() {
  const [fn, setFn] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  
  // 12th useStates
  
  const [open12, setOpen12] = useState(false)
  const [hover12, setHover12] = useState(false)

  // college useStates

  const [open1, setOpen1] = useState(false)
  const [hover1, setHover1] = useState(false)



  const introref = useRef(null)

  let txt = `I’m Dhruval Kharshikar, a Computer Science and Engineering student at Parul University. I enjoy learning new things, experimenting with ideas, and building things that actually work.

I’ve worked with Java, Python, and JavaScript, and I’m especially interested in data structures, algorithms, and web development. I like understanding how things work instead of just making them work.

Most of the projects I’ve built are related to web development, from interactive scoring platforms to responsive websites. While working on them, I’ve been learning more about writing clean code and making interfaces that are simple and easy to use.

Right now, I’m learning the MERN stack and improving my SQL skills so I can build more complete full-stack applications. There’s still a lot I want to learn, and that’s what keeps me interested in development.
`;
  var speed = 20;
  const [finalText, setFinalText] = useState("")
  
  const timer = useRef(null)
  const appearAudio = useRef(null)

  if(!appearAudio.current){
    appearAudio.current = new Audio(appear)
  }
  
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

          <div id='intro-para' style={
            {
              opacity : fn?1:0,
              zIndex : fn?0:-1
            }
          }>
            <div
              className="image"
              onMouseMove={(event) => {
                setTooltipPosition({
                  x: event.clientX + 16,
                  y: event.clientY + 16
                })
              }}
            >
              <img src={face_portfolio} alt="" />
              <span
                className="resume-tooltip"
                role="tooltip"
                style={{
                  left: tooltipPosition.x,
                  top: tooltipPosition.y
                }}
              >
                View resume
              </span>
            </div>
            <p>{finalText}</p>
          </div>

        </div>
        <div className="education">
          <h2>EDUCATION</h2>
          <div className='line'></div>
          <div className="school-tenth">
            <div className="circle-dot"></div>
            <div className="state-10" onClick={()=>{
                appearAudio.current.currentTime = 0
                appearAudio.current.play()
                if(!open) setOpen(true)
                else setOpen(false)
              }} onMouseEnter={()=>{
                setHover(true)
              }}
              onMouseLeave={()=>{
                setHover(false)
              }}
              style={{
                height : open?"11.5em":"3em",
                borderRadius : open || hover?'0.3em':'1.2em'
              }} 
              > 
              <div className="back-head" style={
                {
                  width : open || hover?'100%':0,
                  height : open || hover?'3em':0,
                  borderRadius : open || hover?'0':'20em'
                }
              }></div>
              <h3 style={
                {
                  color : open || hover?'black':'white'
                }
              }>High School</h3>

              <p style={
                {
                  opacity : open?1:0
                }
              }>I did my HSC at <span style={
                {
                  color : "lime",
                  textShadow : '0 0 1em lime'
                }
              }> Modi School - Jamnagar </span>. During my 10th grade, COVID-19 disrupted my studies and made it difficult to stay consistent with learning. <br /><br />
              I worked on rebuilding my basics and clearing the concepts I had missed. With that effort, I bounced back and scored <span style={
                {
                  color : 'lime',
                  textShadow : '0 0 1em lime'
                }
              }>83.84%</span> in my 10th grade.</p>
            </div>
          </div>
          <div className="school-twelth">
            <div className="state-12" onClick={()=>{
              appearAudio.current.currentTime = 0
              appearAudio.current.play()
              if(!open12) setOpen12(true)
                else setOpen12(false)
            }} onMouseEnter={()=>{
              setHover12(true)
            }}
              onMouseLeave={()=>{
                setHover12(false)
              }}
              style={{
                height : open12?"12em":"3em",
                borderRadius : open12 || hover12?'0.3em':'1.2em'
              }} 
              > 
              <div className="back-head" style={
                {
                  width : open12 || hover12?'100%':0,
                  height : open12 || hover12?'3em':0,
                  borderRadius : open12 || hover12?'0':'20em'
                }
              }></div>
              <h3 style={
                {
                  color : open12 || hover12?'black':'white'
                }
              }>Higher Secondary School</h3>

              <p style={
                {
                  opacity : open12?1:0
                }
              }>In 12th grade, I dedicated a significant amount of my time to pursuing <span style={
                {
                  color : 'lime',
                  textShadow : '0 0 1em lime'
                }
              }>cricket</span>. <br /><br /> Balancing academics with regular training and matches was challenging, so academics took a back seat. I finished with 52%, but the experience taught me how important it is to balance different goals and commitments. </p>
            </div>
            <div className="twelve-dot"></div>
          </div>
          <div className="college">
            <div className="college-dot"></div>
            <div className="state-1st" onClick={()=>{
              appearAudio.current.currentTime = 0
              appearAudio.current.play()
              if(!open1) setOpen1(true)
                else setOpen1(false)
            }} onMouseEnter={()=>{
              setHover1(true)
            }}
              onMouseLeave={()=>{
                setHover1(false)
              }}
              style={{
                height : open1?"23em":"3em",
                borderRadius : open1 || hover1?'0.3em':'1.2em'
              }} 
              > 
              <div className="back-head" style={
                {
                  width : open1 || hover1?'100%':0,
                  height : open1 || hover1?'3em':0,
                  borderRadius : open1 || hover1?'0':'20em'
                }
              }></div>
              <h3 style={
                {
                  color : open1 || hover1?'black':'white'
                }
              }>B.tech in CSE</h3>

              <p style={
                {
                  opacity : open1?1:0
                }
              }>Joining <span style={
                {
                  color : 'lime',
                  textShadow : '0 0 1em lime'
                }
              }>Parul University</span> marked the beginning of a new phase in my journey. <br /><br />
              I started with an interest in technology and gradually discovered how much I enjoyed coding, problem-solving, and building things from scratch. <br /><br /> Over time, I explored different areas of Computer Science, including <span style={
                {
                  color : 'lime',
                  textShadow : '0 0 1em lime'
                }
              }>Data Structures and Algorithms, Operating Systems, Computer Networks, DBMS, Java, Python, and JavaScript. </span>
              <br /><br />
              Alongside academics, I started working on projects that helped me turn concepts into practical skills and understand how different technologies come together to build real applications. <br /><br /> This journey has helped me become more confident as a developer, and I currently maintain a <span style={
                {
                  color : 'lime',
                  textShadow : '0 0 1em lime'
                }
              }>7.8 CGPA</span> while continuing to learn and improve. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
