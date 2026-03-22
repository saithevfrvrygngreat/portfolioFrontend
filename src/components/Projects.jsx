import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Zap, Terminal } from 'lucide-react';

const RefinedParticle = ({ index }) => {
  return (
    <motion.div
      initial={{ 
        x: Math.random() * 800 - 400, 
        y: Math.random() * 600 - 300,
        z: -500,
        opacity: 0 
      }}
      animate={{ 
        y: [null, Math.random() * 600 - 300],
        z: [null, 200, -500],
        opacity: [0, 0.3, 0]
      }}
      transition={{ 
        duration: 15 + Math.random() * 10, 
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: '#fff',
        borderRadius: '50%',
        filter: 'blur(1px)',
        pointerEvents: 'none'
      }}
    />
  );
};

const ProjectItem = ({ project, index, theme, isDarkMode }) => {
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${cleanPath}`;
  };
  const isAlt = index % 2 !== 0;
  
  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id={index === 0 ? "projects" : `project-${index}`}
      className="snap-section" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(4rem, 8vh, 5rem) clamp(1rem, 5%, 5rem) 4rem',
        perspective: '2500px',
        background: isDarkMode ? '#050505' : '#FDFDFD',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Featured Works Title - Only for the first project */}
      {index === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
                textAlign: 'center',
                zIndex: 10,
                marginBottom: '2rem'
            }}
          >
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: theme.text, fontFamily: 'var(--font-heading)', margin: 0 }}>Featured Works</h2>
          </motion.div>
      )}

      {/* Subtle Atmosphere */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(10)].map((_, i) => <RefinedParticle key={i} index={i} />)}
      </div>

      <motion.div 
        style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundSize: '120px 120px',
            backgroundImage: `linear-gradient(to right, ${theme.accent}0A 1px, transparent 1px), linear-gradient(to bottom, ${theme.accent}0A 1px, transparent 1px)`,
            rotateX: 65,
            rotateZ: useTransform(rotateY, [-12, 12], [index * 45 - 5, index * 45 + 5]),
            scale: 2.5,
            opacity: 0.2,
            zIndex: 0,
            pointerEvents: 'none'
        }} 
      />

      <div style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          display: 'flex', 
          flexDirection: isAlt ? 'row-reverse' : 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 5vw, 6rem)',
          zIndex: 1,
          flexWrap: 'wrap',
          transformStyle: 'preserve-3d',
          marginTop: index === 0 ? '5vh' : 0
      }}>
        {/* The 3D Card */}
        <motion.div 
          initial={{ opacity: 0, rotateY: isAlt ? -50 : 50, z: -1000, scale: 0.7 }}
          whileInView={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.2 }}
          style={{ flex: 1.5, minWidth: 'min(100%, 450px)', position: 'relative', transformStyle: 'preserve-3d', rotateX, rotateY }}
        >
          {/* Glass Frame */}
          <motion.div style={{ position: 'absolute', inset: '-20px', border: `1px solid ${theme.accent}22`, borderRadius: '35px', z: -50, scale: 1.05, pointerEvents: 'none' }} />

          <motion.div
            whileHover={{ translateZ: 80, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: isDarkMode ? '0 80px 160px -40px rgba(0,0,0,0.9)' : '0 80px 160px -40px rgba(0,0,0,0.2)', border: `1px solid ${theme.border}`, background: theme.cardBackground, transformStyle: 'preserve-3d', position: 'relative' }}
          >
            <img src={getImageUrl(project.image)} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <motion.div animate={{ y: ['-100%', '300%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${theme.accent}44, transparent)`, zIndex: 2, boxShadow: `0 0 15px ${theme.accent}22` }} />
          </motion.div>
          
        </motion.div>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, x: isAlt ? -100 : 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} 
          style={{ 
              flex: 1, 
              minWidth: 'min(100%, 400px)', 
              transformStyle: 'preserve-3d', 
              z: 300,
              padding: '3rem 3.5rem',
              border: `1px solid ${theme.border}`,
              borderRadius: '40px',
              background: isDarkMode ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
              boxShadow: isDarkMode ? 'inset 0 0 40px rgba(0,0,0,0.5)' : 'inset 0 0 40px rgba(0,0,0,0.02)',
              position: 'relative'
          }}
        >
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: theme.text, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{project.title}</h3>
          <p style={{ fontSize: '1.15rem', color: theme.secondaryText, lineHeight: '1.8', marginBottom: '1.2rem', maxWidth: '600px', fontWeight: 400 }}>{project.description}</p>
          
          <div style={{ padding: '0.6rem 1.2rem', border: `1px solid ${theme.accent}33`, display: 'inline-block', borderRadius: '8px', marginBottom: '2.5rem', background: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
              <p style={{ fontSize: '0.85rem', color: theme.accent, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9, margin: 0 }}>
                  TechStack : {project.techStack.join(', ')}
              </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button whileHover={{ scale: 1.05, boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.95 }} style={{ background: theme.text, color: theme.background, border: 'none', padding: '1rem 2.2rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', transition: '0.3s all' }}>
                      <Github size={16} /> Github
                  </motion.button>
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button whileHover={{ scale: 1.05, backgroundColor: `${theme.accent}DD`, boxShadow: `0 10px 30px ${theme.accent}33` }} whileTap={{ scale: 0.95 }} style={{ background: theme.accent, color: '#fff', border: 'none', padding: '1rem 2.2rem', borderRadius: '100px', fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', transition: '0.3s all' }}>
                      <ExternalLink size={18} /> Live Link
                  </motion.button>
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = ({ theme, projects, isDarkMode }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <>
      {projects.map((project, index) => (
        <ProjectItem 
            key={index}
            project={project}
            index={index}
            theme={theme}
            isDarkMode={isDarkMode}
        />
      ))}
    </>
  );
};

export default Projects;
