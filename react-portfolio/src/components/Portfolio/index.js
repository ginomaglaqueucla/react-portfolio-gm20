import React from 'react';
import Project from '../Project';


function Portfolio() {
  return (
    <section className="my-5 portfolio">
      <h1>Portfolio</h1>
      <Project
        name='Get Hitched'
        projImage='assets/get-hitched.png'
        projLink='https://sheltered-eyrie-92140.herokuapp.com/'
        projGithub='https://github.com/ginomaglaqueucla/get-hitched.git'
      />
      <Project
        name='Photo Port'
        projImage='assets/photo-port.png'
        projLink='https://ginomaglaqueucla.github.io/photo-port/'
        projGithub='https://github.com/ginomaglaqueucla/photo-port.git'
      />
      <Project
        name='City Explorer'
        projImage='assets/city-explorer.png'
        projLink='https://reynolkb.github.io/city-explorer/'
        projGithub='https://github.com/reynolkb/city-explorer.git'
      />
      <Project
        name='Weather Dashboard'
        projImage='assets/weather-dashboard.png'
        projLink='https://ginomaglaqueucla.github.io/weather-dashboard-gm20/'
        projGithub='https://github.com/ginomaglaqueucla/weather-dashboard-gm20.git'
      />
      <Project
        name='Budget Tracker'
        projImage='assets/budget-tracker.png'
        projLink='https://ginomaglaqueucla.github.io/budget-tracker-gm20/'
        projGithub='https://github.com/ginomaglaqueucla/budget-tracker-gm20.git'
      />
      <Project
        name='Work Day Scheduler'
        projImage='assets/work-day-scheduler.png'
        projLink='https://ginomaglaqueucla.github.io/work-day-scheduler-gm20/'
        projGithub='https://github.com/ginomaglaqueucla/work-day-scheduler-gm20.git'
      />
    </section>
  );
}

export default Portfolio;