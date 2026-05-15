import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiArrowRight, FiStar, FiGitBranch, FiUsers, FiActivity, FiLayers } from 'react-icons/fi';
import Magnetic from './Magnetic';
import profileImg from '../assets/images/profile.png';
import './styles/About.css';

const githubStats = [
  { icon: <FiStar />, label: '181 stars', value: '181' },
  { icon: <FiActivity />, label: '4.65K commits', value: '4.65K' },
  { icon: <FiGitBranch />, label: '17 repositories forks', value: '17' },
  { icon: <FiUsers />, label: '614 Github followers', value: '614' },
];

const bentoStats = [
  { label: 'Total Projects', value: '109+', icon: <FiArrowRight /> },
  { label: 'Core SaaS Products', value: '3', icon: <FiLayers /> },
  { label: 'Currently Building', value: 'Percify.io', isStatus: true, sub: 'Currently Building' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    })
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="section-bg-text">ABOUT ME</div>
      
      <div className="container">
        <motion.div 
          className="github-top-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {githubStats.map((stat, i) => (
            <div key={i} className="top-stat-item">
              {stat.icon} <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="about-grid-enhanced">
          <div className="about-left-content">
            <motion.h2 className="about-heading" custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : ""}>
              About me<span className="accent-dot">.</span>
            </motion.h2>
            
            <motion.div className="about-bio" custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : ""}>
              <p>
                My name is <strong>Kuriya Vishal Pravinbhai</strong>. I am from Navalgadh, Dhrangadhra, Gujarat. I completed my BCA final semester from <strong>B.P. College of Computer Studies</strong> under Kadi Sarva Vishwavidyalaya.
              </p>
              <p>
                I am a Full-Stack Developer with hands-on experience in <strong>MERN Stack</strong>, AI-powered applications, and mobile development using Flutter. 
              </p>
              <p>
                I have a passion for building professional business websites, AI systems, and secure dashboards. My work focuses on <strong>MERN Stack (MongoDB, Express, React, Node)</strong>, Tailwind CSS, Firebase, and automation systems.
              </p>
            </motion.div>

            <motion.div className="about-actions" custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : ""}>
              <Magnetic>
                <a href="https://github.com/MrVishalKuriya" target="_blank" rel="noopener noreferrer" className="btn-github">
                  <FiGithub /> View my Github <FiArrowRight className="btn-arrow" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn-contact-simple">
                  Contact me <FiArrowRight className="btn-arrow" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div className="about-right-visual" initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.4 }}>
            <div className="github-card">
              <div className="github-card-header">
                <span className="card-label">GITHUB ACTIVITY</span>
                <h3>4,650+ contributions in the last year</h3>
              </div>
              <div className="heatmap-container">
                <div className="heatmap-grid">
                  {[...Array(200)].map((_, i) => (
                    <div key={i} className={`heatmap-cell level-${Math.floor(Math.random() * 4)}`} />
                  ))}
                </div>
                <div className="heatmap-footer">
                  <span>Less</span>
                  <div className="heatmap-legend">
                    <div className="heatmap-cell level-0" /><div className="heatmap-cell level-1" /><div className="heatmap-cell level-2" /><div className="heatmap-cell level-3" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-bento-grid">
          <motion.div className="bento-card profile-card" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5, duration: 0.8 }}>
            <img src={profileImg} alt="Vishal Kuriya" className="profile-photo" />
            <div className="profile-overlay"><span>Vishal Kuriya</span></div>
          </motion.div>

          {bentoStats.map((stat, i) => (
            <motion.div key={i} className={`bento-card ${stat.isStatus ? 'status-card' : ''}`} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}>
              {stat.isStatus ? (
                <><div className="status-indicator"><div className="status-dot-pulse" /><span>{stat.sub}</span></div><h3 className="bento-value">{stat.value}</h3></>
              ) : (
                <><div className="bento-header"><h3 className="bento-value">{stat.value}</h3><div className="bento-icon">{stat.icon}</div></div><span className="bento-label">{stat.label}</span></>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
