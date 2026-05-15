import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 2000);
    
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-root">
      <div className="noise-overlay" />
      <CustomCursor />
      
      {loading ? (
        <div className="loader">
          <motion.div 
            className="loader-logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
          >
            VISHAL
          </motion.div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="main-content">
            <Hero />
            <About />
            <Stack />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
