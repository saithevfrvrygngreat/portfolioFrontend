import React from 'react';
import { motion } from 'framer-motion';
import profileLight from '../assets/profile.png';
import profileDark from '../assets/profile1.png';

import { Github, Linkedin } from 'lucide-react';

const About = ({ theme, data, isDarkMode }) => {
  const profileImg = isDarkMode ? profileDark : profileLight;
  return (
    <section id="about" className="snap-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      padding: '5rem 5%'
    }}>
      <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 'clamp(2rem, 5vw, 6rem)', 
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          padding: 'clamp(1.5rem, 5vw, 4rem) clamp(1rem, 5vw, 3rem)',
          border: `1px solid ${theme.border}`,
          borderRadius: '40px',
          background: isDarkMode ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
          boxShadow: isDarkMode ? 'inset 0 0 40px rgba(0,0,0,0.5)' : 'inset 0 0 40px rgba(0,0,0,0.02)'
      }}>
        {/* Left Column: Profile Image (40% roughly) */}
        <motion.div 
          style={{ 
            flex: '1 1 300px', 
            maxWidth: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ 
              width: '100%', 
              aspectRatio: '1/1', 
              borderRadius: '30px', 
              overflow: 'hidden',
              border: `1px solid ${theme.border}`,
              background: theme.cardBackground,
              padding: '1rem',
              boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.05)'
          }}>
            <img 
              src={profileImg} 
              alt="Dasetti Sai Kumar" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'top center',
                borderRadius: '20px'
              }}
            />
          </div>
        </motion.div>

        {/* Right Column: About Me Text (60% roughly) */}
        <motion.div 
          style={{ 
              flex: '1.5 1 300px', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ marginBottom: '2.5rem', textAlign: 'inherit' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>About me</h2>
              <div style={{ width: '50px', height: '4px', background: theme.accent, marginBottom: '2.5rem' }} />
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: theme.secondaryText, fontWeight: 400, maxWidth: '650px', whiteSpace: 'pre-line' }}>
                {data?.aboutMe}
              </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1rem' }}>
            {[
              { 
                icon: <Linkedin size={22} />, 
                label: 'LinkedIn', 
                value: 'Professional Profile',
                url: data?.links?.linkedin
              },
              { 
                icon: <Github size={22} />, 
                label: 'GitHub', 
                value: 'Code Repositories',
                url: data?.links?.github
              }
            ].map((info, idx) => (
              <motion.a 
                key={idx} 
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: theme.accent }}
                style={{ 
                  display: 'flex', 
                  gap: '1.2rem', 
                  alignItems: 'center', 
                  textDecoration: 'none', 
                  color: 'inherit',
                  padding: '1.5rem 2rem',
                  background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  border: `1px solid ${theme.border}`,
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  minWidth: 'min(100%, 280px)'
                }}
              >
                  <div style={{ color: theme.accent, background: `${theme.accent}11`, padding: '0.8rem', borderRadius: '12px' }}>
                      {info.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.3rem', fontWeight: 800 }}>{info.label}</h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>{info.value}</p>
                  </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
