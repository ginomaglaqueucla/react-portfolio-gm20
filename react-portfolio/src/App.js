import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentSection, setCurrentSection] = useState('about');

  return (
    <div>
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Header>
      <main>
        {(currentSection === 'contact') ? (
          <>
            <Contact></Contact>
            <Footer></Footer>
          </>
        ):(currentSection === 'resume')?(
          <>
            <Resume></Resume>
            <Footer></Footer>
          </>
        ):(currentSection === 'portfolio')?(
          <>
            <Portfolio></Portfolio>
            <Footer></Footer>
          </>
        ):(
          <>
            <About></About>
            <Footer></Footer>
          </>
          )}
      </main>
    </div>
  );
}


export default App;
