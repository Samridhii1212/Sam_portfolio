import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='header'>
          <div className="logo">
        <img src="https://miro.medium.com/v2/resize:fit:1024/1*K6J7UoogZwt-vp9MZ6BXpA.jpeg" />
            
          </div>
          <nav className="nav">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/skills">Skills</Link></li>
                  <li><Link to="/project" >Projects</Link></li>
                  <li><Link to="/education">Education</Link></li>
              </ul>
          </nav>
          <div className="github-btn">
           <a href="https://github.com/Samridhii1212?tab=repositories" >
               GITHUB
              </a>
          </div>

    </div>
  )
}

export default Header