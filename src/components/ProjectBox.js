import React from 'react'

function ProjectBox(props) {
    const {project}=props
    return (
    <div >
    <img src={project.image} alt={project.title} className="project-image" />
    <h2>{project.title}</h2>
    <h4>{project.date}</h4>
    <div className="technologies">
    {project.technologies.map((tech, index) => (
    <div key={index} className="technology">
    {tech}
    </div>
    ))}
    </div>
    <div className='description'>{project.description}</div>
    </div>
    );
   
  
}

export default ProjectBox