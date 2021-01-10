import React from 'react';


function Resume() {
    return (
        <section id='resume' className="my-3">
            <h1 id="resume">
                <a href='https://www.youtube.com/'>
                    Resume
                </a>
            </h1>
            <h2>Front End</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Boostrap</li>
                    <li>jQuery</li>
                    <li>React</li>
                </ul>
            <h2>Back End</h2>
                <ul>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>REST</li>
                    <li>Handlebars</li>
                </ul>
            <h2>Databases</h2>
                <ul>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
        </section>
    );
}

export default Resume;