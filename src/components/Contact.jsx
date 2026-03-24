import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ theme, isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:dasettisaikumar@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Opening email client...');
    setTimeout(() => {
        setStatus('');
        setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <section id="contact" className="snap-section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        padding: '5rem 5%'
    }}>
      <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          justifyContent: 'center',
          gap: '6rem', 
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1300px'
      }}>
        {/* Left Column: Let's Connect */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: '1 1 400px', maxWidth: '500px' }}
        >
          <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: theme.text, marginBottom: '1.5rem', lineHeight: '1.1' }}>Let's <br/><span style={{ color: theme.accent }}>Connect</span></h2>
              <div style={{ width: '50px', height: '4px', background: theme.accent, marginBottom: '3rem' }} />
              <p style={{ fontSize: '1.1rem', color: theme.secondaryText, lineHeight: '1.9', fontWeight: 400 }}>
                Currently open to new opportunities and interesting collaborations. Reach out if you have a project in mind or just want to chat.
              </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              {[
                  { label: 'Direct Inquiry', value: 'dasettisaikumar@gmail.com', icon: <Mail size={18} /> },
                  { label: 'Voice / WhatsApp', value: '+91 9059245025', icon: <Phone size={18} /> },
                  { label: 'Current Base', value: 'Jalandhar, Punjab', icon: <MapPin size={18} /> }
              ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                      <div style={{ 
                          padding: '1rem', 
                          background: `${theme.accent}11`, 
                          borderRadius: '12px', 
                          color: theme.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                      }}>
                          {item.icon}
                      </div>
                      <div>
                          <h4 style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.3rem', fontWeight: 800 }}>{item.label}</h4>
                          <p style={{ fontSize: '1rem', fontWeight: 600 }}>{item.value}</p>
                      </div>
                  </div>
              ))}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ 
              flex: '1.2 1 500px', 
              padding: '4rem', 
              background: theme.cardBackground, 
              border: `1px solid ${theme.border}`,
              borderRadius: '24px',
              boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.05)'
          }}
        >
          <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                  <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.8rem', display: 'block', fontWeight: 700 }}>Full Name</label>
                      <input 
                          type="text" 
                          required 
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          style={{ width: '100%', padding: '1.2rem', background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.text, outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.3s ease' }} 
                      />
                  </div>
                  <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.8rem', display: 'block', fontWeight: 700 }}>Email Address</label>
                      <input 
                          type="email" 
                          required 
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          style={{ width: '100%', padding: '1.2rem', background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.text, outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.3s ease' }} 
                      />
                  </div>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '0.8rem', display: 'block', fontWeight: 700 }}>Your Message</label>
                  <textarea 
                      rows="5" 
                      required 
                      placeholder="Feel free to reach out…"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      style={{ width: '100%', padding: '1.2rem', background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: `1px solid ${theme.border}`, borderRadius: '12px', color: theme.text, outline: 'none', resize: 'none', fontSize: '0.95rem', lineHeight: '1.7', transition: 'border-color 0.3s ease' }} 
                  ></textarea>
              </div>
              <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{ width: '100%', padding: '1.4rem', background: theme.text, color: theme.background, border: 'none', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              >
                  <Send size={18} /> Send Inquiry
              </motion.button>
              {status && <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: theme.accent, fontWeight: 700 }}>{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
