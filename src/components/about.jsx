import React, { useState } from 'react'
import './about.css'

function About() {
  const [fn, setFn] = useState(false)
  return (
    <div>
        <div className="introduction" style={
          {
            height : fn?'45em':'17em'
          }
        }>

          <h2 id='introduction' onClick={()=>{(fn)?(setFn(false)):(setFn(true))}} style={
            {
              fontSize : fn?'10em':'17em'

            }
          }>INTRODUCTION</h2>

          <p id='intro-para' style={
            {
              opacity : fn?1:0,
              zIndex : fn?0:-1
              // position : fn?'inherit':'absolute',
              // top : fn?'0':'17em'
            }
          }>
            <span id='first'>Hi!</span> <span id='second'>My name is Dhruval Kharshikar</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil earum, provident at maxime ut, error hic consectetur odio quibusdam dicta quo praesentium sapiente! Nemo architecto pariatur sapiente consectetur. Vel. <br />  <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni libero necessitatibus voluptate et sint. Similique enim neque rem voluptatem vel quam dolore? Aspernatur laudantium sint iste esse quidem perferendis rem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sit odio dolorum! Atque eius nulla neque perferendis dolores saepe tempore asperiores. Veniam animi rem magnam dolor quo inventore provident nam! <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos enim temporibus odit tempore iure architecto deserunt, deleniti ut modi. Tempora non ab tenetur, voluptas sapiente magnam? Optio natus error enim?</span>
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
