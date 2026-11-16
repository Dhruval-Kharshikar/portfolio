import './footer.css'
import { useNavigate } from 'react-router-dom'

function Footer({ opv }) {

    const navigate = useNavigate();

  const links = [
    { label: 'Home', value: '', className: 'Home-link' },
    { label: 'Skills', value: 'skills', className: 'skills-link' },
    { label: 'Projects', value: 'projects', className: 'projects-link' },
    { label: 'Certifications', value: 'certifications', className: 'certifications-link' },
    { label: 'Contact', value: 'contacts', className: 'contact-link' },
  ]

  return (
    <footer className="footer-parent">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-intro">
            <p className="footer-kicker">DHRUVAL KHARSHIKAR</p>
            <h2>Building digital experiences with curiosity and code.</h2>
            <p>
              Thanks for visiting my portfolio. Explore my work, discover my
              technical skills, and feel free to connect for a project or
              collaboration.
            </p>
          </div>

          <div className="footer-section">
            <p className="footer-label">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {links.map((link) => (
                <button
                  className={`footer-link ${link.className}`}
                  key={link.label}
                  type="button"
                  onClick={() => {
                    navigate(`/${link.value}`)
                    window.scrollTo(0,0)
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="footer-section footer-connect">
            <p className="footer-label">Connect</p>
            <a href="mailto:dhruval.kharshikar1@gmail.com">
              dhruval.kharshikar1@gmail.com
            </a>
            <a href="https://github.com/dhruval-kharshikar" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dhruval-kharshikar-364574349/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">Built with React, CSS, and a lot of curiosity.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Dhruval Kharshikar</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer