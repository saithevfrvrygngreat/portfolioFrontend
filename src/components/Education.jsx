import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award } from 'lucide-react';

const Education = ({ theme, education, isDarkMode }) => {
  if (!education) return null;

  return (
    <section id="education" className="snap-section" style={{ 
        minHeight: '100vh', 
        padding: '5rem 5% 6rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.01)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: theme.text, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Academic <span style={{ color: theme.accent }}>Background</span>
          </h2>
          <div style={{ width: '80px', height: '4px', background: theme.accent, borderRadius: '2px' }} />
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Main vertical line */}
          <div style={{ 
            position: 'absolute', 
            left: '31px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accent}11)`,
            opacity: 0.3
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                style={{ 
                  display: 'flex', 
                  gap: '2.5rem',
                  position: 'relative'
                }}
              >
                {/* Timeline Dot/Icon */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '50%', 
                      background: theme.cardBackground, 
                      border: `2px solid ${theme.accent}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.accent,
                      boxShadow: `0 0 20px ${theme.accent}33`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <GraduationCap size={28} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ y: -5, borderColor: theme.accent }}
                  style={{ 
                    flex: 1,
                    padding: '2.5rem 3rem', 
                    background: theme.cardBackground, 
                    border: `1px solid ${theme.border}`,
                    borderRadius: '24px',
                    boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.05)',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: theme.text, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{edu.school}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: theme.accent, fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <GraduationCap size={16} />
                        <span>{edu.degree}</span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.6rem', 
                      background: `${theme.accent}11`, 
                      padding: '0.6rem 1.2rem', 
                      borderRadius: '100px',
                      color: theme.accent,
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: `1px solid ${theme.accent}22`
                    }}>
                      <span>{edu.date}</span>
                    </div>
                  </div>

                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.8', 
                    color: theme.text,
                    opacity: 0.7,
                    fontWeight: 400,
                    marginBottom: (edu.cgpa || edu.percentage) ? '1.5rem' : 0
                  }}>
                    {edu.description}
                  </p>

                  {(edu.cgpa || edu.percentage) && (
                    <div style={{ 
                      padding: '1.2rem 1.5rem', 
                      background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                      borderRadius: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      border: `1px solid ${theme.border}`,
                      transition: 'all 0.3s ease'
                    }} className="performance-box">
                      <div style={{ 
                        color: theme.accent, 
                        background: `${theme.accent}11`, 
                        padding: '0.6rem', 
                        borderRadius: '10px' 
                      }}>
                        <Award size={18} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, fontWeight: 800, marginBottom: '0.2rem' }}>
                          {edu.cgpa ? 'CGPA' : 'Score'}
                        </h4>
                        <p style={{ fontSize: '1.1rem', fontWeight: 800, color: theme.accent }}>{edu.cgpa || edu.percentage}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
