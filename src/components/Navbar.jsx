import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileMenu } from '../store/uiSlice';
import './styles/Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Journey', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const mobileOpen = useSelector((state) => state.ui.mobileMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = (val) => {
    dispatch(setMobileMenu(val));
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo">VISHAL</a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link-item">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="navbar-cta">Contact</a>
          </div>

          <div
            className={`hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => toggleMenu(!mobileOpen)}
          >
            <span /><span /><span />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-nav-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="mobile-nav-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <button className="close-menu" onClick={() => toggleMenu(false)}>
                <FiX />
              </button>
              
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => toggleMenu(false)}>
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => toggleMenu(false)}>Contact</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
