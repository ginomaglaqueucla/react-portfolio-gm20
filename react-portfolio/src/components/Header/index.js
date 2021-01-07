import React from 'react';
import Navigation from '../Navigation'

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
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
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                sections={sections}
                setCurrentSection={setCurrentSection}
                currentSection={currentSection}
            ></Navigation>
      </header>
    );
}
  
export default Header;