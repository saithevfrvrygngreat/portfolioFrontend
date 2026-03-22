import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mainProfile from '../assets/mainprofile.png';
import profileBlackBg from '../assets/profile_blackbg.png';

const TypedRoles = ({ theme, isDarkMode }) => {
  const roles = ["Full Stack Developer", "Responsive Web Developer", "MERN Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        if (displayText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', minWidth: 'auto', textAlign: 'left', flexWrap: 'wrap' }}>
      <span style={{ whiteSpace: 'nowrap', color: theme.accent, fontWeight: 800 }}>{displayText}</span>
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} style={{ marginLeft: '4px', borderRight: '3px solid', borderColor: theme.accent, height: '1.2em' }} />
    </div>
  );
};

const Hero = ({ theme, name, isDarkMode }) => {
  return (
    <section id="hero" className="snap-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 10% 40px' }}>
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hero-text"
        >
          <motion.span style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block', opacity: 0.6, fontWeight: 600, letterSpacing: '0.1em' }}>Hello, I am</motion.span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '0.5rem 0 1rem', fontWeight: 800, lineHeight: 1.1, color: theme.text }}>{name || "Sai Kumar"}</h1>
          <div style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 600, color: theme.accent, marginBottom: '1.5rem', minHeight: '2.5rem', display: 'flex', justifyContent: 'inherit', alignItems: 'center' }} className="roles-container">
             <TypedRoles theme={theme} isDarkMode={isDarkMode} />
          </div>
          <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', opacity: 0.7, maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6, margin: '0 auto 2.5rem' }}>A developer dedicated to building high-end, scalable web experiences where refined design meets robust engineering.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
              <a href="#projects" style={{ textDecoration: 'none' }}><button style={{ padding: '0.8rem 2rem', background: theme.accent, border: 'none', color: '#fff', borderRadius: '50px', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem' }}>View Projects</button></a>
              <a href="#coding" style={{ textDecoration: 'none' }}><button style={{ padding: '0.8rem 2rem', background: theme.accent, border: 'none', color: '#fff', borderRadius: '50px', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem' }}>Coding Platforms</button></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }} 
          whileInView={{ opacity: 1, scale: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="hero-image-wrapper"
        >
          <div className="aura-pulse"></div>
          <div className="outer-ring"></div>
          <div className="outer-ring-2"></div>
          <div className="profile-circle">
            <img src={isDarkMode ? profileBlackBg : mainProfile} alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
