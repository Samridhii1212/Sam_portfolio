import React from 'react'

function Skills() {
  const frontendSkills = [
    'JavaScript',
    'React JS',
    'Redux',
    'HTML',
    'CSS',


  ];

  const backendSkills = [
    'Express JS',
    'Node JS',
    'Spring Boot'


  ];

  const database = [
    'MongoDB',
    'Mysql'



  ];


  const otherSkills = [
    'Data Structures',
    'GitHub',
    'Git',
    'VS Code',
    // Add more other skills as needed
  ];

  return (
    <div className='skills-section'>
      <h1>MY SKILLS</h1>


      <div className="skill-box">
        <div className="category-box">
          <h2>Frontend</h2>
          <div className="skills-list">
            {frontendSkills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="category-box">
          <h2>Backend</h2>
          <div className="skills-list">
            {backendSkills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="category-box">
          <h2>Database</h2>
          <div className="skills-list">
            {database.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>


        <div className="category-box">
          <h2>Other</h2>
          <div className="skills-list">
            {otherSkills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>



    </div >
  )
}

export default Skills