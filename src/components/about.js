import React from 'react'
import Header from './header'

function About() {
  return (
    <div>


      <div className="about-section">
        <h2> Hello! I'm Samridhi Srivastav.</h2>
        <h3>A Software developer,Open to work.</h3>

        <div className="about-content">
          <div className="intro-text">
            <p>
              I bring a strong combination of technical proficiency and creativity that sets me apart.
              With expertise in React,Redux,MERN Stack,Java,Spring Boot, Spring MVC, HTML, CSS, and JavaScript, I've successfully translated design
              concepts into visually appealing and interactive websites.<br></br><br></br>
              I am actively seeking job opportunities where I can leverage my skills and experience to contribute to dynamic and innovative projects
            </p>
            <a href="https://drive.google.com/file/d/1c8ZKFeh4eHzF5eIkZjlPRET6s4BtCyI4/view" target="_blank" className="resume-btn">
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