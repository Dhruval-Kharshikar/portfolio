import React from 'react'
import './contacts.css'

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
                <p id='heading'>Email</p>
                <a href="">dhruval.kharshikar1@gmail.com</a>
              </div>
              <div className="location">
                <p id='heading'>Location</p>
                <a href="">Vadodara, Gujarat</a>
              </div>
            </div>
            <div className="contact-links-2">
              <p>Follow as</p>
              <div className="links-2">
                <div className="link">
                  <a href="">
                    <div className="comp"></div>
                  </a>
                  <a href="">
                    <div className="comp"></div>
                  </a>
                  <a href="">
                    <div className="comp"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h1>Send a Message</h1>
            <div className="message-table">
              <div className="contact-name">
                <p>Your name</p>
                <input type="text" name="" id="" />
              </div>
              <div className="contact-address">
                <p>email address</p>
                <input type="email" name="" id="" />
              </div>
              <div className="contact-subject">
                <p>subject</p>
                <input type="text" name="" id="" />
              </div>
              <div className="contact-message">
                <p>message</p>
                <textarea name="" id=""></textarea>
              </div>
              <button id='submit'>Send Message</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contacts
