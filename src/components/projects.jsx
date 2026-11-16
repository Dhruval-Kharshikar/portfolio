import React from 'react'
import './projects.css'
import Footer from './footer'
import pr1 from '../assets/projects/pr1.png'
import pr2 from '../assets/projects/pr2.png'
import pr3 from '../assets/projects/pr3.png'
import pr4 from '../assets/projects/pr4.png'
import pr5 from '../assets/projects/pr5.png'

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
      img : pr1,
      name : 'QuickScorer App',
      description : 'I made this app using Node JS and react from which user can login and access data from the database of MongoDB.',
      stack : 'React, Node JS, Express JS, MongoDB',
      link : 'https://quickscore-web.netlify.app/'
    },
    {
      img : pr3,
      name : 'Event Hoster',
      description : 'EventHoster helps user to find the nearby events organised in their city and also lets organisers host their event',
      stack : 'html, css, javaScript, NodeJS, ExpressJS, MongoDB',
      link : 'https://event-hoster.netlify.app/'
    },
    {
      img : pr2,
      name : 'Notes Tracker app',
      description : 'A website for organising notes with CRUD operations',
      stack : 'html, css, javaScript',
      link : 'https://notes-tracker-project.netlify.app/'
    },
    {
      img : pr5,
      name : 'BookMyShow Clone',
      description : 'BookMyShow Clone created using only HTML and CSS clearifying my concepts about basic CSS and flexbox',
      stack : 'html, css',
      link : 'https://bokmyshow-web.netlify.app/'
    },
    {
      img : pr4,
      name : 'AdminLTE Dashboard',
      description : 'I made this Dashboard clone using flexbox and grid, with only css (no javaScript)',
      stack : 'html, css',
      link : 'https://event-hoster.netlify.app/'
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
      <Footer opv={opv} currentPage={2} />
    </div>
  )
}

export default Projects
