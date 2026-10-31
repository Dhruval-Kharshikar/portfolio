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
      <div className="main-body-sk">

        <h1>Know more about my <span>Skills</span> which <span>defines me.</span></h1>

        <div className="program">
          <h3>Programming Languages I know</h3>
          
          <div className="sub-program">

            <div className="java">
              <img src="https://img.icons8.com/color/1200/java-coffee-cup-logo--v2.jpg" alt="" />
            </div>
            <div className="javascript">
              <img src="https://images.seeklogo.com/logo-png/33/1/javascript-logo-png_seeklogo-330541.png" alt="" />
              </div>
            <div className="clang">
              <img src="https://media.licdn.com/dms/image/v2/D5612AQEZDCDbq8DKEQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683863373095?e=2147483647&v=beta&t=TKfTjPi5bUzE9iPhu_ab-AfknjXJJlyQC7VQ4wXsk6I" alt="" />
            </div>
            <div className="python">
              <img src="https://images.icon-icons.com/2699/PNG/512/python_vertical_logo_icon_168039.png" alt="" />
            </div>
            <div className="html">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFL_81Fp2pJXfpKVxgdPNJ8I2YBom72LAhcszHD-lh8L9Loy3bFNd0Uk&s=10" alt="" />
            </div>
            <div className="css">
              <img src="https://logowik.com/content/uploads/images/123_css3.jpg" alt="" />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
