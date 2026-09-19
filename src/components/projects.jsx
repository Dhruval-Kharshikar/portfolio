import React from 'react'
import './projects.css'

function Projects( {value, opv, setflag}) {

  function clickf(){
    value("30em")
    return setTimeout(()=>{
      setflag(false)
      opv(0)
    },200)
  }
  return (


    <div className='projects'>
      <div className="pr-heading"> Projects
        <button className='btn' onClick={clickf}>back to the home</button>
      </div>
    </div>
  )
}

export default Projects
