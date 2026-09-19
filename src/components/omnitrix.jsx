import { useState, useRef } from 'react'
import omnitrix_ring from '../assets/omnitrix-f2.png'
import omnitrix_audio from '../assets/omnitrix_in.mp3'
import omnitrix_click from '../assets/omnitrix_click.mp3' 
import omnitrix_transform from '../assets/omnitrix_transform.mp3'
import Logos from './logos';
import './omnitrix.css'
import Skills from './skills';
import Certifications from './certifications';
import Projects from './projects';
import Contacts from './contacts';


function Omnitrix({opvalue, setSize, size, setFlag, flag}) {

  const [rotation , setRotation] = useState(0)

  const [colour, setColour] = useState("black")

  const audioref = useRef(new Audio(omnitrix_audio))
  const transformaudioref = useRef(new Audio(omnitrix_transform))
  
  const playAudio = ()=>{
    audioref.current.play()
  }

  const playClickAudio = ()=>{
    const clickaudioref = new Audio(omnitrix_click)
    clickaudioref.play()
  }

  const transformAudio = ()=>{
    transformaudioref.current.play()
  }

  const rotate = ()=>{
    
    if(colour == "black"){
      playAudio()
      setColour('#7bd71f')
    }
    else if(colour == "#7bd71f"){
      playClickAudio()
      setRotation(rotation + 90)
      setColour("red")
    }else if(colour == "red"){
      playClickAudio()
      setRotation(rotation + 90)
      setColour("yellow")
    }else if(colour == 'yellow'){
      playClickAudio()
      setRotation(rotation + 90)
      setColour("dodgerblue")
    }else if(colour == 'dodgerblue'){
      playClickAudio()
      setRotation(0)
      setColour('#7bd71f')
    }
  }



  const open = ()=> {
    if(colour == 'black') {
      return
    }
    transformAudio()
    setSize("300vh")
    setFlag(true)
    if(colour == '#7bd71f') opvalue(1)
    else if(colour == 'red') opvalue(2)
    else if(colour == 'yellow') opvalue(3)
    else if(colour == 'dodgerblue') opvalue(4)
  }


  return (
    <div style={
      {
        position : 'relative',
      }
    }>
      <div className="home-omnitrix">
          <div className='omnitrix-ring-wrap' >
            <div className="omnitrix-img" onClick={rotate} >
              <img className="omn" src={omnitrix_ring} alt="" 
              style={{
                transform : `rotate(${rotation}deg)`
              }}
              />
            </div>
            <div className="circle" style={
              {
                zIndex : flag?10:-1,
                backgroundColor : `${colour}`,
                boxShadow : `0 0 400px ${colour}`,
                height : `${size}`,
                width : `${size}`
              }
            }></div>
            <div className='logo-wrap'>

              <div className="code" 
              style={
                  colour == '#7bd71f' ? {opacity : 1} : {display : 'none'}
                }>
                <img data-layer="Source Code" className="SourceCode" src={Logos("code")}  />
                <h1>Skills</h1>
              </div>
              
              <div className="proj" 
              style={
                colour == 'red' ? {opacity : 1} : {display : 'none'}
              }>
                <img data-layer="Brain" className="Brain" src={Logos("brain")} />
                <h1>Projects</h1>
              </div>

              <div className="cert"
              style={
                colour == 'yellow' ? {opacity : 1} : {display : 'none'}
              }>
                <img data-layer="Certificate" className="Certificate" src={Logos("badge")} />
                <h1>Certifications</h1>
              </div>

              <div className="cont" 
              style={
                  colour == 'dodgerblue' ? {opacity : 1} : {display : 'none'}
                }>
                <img data-layer="Users" className="Users" src={Logos("contacts")} />
                <h1>Contacts</h1>
              </div>
            </div>
          </div>

          <div className="button">
            <button onClick={open}
            style={colour=='black'?{opacity : 0}:{opacity : 1}}>It's Hero Time</button>
          </div>
        </div>
    </div>
  )
}



export default Omnitrix;
