import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import projectKrishnaPG from '../assets/images/project_krishnapg.png';
import projectHospital from '../assets/images/project_hospital.png';
import projectSupermall from '../assets/images/project_supermall.png';
import projectPortfolio from '../assets/images/project_portfolio.png';
import projectJarvis from '../assets/images/project_jarvis.png';
import projectIsro from '../assets/images/project_isro.png';
import projectTabParker from '../assets/images/project_tabparker.png';
import projectMindstream from '../assets/images/project_mindstream.png';
import './styles/Projects.css';

const livePlatforms = [
  {
    number: '_01',
    title: 'Private GPT AI',
    desc: 'Advanced AI chat platform with document intelligence and responsive UI.',
    tech: ['React', 'Tailwind', 'Gemini API'],
    link: 'https://private-gpt-ochre.vercel.app/',
    image: projectJarvis
  },
  {
    number: '_02',
    title: 'Vedanco Marketing',
    desc: 'High-conversion business landing page with premium marketing UI.',
    tech: ['React', 'Tailwind', 'GSAP'],
    link: 'https://vedanco-marketing.vercel.app/',
    image: projectPortfolio
  },
  {
    number: '_03',
    title: 'Vedanco Official',
    desc: 'Corporate company presentation and official service showcase.',
    tech: ['React', 'Modern UI', 'Vite'],
    link: 'https://vedanco-official.vercel.app/',
    image: projectSupermall
  },
  {
    number: '_04',
    title: 'Vedanco IT Solutions',
    desc: 'IT service management and solutions presentation platform.',
    tech: ['React', 'Business UI'],
    link: 'https://vedanco-it-solution.vercel.app/',
    image: projectHospital
  }
];

const coreProjects = [
  {
    title: 'MERN CRUD Dashboard',
    desc: 'Internship project featuring JWT authentication, protected routes, and complete MongoDB operations.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: projectTabParker,
    github: 'https://github.com/MrVishalKuriya'
  },
  {
    title: 'Krishna PG Management',
    desc: 'Full-scale hostel management system with rent and food tracking.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: projectKrishnaPG,
    github: 'https://github.com/MrVishalKuriya'
  },
  {
    title: 'Jarvis AI Assistant',
    desc: 'Voice commands, NLP, translation, and summaries in a sleek UI.',
    tech: ['Python', 'NLP', 'AI'],
    image: projectJarvis
  },
  {
    title: 'Hospital Scheduler',
    desc: 'Healthcare operation scheduling and workflow management tool.',
    tech: ['JavaScript', 'Firebase'],
    image: projectHospital
  }
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="section-bg-text">PROJECTS</div>
      
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </motion.div>

        <div className="live-platforms-list">
          {livePlatforms.map((project, i) => (
            <motion.div
              key={project.title}
              className="live-project-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.6 }}
            >
              <div className="live-project-content">
                <span className="live-project-num">{project.number}</span>
                <div className="live-project-main">
                  <h3 className="live-project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title} <FiExternalLink className="link-icon" />
                    </a>
                  </h3>
                  <div className="live-project-tech">
                    {project.tech.map((t, index) => (
                      <span key={t}>
                        {t}{index < project.tech.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="live-project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="section-title"
          style={{ marginTop: '8rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Core <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="experiments-grid">
          {coreProjects.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="experiment-item"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <div className="experiment-image">
                <img src={exp.image} alt={exp.title} />
              </div>
              <div className="experiment-content">
                <h4 className="experiment-title">{exp.title}</h4>
                <p className="experiment-desc">{exp.desc}</p>
                <div className="experiment-tech">
                  {exp.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
