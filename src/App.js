import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Lazy load components that appear later
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="App"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Skills />
              <Projects />
              <Experience />
              <Blog />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;