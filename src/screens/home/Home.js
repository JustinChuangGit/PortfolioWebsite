// components/Home.js

import React from 'react';
import Jumbotron from './components/jumbotronSection/Jumotron';
import SkillsSection from './components/skillsSection/SkillsSection';
import ProjectSection from './components/projectSection/ProjectSection';
import ExperiencesSection from './components/experiencesSection/ExperiencesSection';
import './Home.css';

function Home() {
  return (
    <div className="App">


      <Jumbotron />
      <SkillsSection />
      <ProjectSection />
      <ExperiencesSection />
    </div>
  );
}

export default Home;
