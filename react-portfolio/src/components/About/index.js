import React from 'react';

function About() {
  return (
    <section id='#about' className="my-5">
      <h1>Who am I?</h1>
      <div>
        <img src={require(`../../assets/IMG_4257.JPG`).default} className='gino-img'></img>
        <p> Hello! My name is Gino Franco Maglaque and I am currently enrolled in a 
          Full Stack Web Development Bootcamp hosted by UCLA Extension. I also work full time at Northrop Grumman
          as a Build Manager and Software Test Engineer. I am looking forward to implementing my newly aquired skills
          into my current job as well as any open opportunities within the company
          </p>
      </div>

    </section>
  );
}

export default About;