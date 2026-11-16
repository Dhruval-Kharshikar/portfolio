import React from 'react'
import './contacts.css'
import email from '../assets/email_logo.png'
import location from '../assets/location.png'
import github from '../assets/github-logo.png'
import Footer from './footer'
function Contacts({ value, opv, setflag }) {

  function clickf() {
    value("30em")
    return setTimeout(() => {
      setflag(false)
      opv(0)
    }, 200)
  }

  return (
    <div className='contact-body'>
      <div className='contact-heading'>
        <span>Contacts</span>
        <button className='contact-btn' onClick={clickf}>back to home</button>
      </div>

      <main className='main-body-contact'>
        <div className='contact-intro'>
          <h1>Let's <span>Create</span> something Impactful <span>Together.</span></h1>
          <p className='contact-summary'>
            Feel free to reach out for project opportunities, technical discussions, or code collaborations.
          </p>
        </div>

        <div className="contact-console">
          <div className="contact-left">
            <div className="contact-pre-head">
              <p>GET IN TOUCH</p>
            </div>
            <div className="contact-main-heading">
              <div className="contact-head">
                <h1>Let's Work Together</h1>
              </div>
              <div className="contact-para">
                <p>Have a project in mind? Want to collaborate ? Or just want to say hello? I'd love to hear from you.</p>
              </div>
            </div>
            <div className="contact-links-1">
              <div className="email">
                <img src={email} alt="" />
                <div>
                  <p id='heading'>Email</p>
                  <a href="">dhruval.kharshikar1@gmail.com</a>
                </div>
              </div>
              <div className="location">
                <img src={location} alt="" />
                <div>
                  <p id='heading'>Location</p>
                  <a href="">Vadodara, Gujarat</a>
                </div>
              </div>
            </div>
            <div className="contact-links-2">
              <p>Follow me on</p>
              <div className="links-2">
                <div className="link">
                  <a href="https://github.com/dhruval-kharshikar" target='_blank'>
                    <div className="comp">
                      <img src={github} alt="" />
                    </div>
                  </a>
                  <a href="https://leetcode.com/u/Dhruval_Kharshikar/" target='_blank'>
                    <div className="comp">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20191202080835" alt="" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/dhruval-kharshikar-364574349/" target='_blank'>
                    <div className="comp">
                      <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Linkedin-logo-blue-In-square-40px.svg/960px-Linkedin-logo-blue-In-square-40px.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail" alt="" />
                    </div>
                  </a>
                  <a href="https://app.netlify.com/teams/dhruval-kharshikar/projects" target='_blank'>
                    <div className="comp">
                      <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/960px-Netlify_logo_%282%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h1>Send a Message</h1>
            <form action="https://splitforms.com/api/submit" method="POST">
              <input type="hidden" name="access_key" value="39c32820e4cb48ba984f73dd1515a085" />
              <input type="hidden" name="subject" value="New contact form submission" />
              <div className="message-table">
                <div className="contact-name">
                  <p>Your name</p>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="contact-address">
                  <p>email address</p>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="contact-subject">
                  <p>subject</p>
                  <input type="text" name="topic" id="topic" required />
                </div>
                <div className="contact-message">
                  <p>message</p>
                  <textarea name="message" id="message" required></textarea>
                </div>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                <button id='submit' type='submit'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer opv={opv} currentPage={4} />
    </div>
  )
}

export default Contacts
