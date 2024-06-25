import React, { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SkillSection.css';
import Mechanical from './Mechanical';
import Electrical from './Electrical';
import Software from './Software';
import { electrical_background, mechanical_background, software_background } from '../constants';
import { AnimatePresence } from 'framer-motion';

import mechanicalSkillsLogo from '../../../../assets/images/mechanicalSkillsIcon.png'
import electricalSkillsLogo from '../../../../assets/images/ElectricalSkillsIcon.png'
import softwareSkillsLogo from '../../../../assets/images/SoftwareSkillsIcon.png'

const SkillsSection = () => {
  const skillComponents = {
    mechanical: <Mechanical />,
    electrical: <Electrical />,
    software: <Software />
  };

  const initialSkills = [
    { id: 'mechanical', name: 'Mechanical Engineering', color: mechanical_background, icon: mechanicalSkillsLogo },
    { id: 'electrical', name: 'Electrical Engineering', color: electrical_background, icon: electricalSkillsLogo },
    { id: 'software', name: 'Software Engineering', color: software_background, icon: softwareSkillsLogo },
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleSkillClick = (clickedSkill) => {
    if (selectedSkillId === clickedSkill.id) {
      setSelectedSkillId(null); // Deselect if the same skill is clicked again
    } else {
      setSelectedSkillId(clickedSkill.id); // Select the new skill
      if (isMobile) {
        const filteredSkills = skills.filter(skill => skill.id !== clickedSkill.id);
        filteredSkills.push(clickedSkill); // Move the clicked skill to the end
        setSkills(filteredSkills);
      }
    }
  };

  return (
    <Flipper flipKey={skills.map(skill => skill.id).join('')} spring={{ stiffness: 160, damping: 26, duration: 500 }}>
      <div className="container my-5">
        <h2 className="text-center skills-title">Skills</h2>
        <div className='skills-subtitle-container'>
          <p className="text-center skills-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales at leo a porta. Suspendisse porta tellus lectus, iaculis vestibulum elit hendrerit ut...</p>
        </div>
        <div className="row">
          {skills.map(skill => (
            <Flipped key={skill.id} flipId={skill.id}>
              <div className="col-sm-12 col-md-4">
                <div
                  className={`p-3 text-white skill-box mt-3 ${selectedSkillId === skill.id ? 'selected' : 'not-selected'}`}
                  onClick={() => handleSkillClick(skill)}
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="icon-text-container">
                    <img src={skill.icon} alt="icon" className="title-icon" />
                    <span>{skill.name}</span>
                  </div>
                </div>
              </div>
            </Flipped>
          ))}
        </div>
        <AnimatePresence>
          {selectedSkillId && skillComponents[selectedSkillId]}
        </AnimatePresence>
      </div>
    </Flipper>
  );
};

export default SkillsSection;
