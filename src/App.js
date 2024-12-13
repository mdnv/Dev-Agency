import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <Team />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;