import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from './theme';
import IntroAnimation from './components/IntroAnimation';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Training from './components/Training';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CodingPlatforms from './components/CodingPlatforms';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import axios from 'axios';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiUrl = import.meta.env.DEV 
      ? 'http://localhost:5000/api/cv' 
      : 'https://portfoliobackend-l4vf.onrender.com/api/cv';
      
    axios.get(apiUrl)
      .then(res => {
        setCvData(res.data);
        setError(null);
      })
      .catch(err => {
        console.error("Error fetching CV data:", err);
        setError("Backend Unavailable");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleTheme = useCallback(() => setIsDarkMode(prev => !prev), []);
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);
  
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', currentTheme.background);
    document.documentElement.style.setProperty('--text-color', currentTheme.text);
    document.documentElement.style.setProperty('--accent-color', currentTheme.accent);
    document.documentElement.style.setProperty('--glass-bg', currentTheme.glassEffect);
    document.body.style.backgroundColor = currentTheme.background;
    document.body.style.color = currentTheme.text;
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode, currentTheme]);

  return (
    <div className="portfolio-app">
      <AnimatePresence mode="sync">
        {showIntro ? (
          <IntroAnimation 
            key="intro-animation"
            onComplete={handleIntroComplete} 
            isDarkMode={isDarkMode} 
            theme={theme} 
          />
        ) : (
          <motion.div 
            key="main-portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <ThreeBackground isDarkMode={isDarkMode} />
            <Navbar theme={currentTheme} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            
            {loading ? (
              <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: currentTheme.text }}>
                <div style={{ width: '40px', height: '40px', border: `3px solid ${currentTheme.accent}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              </div>
            ) : error ? (
              <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: currentTheme.text, textAlign: 'center', padding: '0 20px' }}>
                <h2 style={{ color: currentTheme.accent, marginBottom: '1rem' }}>SYSTEM OFFLINE</h2>
                <p style={{ opacity: 0.7, maxWidth: '500px' }}>The portfolio's intelligence core (backend) is currently unreachable. Some sections may be unavailable.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  style={{ marginTop: '2rem', padding: '0.8rem 2rem', background: currentTheme.accent, border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
                >
                  RECONNECT
                </button>
              </div>
            ) : (
              <main className="snap-container">
                <Hero theme={currentTheme} name={cvData?.name} isDarkMode={isDarkMode} />
                <About theme={currentTheme} data={cvData} isDarkMode={isDarkMode} />
                <Projects theme={currentTheme} projects={cvData?.projects} isDarkMode={isDarkMode} />
                <Training theme={currentTheme} data={cvData} />
                <Achievements theme={currentTheme} achievements={cvData?.achievements} />
                <Skills theme={currentTheme} skills={cvData?.skills} isDarkMode={isDarkMode} />
                <Certifications theme={currentTheme} certificates={cvData?.certificates} />
                <CodingPlatforms theme={currentTheme} platforms={cvData?.codingPlatforms} isDarkMode={isDarkMode} />
                <Education theme={currentTheme} education={cvData?.education} />
                <Contact theme={currentTheme} isDarkMode={isDarkMode} />
                <Footer theme={currentTheme} isDarkMode={isDarkMode} data={cvData} />
              </main>
            )}
            <ScrollToTop theme={currentTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
