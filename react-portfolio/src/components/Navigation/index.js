import React from 'react';

function Navigation(props) {
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
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false)}>
                        About
                    </a> 
                </li>
                <li className="mx-2">
                    <a href="#portfolio" onClick={() => setContactSelected(false)}>
                        Portfolio
                    </a> 
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                {sections.map((section) => (
                    <li
                        className={`mx-1
                            ${
                                currentSection.name === sections.name && !contactSelected && 'navActive'
                            }
                        `}
                    key={sections}
                    >
                        <span onClick={() => {
                                              setCurrentSection(section);
                                              console.log(section);
                                             }}
                        >
                            {section.name}
                        </span>
                    </li>
                ))}
            </ul>
      </nav>
    );
}
  
export default Navigation;