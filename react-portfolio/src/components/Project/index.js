import React, { useState } from 'react';


function Project() {

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

    // const currentProjects = projects.filter((project) => project.category === category);
    const [currentProject, setCurrentProject] = useState();

    return (
        <div className="flex-row">
            Photo Port
            <img
                src={require(`../../assets/0.jpg`).default}
                alt='Photo Port'
                className="img-thumbnail mx-1"
                // onClick={() => toggleModal(image, i)}
                key='Photo Port'
            />
        </div>
    );
}

export default Project;