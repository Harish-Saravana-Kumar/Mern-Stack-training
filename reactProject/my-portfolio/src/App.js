import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
