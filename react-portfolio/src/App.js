import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  const [sections] = useState([
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'resume'
    },
    {
      name: 'contact'
    }

  ]);
  // const [categories] = useState([
  //   {
  //     name: 'commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  // ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        // categories={categories}
        // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Header>
      <main>
        {(currentSection.name === 'contact') ? (
          <>
            <Contact></Contact>
            <Footer></Footer>
          </>
        ):(currentSection.name === 'resume')?(
          <>
            <Resume></Resume>
            <Footer></Footer>
          </>
        ):(currentSection.name === 'portfolio')?(
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
