import React from 'react';
import Navigation from '../Navigation'

function Header(props) {
    const {
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
                        section='about'
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                    />
                    <Navigation
                        section='portfolio'
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                    />
                    <Navigation
                        section='resume'
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                    />
                    <Navigation
                        section='contact'
                        setCurrentSection={setCurrentSection}
                        currentSection={currentSection}
                    />
                </ul>
            </nav>
      </header>
    );
}

export default Header;