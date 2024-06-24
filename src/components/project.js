import React from 'react'
import { useState } from 'react';
import ProjectBox from './ProjectBox';
import Detailedproject from './detailedproject';

function Project() {

  const projectsData = [
    {
      id: 1,
      title: 'Tenzies Game',
      image: 't.png',
      date: 'Jan 2024-Feb 2024',
      technologies: ['React', 'Redux', 'MongoDb', 'Express', 'Node JS', 'HTML', 'CSS'],
      description: 'Led the design and development of an engaging web-based game using a tech click...',
      fulldescription:
        [
          `•Developed an engaging Tenzies game using the MERN stack with JWT authentication.`,
          `•Created a leaderboard feature showcasing the top 25 users based on completion time..`,
          `•Implemented features such as dice freezing, time tracking, game completion and real-time dice rolling, using
          useState and useEffect hooks.`,
          `• Employed the Components design paradigm to create a highly reusable and modular code structure, facilitating seamless integration of new features and efficient maintenance.`,


        ],

      github: 'https://github.com/Samridhii1212/Tenzies-Game',
      live: 'https://tenzies-game-frontend.onrender.com/login'
    },
    {
      id: 2,
      title: 'Foodie-Express',
      image: 'foodie.png',
      date: 'Nov 2023-Dec 2023',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'MongoDB', 'Express', 'Node JS'],
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
      live: 'https://foodie-express-puce.vercel.app/login'

    },
    {
      id: 3,
      title: 'Meme Creator',
      image: 'meme.png',
      date: 'May 2023-May 2023',
      technologies: ['React', 'Redux', 'HTML', 'CSS'],
      description: 'Developed a web-based InstantMeme Creator application that allows users to create click...',
      fulldescription:
        [
          `•Developed a web-based InstantMeme Creator application that allows users to create customized memes.`,
          `•Designed and implemented using HTML, CSS, and JavaScript and utilized Components design and Hooks
              to ensure re-usability and providing composable across the web application.`,
          `•Integrated a range of features allowing users to customize text, choose meme templates, and generate memes with ease.`,
        ],
      github: 'https://github.com/Samridhii1212/Instant-MemeCreator',
      live: 'https://instant-meme-creator-1ir1.vercel.app/'
    },


    {
      id: 4,
      title: 'GitHubRepoViewer',
      image: 'repo.png',
      date: 'Jan 2024-Jan 2024',
      technologies: ['HTML', 'CSS', 'Javascript'],
      description: 'Developed a GitHub repository viewer with a focus on enhancing user experience click.....',
      fulldescription:
        [
          `•Developed a GitHub repository viewer with a focus on enhancing user experience through seamless pagination features.`,
          `•Leveraged HTML for content structure, CSS for styling, and JavaScript for dynamic and interactive functionalities.`,
          `•Implemented pagination to optimize the presentation of repository data and improve loading times.`,
          `•Incorporated GitHub API calls to fetch real-time repository information, demonstrating proficiency in working with external APIs.`,



        ],

      github: 'https://github.com/Samridhii1212/GitHubRepoViewer',
      live: 'https://git-hub-repo-viewer-lbi2.vercel.app/',
    },






  ]

  const [selectedProject, setSelectedProject] = useState(null);

  function clicked(id) {
    let selectedprojectfromlist = projectsData.filter((project) => project.id === id)
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
            onClick={() => clicked(project.id)}
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