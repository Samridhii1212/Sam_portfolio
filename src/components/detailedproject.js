import React, { useState } from 'react'
import ProjectBox from './ProjectBox'
import {useNavigate} from 'react-router-dom'


function Detailedproject(props) 
{

  const { project,onClose }=props

  const {title,image,date,technologies,fulldescription,github,live}=project[0];
  const navigate=useNavigate();

  function deploylink()
  {
    navigate()

  }
  function githublink()
  {
    navigate({github})

  }




  return (
   
     <div className="modal-overlay">
      <div className="project-detail-modal">

          <button className="close-button" onClick={onClose}>
          Close
         </button>

        <img src={image} alt={title} className="detail-image" />

        <h2>{title}</h2>
        <h4>{date}</h4>

        <div className="details">
          <div className="detailed-technologies">
            {technologies.map((tech, index) => (
              <div key={index} className="detailed-technology">
                {tech}
              </div>
            ))}
          </div>
         
          {fulldescription.map(item=>
            (
            <ul type="none">
              <li>{item}</li>
            </ul>
            ))
              
          }
         


        </div>
        <div className="buttons">
          <button className="action-button" ><a href={github}>View Github Code</a></button>
          <button className="action-button"><a href={live}>View Live Code</a></button>
        </div>
      </div>
    </div>
    
    
    
  
  )
}

export default Detailedproject