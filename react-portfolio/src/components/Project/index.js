import React from 'react';

function Project(props) {

    const {name, projImage, projLink, projGithub} = props;

    return (
        <div className="flex-row my-5">
            <a href={projLink}>
                <img src={require(`../../${projImage}`).default} className='proj-image' alt='project'></img>
                {name}
            </a>
            <div className='proj-container'>
                <a href={projGithub}>
                    GITHUB
                </a>
            </div>
        </div>
        
    );
}

export default Project;