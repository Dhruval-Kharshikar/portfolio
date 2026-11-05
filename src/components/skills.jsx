import React from 'react'
import './skills.css'
import { Navigate, useNavigate } from 'react-router-dom'
import oops from '../assets/oops.png'
import teamwork from '../assets/teamwork.png'
import dbms from '../assets/dbms.png'
import comm from '../assets/comm.png'
import critical from '../assets/critical.png'


const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core languages',
    skills: [
      { name: 'Python', level: 'Problem solving & scripting', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/500px-Python-logo-notext.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },

      { name: 'Java', level: 'OOP & DSA practice', symbol: 'https://icon.icepanel.io/Technology/svg/Java.svg' },

      { name: 'JavaScript', level: 'Interactive web experiences', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/960px-Unofficial_JavaScript_logo_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },

      
    ]
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    subtitle: 'Build, design, improve',
    skills: [
      { name: 'Data Structures', level: 'Efficient solutions', symbol: 'https://cdn-icons-png.magnific.com/256/12489/12489861.png?semt=ais_white_label' },
      
      { name: 'Algorithms', level: 'Logic & optimisation', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Blacksky_Algorithms_Logo.svg/960px-Blacksky_Algorithms_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      
      { name: 'OOP', level: 'Clean program design', symbol: oops },
      { name: 'Web Development', level: 'Modern interfaces', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Website_logo_light.svg/960px-Website_logo_light.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      
      { name: 'Git & GitHub', level: 'Version control', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Github_logo_svg.svg/960px-Github_logo_svg.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      
      { name: 'Figma', level: 'Interface ideation', symbol: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },

      {name : 'DBMS', level : 'Database Management with SQL and MongoDB', symbol : dbms},

      {name : 'NodeJS', level : 'Framework of javascript for DOM'},
      {name : 'React', level : 'Frontend Framework for web development'},
      {name : 'Express', level : 'Framework for backend and db connectivtiy '},

    ]
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    subtitle: 'How I work with people',
    skills: [
      { name: 'Teamwork', level: 'Build together', symbol: teamwork },
      { name: 'Creativity', level: 'Explore new ideas', symbol: 'https://cdn-icons-png.flaticon.com/512/9439/9439709.png' },

      { name: 'Communication', level: 'Make ideas clear', symbol: comm },
      { name: 'Critical Thinking', level: 'Question & solve', symbol: critical }
    ]
  }
]

function Skills({ value, opv, setflag }) {

  const navigate = useNavigate()

  function clickf() {
    value('30em')
    return setTimeout(() => {
      setflag(false)
      opv(0)
    }, 200)
  }

  return (
    <div className='skills-body'>
      <div className='sk-heading'>
        <span>Skills</span>
        <button className='sk-btn' onClick={clickf}>back to home</button>
      </div>

      <main className='main-body-sk'>
        <div className='sk-intro'>
          <h1>Learn about the <span>skills</span> behind my <span>builds.</span></h1>
          <p className='sk-summary'>
            Explore the programming, technical, and soft skills I use to build
            thoughtful and effective digital experiences.
          </p>
        </div>

        <div className='skills-console'>
          {skillGroups.map((group) => (
            <section className={`skill-group ${group.id}`} key={group.id}>
              <div className='group-heading'>
                <div>
                  <h2>{group.title}</h2>
                </div>
              </div>
              <div className='skill-grid'>
                {group.skills.map((skill, skillIndex) => (
                  <article
                    className='skill-card'
                    style={{ '--delay': `${skillIndex * 80}ms` }}
                    key={skill.name}
                  >
                    <div className='skill-symbol'><img src={skill.symbol} alt='logo' /></div>
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className='skill-visual-placeholder' onClick={()=>{navigate('/projects'); window.scrollTo(0,0)}}>
          <p>For Projects, click here</p>
        </div>
      </main>
    </div>
  )
}

export default Skills
