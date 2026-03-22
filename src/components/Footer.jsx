import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = ({ theme, isDarkMode, data }) => {

  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer 
      className="snap-section"
      style={{ 
        padding: '3.5rem 10% 2.5rem',
        backgroundColor: isDarkMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.02)',
        borderTop: `1px solid ${theme.border}`,
        position: 'relative',
        scrollSnapAlign: 'end',
        minHeight: '35vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
    >
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Column 1: Brand & Bio */}
        <div style={{ flex: 1 }}>
            <span style={{ 
                fontSize: '1.4rem', 
                fontWeight: 900, 
                color: theme.text, 
                letterSpacing: '0.1em', 
                display: 'block', 
                marginBottom: '1rem',
                color: theme.accent 
            }}>
                {data?.name?.split(' ').map(n => n[0]).join('. ') || 'S. KUMAR'}.
            </span>
            <p style={{ 
                opacity: 0.6, 
                fontSize: '0.9rem', 
                lineHeight: '1.7',
                maxWidth: '300px',
                marginBottom: '1.5rem'
            }}>
                Design-driven software engineer focused on building beautiful, functional, and user-centric digital experiences.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
                {[
                    { icon: <Github size={18} />, url: "https://github.com/saithevfrvrygngreat", label: "GitHub" },
                    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/dasetti-sai-kumar-b30340299/", label: "LinkedIn" }
                ].map((social, idx) => (
                    <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: theme.accent }}
                        style={{ color: theme.text, opacity: 0.6, transition: '0.3s ease' }}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
        </div>
 
        {/* Column 2: Quick Links */}
        <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem', fontWeight: 800, color: theme.text }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {quickLinks.map((link, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem' }}>
                        <a 
                            href={`#${link.id}`}
                            style={{ 
                                color: theme.text, 
                                opacity: 0.6, 
                                textDecoration: 'none', 
                                fontSize: '0.9rem',
                                transition: '0.3s ease'
                            }}
                            onMouseEnter={(e) => { e.target.style.opacity = 1; e.target.style.color = theme.accent; }}
                            onMouseLeave={(e) => { e.target.style.opacity = 0.6; e.target.style.color = theme.text; }}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
 
        {/* Column 3: Contact Info */}
        <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem', fontWeight: 800, color: theme.text }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:dasettisaikumar@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: theme.text, opacity: 0.6, textDecoration: 'none', fontSize: '0.9rem' }}>
                    <Mail size={15} color={theme.accent} /> 
                    <span>dasettisaikumar@gmail.com</span>
                </a>
                <a href="tel:+919059245025" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: theme.text, opacity: 0.6, textDecoration: 'none', fontSize: '0.9rem' }}>
                    <Phone size={15} color={theme.accent} />
                    <span>+91 9059245025</span>
                </a>
            </div>
        </div>
 
        {/* Column 4: Availability */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem', fontWeight: 800, color: theme.text }}>Availability</h4>
            <div style={{ 
                padding: '1.2rem', 
                background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                borderRadius: '12px',
                border: `1px solid ${theme.border}`,
                width: '100%'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Available for hire</span>
                </div>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, lineHeight: '1.5' }}>
                    Open for high-impact roles or projects.
                </p>
            </div>
        </div>
      </div>
 
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: '2rem',
        borderTop: `1px solid ${theme.border}`,
        flexWrap: 'wrap',
        gap: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ opacity: 0.4, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
            © {year} Developed by <span style={{ fontWeight: 700, color: theme.text }}>Sai Kumar</span>. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
