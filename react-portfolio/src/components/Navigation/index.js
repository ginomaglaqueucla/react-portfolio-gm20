import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
                            {capitalizeFirstLetter(section)}
                        </a>
            </li>
    );
}
  
export default Navigation;