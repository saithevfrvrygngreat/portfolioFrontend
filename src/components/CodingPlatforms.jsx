import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu } from 'lucide-react';

const CodingPlatforms = ({ theme, platforms, isDarkMode }) => {
  const getIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'leetcode': return <Code2 size={24} />;
      case 'hackerrank': return <Terminal size={24} />;
      case 'geeksforgeeks': return <Cpu size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <section 
      id="coding" 
      className="snap-section" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '5rem 5%', 
        background: isDarkMode ? '#0d0d0e' : '#f9f9f9',
        borderTop: `1px solid ${theme.border}`,
        borderBottom: `1px solid ${theme.border}`
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ alignSelf: 'flex-start', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Programming Proficiency</h2>
          <div style={{ width: '50px', height: '4px', background: theme.accent }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 360px), 1fr))', gap: '3rem', width: '100%' }}>
          {platforms?.map((platform, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              style={{ 
                padding: '1.8rem 2.2rem', 
                background: isDarkMode ? '#161617' : '#ffffff', 
                border: `1px solid ${theme.border}`, 
                borderRadius: '12px', 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              whileHover={{ y: -5 }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ color: theme.accent, background: `${theme.accent}11`, padding: '0.6rem', borderRadius: '10px' }}>{getIcon(platform.name)}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{platform.name}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '1.5rem' }}>
                    {platform.details.map((detail, i) => (
                        <div key={i}>
                            <h4 style={{ fontSize: '0.6rem', textTransform: 'uppercase', opacity: 0.5, fontWeight: 700 }}>{detail.label}</h4>
                            <p style={{ fontSize: '1.1rem', fontWeight: 800, color: theme.text }}>{detail.value}</p>
                        </div>
                    ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.8rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.7rem', fontWeight: 800 }}>
                      <span>Skill Mastery</span>
                      <span style={{ color: theme.accent }}>{platform.strength}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${platform.strength}%` }} transition={{ duration: 2 }} style={{ height: '100%', background: theme.accent }} />
                  </div>
              </div>
              <motion.a href={platform.url} target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '1rem', border: `1px solid ${theme.border}`, borderRadius: '10px', color: theme.text, textDecoration: 'none', fontSize: '0.75rem', fontWeight: 800, textAlign: 'center', display: 'block' }}>Visit Profile</motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
