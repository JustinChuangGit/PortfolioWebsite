import React from 'react';
import { motion } from 'framer-motion';
import { mechanical_background, skillDescriptions_delay, skillDescriptions_duration } from '../constants';
import './SkillSection.css';

// Import the images
import SolidworksLogo from '../../../../assets/images/solidworksLogo.png';
import AutocadLogo from '../../../../assets/images/AutocadLogo.png';
import FusionLogo from '../../../../assets/images/FusionLogo.png';
import OnshapeLogo from '../../../../assets/images/OnshapeLogo.png';
import CadExperienceIcon from '../../../../assets/images/calendarIcon.png';
import CertificationsIcon from '../../../../assets/images/CertificationIcon.png';  



const Mechanical = () => {
  
  
  return (
    <motion.div
      className="mechanical-description skill-description mt-3 col-12"
      initial={{ height: 0, borderTopLeftRadius: '20px', borderTopRightRadius:'20px' }}  // Start from height 0 and rounded corners
      animate={{ height: 'auto', borderTopLeftRadius: '0px',borderTopRightRadius:'0px' }}  // Animate to natural height and no border radius
      exit={{
        height: 0,
        borderTopLeftRadius: '20px',  // On exit, collapse to height 0 and increase border radius
        borderTopRightRadius: '20px',  // On exit, collapse to height 0 and increase border radius

        transition: {
          duration: skillDescriptions_duration,
          delay: skillDescriptions_delay,
          staggerChildren: 0.1,
          staggerDirection: -1,
          borderTopLeftRadius: { type: 'spring', stiffness: 100, damping: 10 },
          borderTopRightRadius: { type: 'spring', stiffness: 100, damping: 10 },
          height: { type: 'tween', duration: skillDescriptions_duration, delay: skillDescriptions_delay + 0.2 }
        }
      }}
      transition={{
        borderTopLeftRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        borderTopRightRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        height: { type: 'tween', duration: skillDescriptions_duration, delay: skillDescriptions_delay }  // Delay the height animation
      }}
      style={{ backgroundColor: mechanical_background }}
    >
      <div className='custom-padding col-12 text-start'>
        <p>From a young age, I was drawn to construction and engineering, influenced by my stepdad's work as a contractor. Building wooden structures sparked my passion, and by twelve, I was already rebuilding small engines.</p>
        <p>This curiosity grew in high school when I rebuilt a dirt bike engine after a failure, solidifying my mechanical skills. My first internship introduced me to CAD technology, where I taught myself SolidWorks and turned ideas into models. Over four years, I've honed skills in CAD, Simulation, Motion Studies, 3D printing, and CAM, seamlessly navigating from concept to execution.</p>
        <div class="container mt-4">
          <div class="row">
              <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-start mb-3">
                  <div>
                      <div className='skills-category-header'>
                        <img src={CadExperienceIcon} alt="icon" className="icon" />
                        <h4>CAD Experience</h4>
                      </div>
                      <div className="software-logos justify-content-center align-items-center">
                        <img src={SolidworksLogo} alt="SolidWorks Logo" className="logo" />
                        <img src={AutocadLogo} alt="AutoCAD Logo" className="logo" />
                        <img src={FusionLogo} alt="Fusion 360 Logo" className="logo" />
                        <img src={OnshapeLogo} alt="OnShape Logo" className="logo" />
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-start">
                  <div>
                      <div className='skills-category-header'>
                        <img src={CertificationsIcon} alt="icon" className="icon" />
                        <h4>Certifications</h4>
                      </div>
                      <ul className='custom-list'>
                          <li>SolidWorks Professional (CSWP) - Surfacing</li>
                          <li>SolidWorks Associate (CSWA) - Mechanical Design</li>
                          <li>SolidWorks Associate (CSWA) - Simulation</li>
                          <li>SolidWorks Associate (CSWA) - Additive Manufacturing</li>
                      </ul>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-start">
                  <div>
                  <div className='skills-category-header'>
                        <span className="material-icons icon">build</span>
                        <h4>Fabrication Skills</h4>
                      </div>
                      <div className='skill-badges'>
                        <span className='badge'>TIG and MIG Welding</span>
                        <span className='badge'>Manual/CNC Mill</span>
                        <span className='badge'>Lathe</span>
                        <span className='badge'>3D Printing</span>
                        <span className='badge'>Plasma Cutting</span>
                        <span className='badge'>CNC Plasma/Laser Cutting</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Mechanical;
