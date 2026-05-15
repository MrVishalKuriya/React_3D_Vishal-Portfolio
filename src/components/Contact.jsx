import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';
import './styles/Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="section-bg-text">CONTACT</div>
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <motion.h2 
              className="contact-title"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              Let's build something <span className="gradient-text">exceptional</span> together.
            </motion.h2>
            
            <div className="contact-methods">
              <motion.a 
                href="mailto:vishalkuriya@gmail.com" 
                className="contact-method-item"
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : ""}
              >
                <div className="contact-method-icon"><FiMail /></div>
                <div className="contact-method-text">
                  <span>Email Me</span>
                  <strong>vishalkuriya@gmail.com</strong>
                </div>
              </motion.a>

              <motion.div 
                className="contact-method-item"
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : ""}
              >
                <div className="contact-method-icon"><FiMapPin /></div>
                <div className="contact-method-text">
                  <span>Location</span>
                  <strong>Navalgadh, Gujarat, India</strong>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="contact-socials"
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              <a href="https://github.com/MrVishalKuriya" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/kuriya-vishal-prajapati-284154233" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="https://www.instagram.com/twocoder" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
            </motion.div>
          </div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
