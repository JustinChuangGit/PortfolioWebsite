// components/Home.js

import React from 'react';
import Jumbotron from './components/Jumotron';
import SkillsSection from './components/SkillsSection';

function Home() {
  return (
    <div className="App">
      <header className="bg-primary text-white p-3">
        <h1>Welcome to My Website</h1>
      </header>

      <Jumbotron />
      <SkillsSection />
     


    </div>
  );
}

export default Home;
