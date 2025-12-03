import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Prasanna Achar S E. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
