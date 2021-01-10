import React from 'react';
import Navigation from '../Navigation'

function Header(props) {
    const {
        // categories = [],
        // setCurrentCategory,
        // contactSelected,
        // currentCategory,
        // setContactSelected,
        sections = [],
        setCurrentSection,
        currentSection
    } = props;
    return (
      <header className="flex-row px-2">
            <h2>
                <a href="/">
                    Gino Maglaque
                </a>
            </h2>
            <nav>
            <ul className='flex-row'>
            <Navigation
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
                // contactSelected={contactSelected}
                // setContactSelected={setContactSelected}
                section='about'
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
                        <Navigation
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
                // contactSelected={contactSelected}
                // setContactSelected={setContactSelected}
                section='portfolio'
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
                        <Navigation
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
                // contactSelected={contactSelected}
                // setContactSelected={setContactSelected}
                section='resume'
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
                        <Navigation
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
                // contactSelected={contactSelected}
                // setContactSelected={setContactSelected}
                section='contact'
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
            </ul>
            </nav>


      </header>
    );
}
  
export default Header;