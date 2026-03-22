import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Download, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };
  const navItems = ['Projects', 'Training', 'Achievements', 'Skills', 'Certifications', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.2rem 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.background, 
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${theme.border}`,
        transition: 'all 0.3s ease',
        color: theme.text,
        boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {[
          { icon: <Github size={18} />, url: "https://github.com/saithevfrvrygngreat" },
          { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/dasetti-sai-kumar-b30340299/" }
        ].map((social, i) => (
          <motion.a 
            key={i}
            href={social.url}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: theme.accent, color: '#fff' }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: `1px solid ${theme.border}`,
              color: theme.text,
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
              cursor: 'pointer'
            }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <div className="desktop-only" style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          border: `1px solid ${theme.border}`
      }}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              textDecoration: 'none',
              color: theme.text,
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '0.6rem 1.2rem',
              borderRadius: '25px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div className="desktop-only" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.text }}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <motion.a
            href={getImageUrl("/certificates/CV.pdf")}
            download
            whileHover={{ scale: 1.05 }}
            style={{ 
              padding: '0.8rem 1.8rem', 
              background: theme.accent, 
              color: 'white',
              borderRadius: '50px', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              border: 'none',
              textDecoration: 'none'
            }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-only" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: theme.text, 
            zIndex: 1100,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              maxWidth: '300px',
              height: '100vh',
              backgroundColor: theme.background,
              backdropFilter: 'blur(10px)',
              borderLeft: `1px solid ${theme.border}`,
              padding: '6rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              zIndex: 1050,
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: theme.text,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                {item}
              </a>
            ))}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} 
                style={{ 
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', 
                  border: `1px solid ${theme.border}`, 
                  padding: '1rem', 
                  borderRadius: '12px',
                  cursor: 'pointer', 
                  color: theme.text,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  fontWeight: 600
                }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a
                href={getImageUrl("/certificates/CV.pdf")}
                download
                style={{ 
                  padding: '1.2rem', 
                  background: theme.accent, 
                  color: 'white',
                  borderRadius: '12px', 
                  fontSize: '1rem', 
                  fontWeight: 800, 
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
