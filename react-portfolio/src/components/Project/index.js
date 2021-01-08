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
    // const currentProjects = projects.filter((project) => project.category === category);
    const [currentProject, setCurrentProject] = useState();

    return (
        // <div>
        //     <div className="flex-row">
        //         <img
        //             src={require(`../../assets/0.jpg`).default}
        //             alt='Photo Port'
        //             className="img-thumbnail mx-1"
        //             // onClick={() => toggleModal(image, i)}
        //             key='Photo Port'
        //         />
        //         <img
        //             src={require(`../../assets/1.jpg`).default}
        //             alt='Gettin Hitched'
        //             className="img-thumbnail mx-1"
        //             // onClick={() => toggleModal(image, i)}
        //             key='Gettin Hitched'
        //         />
        //         <img
        //             src={require(`../../assets/2.jpg`).default}
        //             alt='City Explorer'
        //             className="img-thumbnail mx-1"
        //             // onClick={() => toggleModal(image, i)}
        //             key='City Explorer'
        //         />
        //         <img
        //             src={require(`../../assets/3.jpg`).default}
        //             alt='Pizza Hunt'
        //             className="img-thumbnail mx-1"
        //             // onClick={() => toggleModal(image, i)}
        //             key='Pizza Hunt'
        //         />
        //     </div>
        // </div>
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