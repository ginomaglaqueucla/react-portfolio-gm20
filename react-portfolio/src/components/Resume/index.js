import React from 'react';


function Resume() {
    return (
        <section className="my-5">
            <h1 id="resume">Resume listed here</h1>
            <a href='https://www.youtube.com/'>
                Resume here
            </a>
            <h2>Web Developmenet Front End</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Boostrap</li>
                    <li>jQuery</li>
                    <li>React</li>
                </ul>
            <h2>Web Developmenet Front End</h2>
                <ul>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>REST</li>
                    <li>Handlebars</li>
                </ul>
            <h2>Web Developmenet Databases</h2>
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