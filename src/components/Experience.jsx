import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './styles/Experience.css';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Infoxoras',
    location: 'Remote / Office',
    period: 'November 2025 – January 2026',
    description: 'Intensive internship focusing on end-to-end MERN stack development and system architecture.',
    highlights: [
      'MERN Stack Application Development (MongoDB, Express, React, Node)',
      'REST API Development & Testing',
      'JWT Authentication & Security (bcrypt.js)',
      'CRUD Dashboard Systems with Responsive Frontend UI',
      'API Debugging & Deployment Preparation',
    ],
    year: '2025'
  }
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="section-bg-text">JOURNEY</div>
      <div className="container">
        <motion.div className="section-label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          Professional Experience
        </motion.div>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          The <span className="gradient-text">Journey</span> So Far
        </motion.h2>

        <div className="timeline-enhanced">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="timeline-item-enhanced"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="timeline-year-bg">{exp.year}</div>
              <div className="timeline-content-card">
                <div className="card-header-exp">
                  <div className="header-main-info">
                    <FiBriefcase className="exp-icon" />
                    <div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                  </div>
                  <div className="header-meta">
                    <span><FiCalendar /> {exp.period}</span>
                    <span><FiMapPin /> {exp.location}</span>
                  </div>
                </div>
                <p className="exp-description">{exp.description}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
