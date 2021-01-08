import React, { useState } from 'react';


function Project(props) {

    const [projects] = useState([
        {
            name: 'Photo Port'
        },
        {
            name: 'Gettin Hitched'
        },
        {
            name: 'City Explorer'
        },
        {
            name: 'Pizza Hunt'
        }
    ]);

    const {name, projImage, projLink, projGithub} = props;
    console.log(projImage);
    const [currentProject, setCurrentProject] = useState();

    return (
        <div className="flex-row my-5">
            <img src={require(`../../${projImage}`).default} className='proj-image'></img>
                <div className='proj-container'>
                    <a href={projLink}>
                        {name}
                    </a>
                    <a href={projGithub}>
                        Github
                    </a>
                </div>
        </div>
        
    );
}

export default Project;