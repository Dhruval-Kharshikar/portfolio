import React from 'react'
import './contacts.css'

function Contacts({value, opv, setflag}) {

  function clickf(){
    value("30em")
    return setTimeout(()=>{
      setflag(false)
      opv(0)
    },200)
  }

  return (
    <div className='con-body'>
      <div className="co-heading">Contacts
        <button className='co-btn' onClick={clickf}>back to the home</button>
      </div>
    </div>
  )
}

export default Contacts
