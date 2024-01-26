import React from 'react'
import { useState } from 'react';
import ProjectBox from './ProjectBox';
import Detailedproject from './detailedproject';

function Project() 
{

    const projectsData = [
      {
        id: 1,
        title: 'GitHubRepoViewer',
        image: 'repo.png',
        date: 'Jan 10-Jan 20',
        technologies: [ 'HTML', 'CSS','JAVASCRIPT'],
        description: 'Developed a GitHub repository viewer with a focus on enhancing user experience click.....',
        fulldescription:
          [
            `•Developed a GitHub repository viewer with a focus on enhancing user experience through seamless pagination features.`,
            `•Leveraged HTML for content structure, CSS for styling, and JavaScript for dynamic and interactive functionalities.`,
            `•Implemented pagination to optimize the presentation of repository data and improve loading times.`,
            `• Incorporated GitHub API calls to fetch real-time repository information, demonstrating proficiency in working with external APIs.`,
            

          ],

        github: 'https://github.com/Samridhii1212/GitHubRepoViewer',
        live:'https://git-hub-repo-viewer-lbi2.vercel.app/',
      },
      {
        id: 2,
        title: 'My thoughts',
        image: 'quotes.png',
        date: 'Jan 2024-current',
        technologies: ['React Js', 'Redux', 'HTML', 'CSS'],
        description: 'Developed a dynamic web application using React, HTML, and CSS with a focus on user click...',
        fulldescription:
          [
            `•Developed a dynamic web application using React, HTML, and CSS with a focus on user authentication and quote management.`,
            `•Enabled users to create, store, and view their quotes on the platform, enhancing personalization and user engagement.`,
            `•Utilized Redux Toolkit for state management, enabling efficient handling of application-wide states and actions like allowing users 
          to add quotes to their favorite list and remove them, enhancing user customization and interaction`,
            `• Employed the useContext hook to efficiently manage and persist the login state of the user throughout the app.`,
            `•Implemention of a secure user authentication system on the login page, ensuring a seamless and protected user experience to be done.`

          ],

        github: 'https://github.com/Samridhii1212/my-thoughts'
      },
    {
      id: 3,
      title: 'Foodie-Express',
      image: 'foodie.png',
      date:'Nov 2023-Dec 2023',
      technologies: ['React','Redux','Tailwind CSS','MongoDb','Express','Node JS'],
        description: 'Developed Foodie Express (group project), a food ordering website click ....',
      fulldescription:
      [
        `• Developed a  Foodie Express (group project), a food ordering website utilizing the Swiggy API to integrate real-time restaurant data
          ensuring an up-to-date and dynamic user experience`,
        `• Implemented secure authentication using JSON Web Tokens (JWT) to manage user login sessions effectively`,
         `• Integrated Redux Toolkit to manage and maintain the state of the shopping cart within the application.`,
         `• Employed the useContext hook to efficiently manage and persist the login state of the user throughout the app.`,
          `• Developed an intuitive accordion feature, enhancing the user interface and providing a clean and organized user
           experience`

      ],
       github: 'https://github.com/Samridhii1212/Foodie-Express',
        live:'https://foodie-express-puce.vercel.app/login'
      
    },
    
    {
      id:4,
      title: 'Tenzies Game',
      image: 'tenzies2.png',
     
      date: 'May 2023-May 2023',
      technologies: ['React', 'Redux', 'HTML', 'CSS'],
      description: 'Led the design and development of an engaging web-based game using a tech click...',
      fulldescription:
        [
          `•Led the design and development of an engaging web-based game using a tech stack comprised of HTML, CSS, and JavaScript, with a primary focus on the React JS library.`,
          `•Implemented a modular architecture by leveraging React Hooks to enhance the overall readability of the component tree, ensuring a more maintainable and scalable codebase.`,
          `•Utilized Redux Toolkit for state management, enabling efficient handling of application-wide states and actions like allowing users 
          to add quotes to their favorite list and remove them, enhancing user customization and interaction`,
          `• Employed the Components design paradigm to create a highly reusable and modular code structure, facilitating seamless integration of new features and efficient maintenance.`,
          

        ],
    
      github: 'https://github.com/Samridhii1212/Tenzies-Game',
      live:'https://tenzies-game-sandy.vercel.app/'
    },

      {
        id: 5,
        title: 'Meme Creator',
        image: 'meme.png',
        date: 'May 2023-May 2023',
        technologies: ['React','Redux','HTML', 'CSS'],
        description: 'Developed a web-based InstantMeme Creator application that allows users to create click...',
        fulldescription:
          [
            `•Developed a web-based InstantMeme Creator application that allows users to create customized memes.`,
            `•Designed and implemented using HTML, CSS, and JavaScript and utilized Components design and Hooks
              to ensure re-usability and providing composable across the web application.`,
            `•Integrated a range of features allowing users to customize text, choose meme templates, and generate memes with ease.`,
          ],
        github:'https://github.com/Samridhii1212/Instant-MemeCreator',
        live:'https://instant-meme-creator-1ir1.vercel.app/'
      },
     
     
  ]

  const [selectedProject, setSelectedProject] = useState(null);

  function clicked(id)
  {
    let selectedprojectfromlist=projectsData.filter((project)=>project.id===id)
    setSelectedProject(selectedprojectfromlist)


  }
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
   <div className="Projects">
      <h1>Projects</h1>
      
      <div className="projects-container">
        {projectsData.map((project) => (
        <div 
        key={project.id} 
        onClick={()=>clicked(project.id)}
        className="project-box"
        >
        <ProjectBox 
        key={project.id} 
        project={project} 
        />
        </div>
        ))}
        {selectedProject !== null && <Detailedproject project={selectedProject} onClose={handleCloseModal} />}

      </div>
      
      
    </div>
  )
}

export default Project