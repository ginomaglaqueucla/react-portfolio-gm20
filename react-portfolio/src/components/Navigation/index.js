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
                                              console.log(section);
                                              console.log(currentSection)
                                             }}
                        >
                            {section}
                        </a>
            </li>
    //   </nav>
    );
}
  
export default Navigation;