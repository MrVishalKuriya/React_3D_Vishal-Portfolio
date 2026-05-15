import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-info">
          <h2 className="footer-logo">VISHAL</h2>
          <p className="footer-tagline">Building digital experiences that matter.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-link-group">
            <span>Navigation</span>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
          </div>
          <div className="footer-link-group">
            <span>Contact</span>
            <a href="mailto:vishalpravinbhai6@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/kuriya-vishal-prajapati-284154233/">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vishal Kuriya. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://github.com/MrVishalKuriya" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/kuriya-vishal-prajapati-284154233/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="https://www.instagram.com/twocoder" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
