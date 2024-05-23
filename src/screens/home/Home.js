// components/Home.js

import React from 'react';
import Jumbotron from './components/jumbotronSection/Jumotron';
import SkillsSection from './components/skillsSection/SkillsSection';
import ProjectSection from './components/projectSection/ProjectSection';

function Home() {
  return (
    <div className="App">
      <header className="bg-primary text-white p-3">
        <h1>Welcome to My Website</h1>
      </header>

      <Jumbotron />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}

export default Home;
