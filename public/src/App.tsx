import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      
      {!isLoading && (
        <>
          <AnimatedBackground />
          <ScrollProgress />
          <Navigation />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;