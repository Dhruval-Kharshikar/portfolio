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

  const projects = [
    {
      img : '',
      name : 'Employee Management App',
      description : 'I made this app using Node JS and react from which user can login and access data from the database of MongoDB.',
      stack : 'React, Node JS, Express JS, MongoDB',
      link : 'https://monkeytype.com/account'
    },
    {
      img : '',
      name : 'Project 2',
      description : 'dummy description about the project',
      stack : 'html, css, javaScript',
      link : 'https://monkeytype.com/account'
    }
  ]


  return (
    <div className='projects'>
      <div className="pr-heading">
        <span>Projects</span>
        <button className='btn' onClick={clickf}>back to home</button>
      </div>

      <main className='main-body-pr'>
        <div className='pr-intro'>
          <h1>Introducing some <span>Projects</span> showcasing my <span>Skills.</span></h1>
          <p className='pr-summary'>
            Explore the projects I have built to apply my skills, solve practical problems, and create useful digital solutions.
          </p>
        </div>

        <div className='console-parent'>
          <p>My Projects</p>
          <div className="project-console">

            {projects.map((project) => (
              <div className="project-group">
              <div className='project-left'>
                <div className="project-img">
                  <img src={project.img} alt="" />
                </div>
                <div className="project-title">{project.name}</div>
              </div>
              <div className='project-right'>
                <div className="project-description">{project.description}</div>
                <div>
                  <div className="project-stack"><span>Stack : </span>{project.stack}</div>
                  <div className="project-link"><a href={project.link} target="_blank"> view more</a></div>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
