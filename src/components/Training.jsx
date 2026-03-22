import React from 'react';
import { motion } from 'framer-motion';

const Training = ({ theme, data }) => {
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };
  if (!data || !data.training) return null;

  return (
    <section id="training" className="snap-section" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      padding: '5rem 10% 4rem'
    }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Training</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {data.training.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              padding: '2.5rem', 
              background: theme.cardBackground, 
              borderRadius: '12px',
              border: `1px solid ${theme.border}`,
              marginBottom: '2rem'
            }}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: '2.5rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.6rem', color: theme.text, lineHeight: '1.4' }}>{t.title}</h3>
                  <p style={{ color: theme.accent, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{t.organization}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.4, fontWeight: 500, letterSpacing: '0.05em' }}>{t.date}</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem', fontWeight: 700 }}>Program Highlights</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {t.highlights?.map((h, i) => (
                        <li key={i} style={{ marginBottom: '0.8rem', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.5', opacity: 0.8 }}>
                          <span style={{ color: theme.accent, marginTop: '2px' }}>—</span> 
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                </div>

                <a 
                  href={getImageUrl(t.certificateUrl)} 
                  style={{ textDecoration: 'none' }}
                  download={`Certificate_${t.title.replace(/\s+/g, '_')}`}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: 'fit-content',
                      padding: '1.1rem 2.5rem',
                      background: 'transparent',
                      border: `1.5px solid ${theme.accent}`,
                      color: theme.accent,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '0.8rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Certificate
                  </motion.button>
                </a>
              </div>

              <div style={{ flex: 1, minWidth: '350px' }}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: '#fff', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
                  <img 
                    src={getImageUrl(t.image) || 'https://www.svgrepo.com/show/443588/brain.svg'} 
                    alt={t.title} 
                    style={{ width: '100%', height: '300px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Training;
