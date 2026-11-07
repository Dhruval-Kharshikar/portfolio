import React from 'react'
import './certifications.css'
import { useNavigate } from 'react-router-dom';

function Certifications({value, opv, setflag}) {

  const navigate = useNavigate()

  function clickf(){
    value("30em")
    return setTimeout(()=>{
      setflag(false)
      opv(0)
    },200)
  }

  const certificates = [
    {
      title : "HTML & CSS Specialist",
      org : "certiport",
      date : "mar 2025",
      skills : ['HTML','Semantic tags', 'CSS', 'Flexbox', 'Grid', 'Box Model', 'Layout'],
      project : "dummy link",
      view : ""
    },
    {
      title : "JS Specialist",
      org : "certiport",
      date : "may 2025",
      skills : ['JavaScript', 'ES6+ syntax', 'DOM', 'Scripting', 'Problem solving'],
      project : "dummy link",
      view : ""
    },
    {
      title : "Web Development Internship",
      org : "myJobGrow",
      date : "jul 2025 - sep 2025",
      skills : ['HTML', 'CSS', 'JavaScript', 'React', 'Node JS', 'Express JS', 'Mongo DB'],
      project : "dummy",
      view : ""
    },
    {
      title : "Python Course Completion",
      org : "IBM",
      date : "jan 2026",
      skills : ['Python', 'Pandas', 'Numpy', 'Data Structures', 'OOP', 'File handling', 'Problem Solving'],
      project : "",
      view : ""
    },
    {
      title : "Computer Networks Course Completion",
      org : "NPTEL",
      date : "apr 2026",
      skills : ['OSI Model', 'TCP/IP Stack', 'IP Addressing', 'Subnetting', 'Routing Protoco'],
      project : "dummy",
      view : ""
    },
    {
      title : "Hackathon Participation",
      org : "Parul University",
      date : "may 2026",
      skills : ['Git/GitHub', 'Presentation', 'Teamwork', 'Development', 'Ideation'],
      project : "dummy link",
      view : ""
    },
    {
      title : "Web Development Internship",
      org : "Skill Orbit",
      date : "july 2026",
      skills : ['HTML', 'CSS', 'JavaScript', 'React', 'Node JS', 'Express JS', 'Mongo DB'],
      project : "dummy link",
      view : ""
    }
  ]


  return (
    <div className='cert-body'>
      <div className='ct-heading'>
        <span>Certifications</span>
        <button className='ct-btn' onClick={clickf}>back to home</button>
      </div>

      <main className='main-body-ct'>
        <div className='ct-intro'>
          <h1><span>Milestones</span> and <span>Certificates </span> earned through continuous learning.</h1>
          <p className='ct-summary'>
            Have a look at the certifications documenting my continuous progress in software engineering and web development.
          </p>
        </div>

        <div className="cert-console">
          <h1>Certificates</h1>

          <div className='certificate-card-par'>
            {certificates.map((certificate)=>(
              <div className="certificate-card">
                <div className='child-par'>
                  <div className="child-1">
                    {certificate.date}
                  </div>
                  <div className="child-2">
                    <div className="certificate-title">{certificate.title}</div>
                    <div className="certificate-org">by {certificate.org}</div>
                  </div>
                </div>
                <div className="child-3">
                  <div className="skill-stack">
                    {certificate.skills.map((skill)=>(
                      <div className="cert-skill">{skill}</div>
                    ))}
                  </div>
                </div>
                <div className="child-4">
                  <a href={certificate.project}>
                    {(certificate.project.length == 0)?null:("project link")}
                  </a>
                  <a href={certificate.view}>view certificate</a>
                </div>
              </div>
            ))}
          </div>
        </div>  

      </main>
    </div>
  )
}

export default Certifications
