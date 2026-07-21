import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Skills from "./components/Skills/Skills.js";
import AboutMe from './About_me';
import Education from './components/Education/Education';
import Main from './Main';
import Experience from "./components/Experience/Experience";
import Projects from './projects';
import ContactForm from './ContactForm';
// import Hero from './components/Hero';
function App() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate async data fetching or any async operation
    const fetchData = async () => {
      // Simulate delay for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading state to false after delay (simulating data loaded)
    };

    fetchData(); // Call fetchData function
  }, []);
  return (
    <div>
    {isLoading ? (
  <div className="loading-wave">
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>

      </div>
    ) :(
    <div className="App">
      
      <Navbar/>
      <Main id="mainy" />
      <AboutMe id="aboutme" />
      <Skills />
      <Experience />
      <Education id="Education"/>
      <Projects id="project" />
      {/* <Hero/> */}
      <ContactForm id="contact" />
    </div>
    )
  }
  </div>
  );
}

export default App;
