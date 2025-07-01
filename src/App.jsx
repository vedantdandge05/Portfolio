import { useState } from 'react'
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css'

const sections = [
  { id: 'about', label: 'About', component: <About /> },
  { id: 'experience', label: 'Experience', component: <Experience /> },
  { id: 'skills', label: 'Skills', component: <Skills /> },
  { id: 'education', label: 'Education', component: <Education /> },
  { id: 'projects', label: 'Projects', component: <Projects /> },
  { id: 'contact', label: 'Contact', component: <Contact /> },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <div className="portfolio-container">
        {sections.map(({ id, component }) => (
          <div key={id} id={id} style={{ display: activeSection === id ? 'block' : 'none' }}>
            {component}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
