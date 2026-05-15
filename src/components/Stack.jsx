import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaPython, FaJava 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiFlutter, SiFirebase, SiMongodb, SiMysql,
  SiFlask, SiVite, SiVercel, SiCanva, SiSelenium, SiThreedotjs, SiExpress,
  SiPostman, SiFigma, SiGit
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FiCpu, FiMessageSquare, FiLayout, FiShield, FiSearch } from 'react-icons/fi';
import './styles/Stack.css';

// Forced re-transform comment

const categories = {
  frontend: [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'GSAP', icon: <FiLayout /> },
    { name: 'Three.js', icon: <SiThreedotjs /> },
    { name: 'Bootstrap', icon: <FiLayout /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'JWT Auth', icon: <FiShield /> },
  ],
  'database & mobile': [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Context API', icon: <FaReact /> },
  ],
  'ai & tools': [
    { name: 'Gemini AI', icon: <FiMessageSquare /> },
    { name: 'NLP Systems', icon: <FiCpu /> },
    { name: 'Voice AI', icon: <FiCpu /> },
    { name: 'Automation', icon: <FiCpu /> },
  ]
};

const toolbox = [
  { name: 'VS Code', icon: <VscCode /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Selenium', icon: <SiSelenium /> },
];

export default function Stack() {
  const [active, setActive] = useState('frontend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="stack" className="stack section" ref={ref}>
      <div className="section-bg-text">MY STACK</div>
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Technologies
        </motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          The <span className="gradient-text">Tools</span> I Use
        </motion.h2>

        <div className="stack-tabs">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`stack-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="stack-grid"
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {categories[active] && categories[active].map((item, i) => (
            <motion.div
              key={item.name}
              className="stack-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="stack-item-icon">{item.icon}</div>
              <span className="stack-item-name">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Toolbox Section */}
        <div className="toolbox-section">
          <motion.h3 
            className="toolbox-title"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Developer <span className="gradient-text">Toolbox</span>
          </motion.h3>
          <div className="toolbox-grid">
            {toolbox.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="toolbox-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="toolbox-icon">{tool.icon}</div>
                <span className="toolbox-name">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
