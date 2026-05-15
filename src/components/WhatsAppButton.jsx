import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX, FiSend } from 'react-icons/fi';
import { supabase } from '../supabaseClient';
import Magnetic from './Magnetic';
import './styles/WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      // 1. Log to Supabase
      const { error } = await supabase
        .from('contact_requests')
        .insert([{ 
          name: name, 
          type: 'whatsapp', 
          message: `${name} over web thruv contect me`,
          created_at: new Date() 
        }]);

      if (error) console.error('Supabase Error:', error);

      // 2. Redirect to WhatsApp
      const message = encodeURIComponent(`${name} over web thruv contect me`);
      window.open(`https://wa.me/917211149512?text=${message}`, '_blank');
      
      setIsOpen(false);
      setName('');
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="whatsapp-floating-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="whatsapp-popup"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <div className="popup-header">
              <h3>Connect on WhatsApp</h3>
              <button onClick={() => setIsOpen(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit} className="popup-form">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Logging...' : 'Chat Now'} <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Magnetic>
        <motion.button 
          className="whatsapp-trigger"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.button>
      </Magnetic>
    </div>
  );
}
