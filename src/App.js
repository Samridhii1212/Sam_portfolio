import './App.css';
import Header from './components/header';
import Body from './components/body';
import Skills from './components/skills';
import Education from './components/education';
import Project from './components/project';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter as Router, Routes, Route, NavLink, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/education" element={<Education/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
