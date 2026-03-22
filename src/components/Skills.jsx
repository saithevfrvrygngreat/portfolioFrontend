import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ theme, skills, isDarkMode }) => {
  if (!skills) return null;

  const categories = [
    { name: 'Core Languages', data: skills.languages },
    { name: 'Architecture & Frameworks', data: skills.frameworks },
    { name: 'Tools & Ecosystem', data: skills.tools }
  ];

  const getIconUrl = (skill) => {
    const mapping = {
      'Java': 'java/java-original',
      'C': 'c/c-original',
      'C++': 'cplusplus/cplusplus-original',
      'Python': 'python/python-original',
      'HTML': 'html5/html5-original',
      'CSS': 'css3/css3-original',
      'NodeJS': 'nodejs/nodejs-original',
      'React': 'react/react-original',
      'MySQL': 'mysql/mysql-original',
      'Postman': 'postman/postman-original',
      'Visual Studio Code': 'vscode/vscode-original',
      'JavaScript': 'javascript/javascript-original',
      'MongoDB': 'mongodb/mongodb-original',
      'ReactJs': 'react/react-original',
      'NodeJs': 'nodejs/nodejs-original'
    };
    const path = mapping[skill];
    if (path) return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;
    return `https://www.svgrepo.com/show/443588/brain.svg`; 
  };

  return (
    <section id="skills" className="snap-section" style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        padding: '5rem 10% 4rem' 
    }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Technical Proficiency</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
            style={{ 
              padding: '2rem', 
              background: theme.cardBackground, 
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: theme.accent, marginBottom: '2rem', fontWeight: 700 }}>{cat.name}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {cat.data.map((skill, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    padding: '10px', 
                    background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', 
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `1px solid ${theme.border}`
                  }}>
                    <img src={getIconUrl(skill)} alt={skill} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: isDarkMode ? 'none' : 'grayscale(0.1)' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, opacity: 0.8 }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
