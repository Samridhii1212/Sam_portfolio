import React from 'react'
import Header from './header'

function About() {
  return (
    <div>


      <div className="about-section">
        <h2> Hello! I'm Samridhi Srivastav.</h2>
        <h3>A Software developer</h3>

        <div className="about-content">
          <div className="intro-text">
            <p>
              I bring a strong combination of technical proficiency and creativity that sets me apart.
              With expertise in React,Redux,Java, Hibernate, Spring Boot, Spring MVC, HTML5, CSS3, and JavaScript, I've successfully translated design
              concepts into visually appealing and interactive websites.
            </p>
            <a href="https://drive.google.com/file/d/1qaFzSGL0wpidayxcVXQ0bGAZ8X70rKH8/view?usp=sharing" target="_blank" className="resume-btn">
              Check Resume
            </a>
          </div>
          <div className="photo">
            <img
              src="f2.jpeg"
              alt="Your Photo" />
          </div>




        </div>
      </div>
    </div>
  )
}

export default About