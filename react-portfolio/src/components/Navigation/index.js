import React from 'react';

function Navigation(props) {
    const {
        section,
        setCurrentSection,
        currentSection
    } = props;

    return (
            <li className={`mx-1 ${currentSection === section && 'navActive'}`}>
            <a href={`#${currentSection}`} onClick={() => {
                                              setCurrentSection(section);
                                             }}
                        >
                            {section}
                        </a>
            </li>
    );
}
  
export default Navigation;