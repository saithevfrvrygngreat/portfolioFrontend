import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

const EducationAchievements = ({ theme, certificates, achievements, education }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '5rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', flexWrap: 'wrap' }}>
        
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 style={{ fontSize: '2.5rem', color: theme.accent, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <GraduationCap /> Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education?.map((edu, idx) => (
              <div key={idx} style={{ borderLeft: `2px solid ${theme.accent}44`, paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: theme.accent }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{edu.school}</h3>
                <p style={{ color: theme.accent, fontWeight: 600 }}>{edu.degree}</p>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>{edu.date} | {edu.location}</p>
                {edu.cgpa && <p style={{ fontWeight: 800 }}>CGPA: {edu.cgpa}</p>}
                {edu.percentage && <p style={{ fontWeight: 800 }}>Percentage: {edu.percentage}</p>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 style={{ fontSize: '2.5rem', color: theme.accent, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Award /> Achievements
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {achievements?.map((ach, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: `${theme.cardBackground}44`, borderRadius: '15px' }}>
                <h3 style={{ fontSize: '1.2rem', color: theme.accent, marginBottom: '0.5rem' }}>{ach.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {ach.highlights.map((h, i) => (
                        <li key={i} style={{ marginBottom: '0.4rem', opacity: 0.8 }}>▹ {h}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 style={{ fontSize: '2.5rem', color: theme.accent, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Briefcase size={32} /> Certificates
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {certificates?.map((cert, idx) => (
                <div key={idx} style={{ padding: '1.2rem', border: `1px solid ${theme.accent}11`, borderRadius: '12px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{cert.title}</h4>
                    <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{cert.issuer}</p>
                    <p style={{ fontSize: '0.8rem', color: theme.accent }}>{cert.date}</p>
                </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationAchievements;
