import React from 'react';
import { motion } from 'framer-motion';

const Certifications = ({ theme, certificates }) => {
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };
  if (!certificates) return null;

  return (
    <section id="certifications" className="snap-section" style={{ 
      minHeight: '80vh', 
      padding: '5rem 10% 4rem', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start' 
    }}>
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: theme.text, marginBottom: '1rem' }}>Certifications</h2>
        <div style={{ width: '60px', height: '4px', background: theme.accent }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {certificates.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            style={{ 
              background: theme.cardBackground, 
              border: `1px solid ${theme.border}`,
              borderRadius: '12px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px'
            }}
          >
            <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: '16px', overflow: 'hidden', background: '#fff', padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${theme.border}` }}>
               <img 
                 src={getImageUrl(cert.image)} 
                 alt={cert.title} 
                 style={{ width: '100%', height: '250px', objectFit: 'contain' }}
               />
                <div style={{ position: 'absolute', top: '10px', left: '10px', opacity: 0.1, fontSize: '1.5rem', fontWeight: 900 }}>
                   {(idx + 1).toString().padStart(2, '0')}
                </div>
            </div>

            <div style={{ flex: 1, marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.6rem', color: theme.text, lineHeight: '1.4' }}>{cert.title}</h3>
              <p style={{ color: theme.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{cert.issuer}</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.4, fontWeight: 500, letterSpacing: '0.05em' }}>{cert.date}</p>
            </div>

            <a 
              href={getImageUrl(cert.certificateUrl)} 
              style={{ textDecoration: 'none' }}
              download={`Certificate_${cert.title.replace(/\s+/g, '_')}`}
            >
                <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: theme.accent, color: '#fff', borderColor: theme.accent }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        width: '100%',
                        padding: '1.1rem',
                        background: 'transparent',
                        color: theme.accent,
                        border: `1.5px solid ${theme.accent}`,
                        borderRadius: '0',
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Certificate
                </motion.button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
