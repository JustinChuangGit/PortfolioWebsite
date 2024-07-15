import React, { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SkillSection.css';
import Mechanical from './Mechanical';
import Electrical from './Electrical';
import Software from './Software';
import { AnimatePresence } from 'framer-motion';

import mechanicalSkillsLogo from '../../../../assets/images/mechanicalSkillsIcon.png';
import electricalSkillsLogo from '../../../../assets/images/ElectricalSkillsIcon.png';
import softwareSkillsLogo from '../../../../assets/images/SoftwareSkillsIcon.png';

const SkillsSection = () => {
  const skillComponents = {
    mechanical: <Mechanical />,
    electrical: <Electrical />,
    software: <Software />
  };

  const initialSkills = [
    { id: 'mechanical', name: 'Mechanical Engineering', color: '#e74c3c', icon: mechanicalSkillsLogo },
    { id: 'electrical', name: 'Electrical Engineering', color: '#3498db', icon: electricalSkillsLogo },
    { id: 'software', name: 'Software Engineering', color: '#2ecc71', icon: softwareSkillsLogo },
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
      setSelectedSkillId(null);
    } else {
      setSelectedSkillId(clickedSkill.id);
      if (isMobile) {
        const filteredSkills = skills.filter(skill => skill.id !== clickedSkill.id);
        filteredSkills.push(clickedSkill);
        setSkills(filteredSkills);
      }
    }
  };

  return (
    <Flipper flipKey={skills.map(skill => skill.id).join('')} spring={{ stiffness: 160, damping: 26, duration: 500 }}>
      <div className="container my-5">
        <h2 className="text-center skills-title">Skills</h2>
        <div className='skills-subtitle-container'>
          <p className="text-center skills-subtitle">With five years of experience in mechanical design, five years in software development, and four years in electrical design, I've honed a diverse skill set that drives my innovative projects!</p>
        </div>
        <div className='skills-container'>
          <div className="row">
            {skills.map(skill => (
              <Flipped key={skill.id} flipId={skill.id}>
                <div className="col-sm-12 col-md-4">
                  <div
                    className={`p-3 text-white skill-box mt-3 ${selectedSkillId === skill.id ? 'selected' : 'not-selected'}`}
                    onClick={() => handleSkillClick(skill)}
                    style={{ backgroundColor: selectedSkillId === skill.id ? skill.color : '#1a1a1a' }}
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
          <div className='dropdown-container w-100'>
            <AnimatePresence>
              {selectedSkillId && skillComponents[selectedSkillId]}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Flipper>
  );
};

export default SkillsSection;
