import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Scene3D from './Scene3D';
import Magnetic from './Magnetic';
import profileImg from '../assets/images/profile.png';
import './styles/Hero.css';

const stats = [
  { number: '9+', label: 'Projects Built' },
  { number: '3+', label: 'Years Coding' },
  { number: '10+', label: 'Tech Stacks' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="section-bg-text hero-bg-text">DEVELOPER</div>
      <div className="hero-bg-gradient" />
      <div className="hero-bg-gradient-2" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.p className="hero-greeting" custom={0} variants={fadeUp} initial="hidden" animate="visible">
              Hi, I'm Raj — welcome to my world
            </motion.p>
            <motion.h1 className="hero-name" custom={1} variants={fadeUp} initial="hidden" animate="visible">
              Vishal <span className="gradient-text">Kuriya.</span>
            </motion.h1>
            <motion.h2 className="hero-role" custom={2} variants={fadeUp} initial="hidden" animate="visible">
              Full-Stack <span className="text-secondary">&amp;</span> AI Developer
            </motion.h2>
            <motion.p className="hero-description" custom={3} variants={fadeUp} initial="hidden" animate="visible">
              Building Modern AI-Powered &amp; Full-Stack Web Applications with MERN Stack 
              and Responsive UI Engineering. Specialized in building scalable, secure, 
              and highly interactive digital solutions.
            </motion.p>
            
            <motion.div className="hero-cta-group" custom={4} variants={fadeUp} initial="hidden" animate="visible">
              <Magnetic>
                <a href="#contact" className="btn-primary">
                  Let's Talk <FiArrowRight />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#projects" className="btn-outline">
                  View Projects <FiDownload />
                </a>
              </Magnetic>
            </motion.div>

            <motion.div className="hero-stats" custom={5} variants={fadeUp} initial="hidden" animate="visible">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Animated Profile Photo Under 3D Object */}
            <motion.div 
              className="hero-profile-underlay"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img src={profileImg} alt="Vishal Kuriya" className="hero-underlay-photo" />
              <div className="photo-ring-glow" />
            </motion.div>

            <div className="hero-visual-glow" />
            <div className="hero-3d-canvas">
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
