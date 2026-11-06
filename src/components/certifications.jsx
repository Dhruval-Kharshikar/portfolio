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
      title : "Web Development Internship",
      org : "myJobGrow",
      date : "feb 2025 - mar 2025",
      skills : ['HTML', 'CSS', 'JavaScript', 'React', 'Node JS', 'Express JS', 'Mongo DB'],
      project : "dummy",
      view : ""
    },
    {
      title : "Python Course Completion",
      org : "IBM",
      date : "aug 2025",
      skills : ['Python', 'Pandas', 'Numpy', 'Django', 'Flask', 'Fast API'],
      project : "",
      view : ""
    },
    {
      title : "HTML & CSS Specialist",
      org : "certiport",
      date : "jan 2025",
      skills : ['HTML','Semantic', 'CSS', 'flexbox', 'grid', 'Box model', 'layout'],
      project : "dummy link",
      view : ""
    },
    {
      title : "Certificate 1",
      org : "company-name",
      date : "dd/mm/yyyy",
      skills : ['HTML', 'CSS', 'JavaScript', 'React'],
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
