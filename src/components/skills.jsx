import React from 'react'
import './skills.css'

function Skills({value, opv, setflag}) {

  function clickf(){
    value("30em")
    return setTimeout(()=>{
      setflag(false)
      opv(0)
    },200)
  }

  return (
    <div className='skills-body'>
      <div className="sk-heading">Skills
        <button className='sk-btn' onClick={clickf}>back to the home</button>
      </div>
    </div>
  )
}

export default Skills
