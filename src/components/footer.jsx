import './footer.css'
import { useNavigate } from 'react-router-dom'

function Footer({ opv, currentPage = 0 }) {

    const navigate = useNavigate();

  const palettes = {
    0: { accent: '#9dff32', glow: 'rgba(116, 255, 31, 0.12)', border: 'rgba(157, 255, 50, 0.35)', background: '#021a06' },
    1: { accent: '#9dff32', glow: 'rgba(116, 255, 31, 0.12)', border: 'rgba(157, 255, 50, 0.35)', background: '#021a06' },
    2: { accent: '#ff4f4f', glow: 'rgba(255, 79, 79, 0.14)', border: 'rgba(255, 79, 79, 0.4)', background: '#180202' },
    3: { accent: '#ffd166', glow: 'rgba(255, 209, 102, 0.14)', border: 'rgba(255, 209, 102, 0.4)', background: '#211704' },
    4: { accent: '#65d9ff', glow: 'rgba(101, 217, 255, 0.14)', border: 'rgba(101, 217, 255, 0.4)', background: '#031b27' },
  }

  const palette = palettes[currentPage] || palettes[0]

  const links = [
    { label: 'Home', value: '', className: 'Home-link' },
    { label: 'Skills', value: 'skills', className: 'skills-link' },
    { label: 'Projects', value: 'projects', className: 'projects-link' },
    { label: 'Certifications', value: 'certifications', className: 'certifications-link' },
    { label: 'Contact', value: 'contacts', className: 'contact-link' },
  ]

  return (
    <footer
      className="footer-parent"
      style={{
        '--footer-accent': palette.accent,
        '--footer-glow': palette.glow,
        '--footer-border': palette.border,
        '--footer-background': palette.background,
      }}
    >
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