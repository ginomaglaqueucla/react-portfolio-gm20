import React from 'react';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <div>
        <img src={require(`../../assets/IMG_4257.JPG`).default} className='gino-img'></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc ultricie Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc ultricie Nunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricie
            Nunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricie
            Nunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricieNunc ultricie
          </p>
      </div>

    </section>
  );
}

export default About;