import React from 'react'
import omnitrix_ring from '../assets/omnitrix_ring.png'
import Logos from './logos';


function Omnitrix() {
  return (
    <>
      <div className='omnitrix-ring-wrap'>
        <img src={omnitrix_ring} alt="" />
        <div className="circle"></div>
        <img data-layer="Source Code" className="SourceCode" src={Logos("code")} />
        <img data-layer="Brain" className="Brain" src={Logos("brain")} />
        <img data-layer="Certificate" className="Certificate" src={Logos("badge")} />
        <img data-layer="Users" className="Users" src={Logos("contacts")} />
      </div>

      <div className="button">
        <button>It's Hero Time</button>
      </div>
    </>
  )
}



export default Omnitrix;
