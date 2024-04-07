import React from 'react'
import Header from './header'
import Skills from './skills';
import Education from './education';
import Project from './project';
import About from './about';
import Exp from './Exp';


function Home() {
  return (
    <div>
      <Header />
      <About />
      <Exp />
      <Skills />
      <Project />


      <Education />
    </div>
  )
}

export default Home