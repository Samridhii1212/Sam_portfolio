import React from 'react'
import Header from './header'

function About() {
  return (
    <div>
      

      <div className="about-section">
        <h2> Hello! I'm Samridhi Srivastav.</h2>
        <h3>A front-end developer</h3>

        <div className="about-content">
         <div className="intro-text">
          <p>
          I bring a strong combination of technical proficiency and creativity that sets me apart.
          With expertise in React, HTML5, CSS3, and JavaScript, I've successfully translated design 
          concepts into visually appealing and interactive websites. 
          </p>
            <a href="https://drive.google.com/drive/u/1/folders/1Wwl97cl3IL_geIdfWW-zzgmzbH2Q11Ah?q=sharedwith:public%20parent:1Wwl97cl3IL_geIdfWW-zzgmzbH2Q11Ah" target="_blank" className="resume-btn">
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