import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = ({ theme, achievements }) => {
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };
  if (!achievements) return null;

  return (
    <section id="achievements" className="snap-section" style={{ minHeight: '80vh', padding: '5rem 10% 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Achievements</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {achievements.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'center',
              padding: '2rem',
              background: theme.cardBackground,
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              minHeight: '150px'
            }}
          >
            <div style={{ 
                fontSize: '1.8rem', 
                color: theme.accent, 
                fontWeight: 900, 
                opacity: 0.15, 
                minWidth: '40px'
            }}>
                {(idx + 1).toString().padStart(2, '0')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
              {item.image ? (
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img 
                    src={getImageUrl(item.image)} 
                    alt={item.title} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              ) : (
                <div style={{ color: theme.accent }}>
                  <Trophy size={24} strokeWidth={2.5} />
                </div>
              )}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: theme.text, letterSpacing: '0.02em' }}>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
