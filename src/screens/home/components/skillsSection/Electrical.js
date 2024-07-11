import React from 'react';
import { motion } from 'framer-motion';
import { electrical_background, skillDescriptions_delay, skillDescriptions_duration } from '../constants';
import './SkillSection.css';

import EagleLogo from '../../../../assets/images/EagleLogo.png';
import AltiumLogo from '../../../../assets/images/AltiumLogo.png';
import MicrocapLogo from '../../../../assets/images/microcapLogo.png';

const Electrical = () => {
  return (
    <motion.div
      className="electrical-description skill-description mt-3 col-12"
      initial={{ height: 0, borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}  // Start from height 0 with rounded top right corner
      animate={{ height: '100%', borderTopRightRadius: '0px', borderTopLeftRadius: '0px' }}  // Animate to full height and flatten the border radius
      exit={{ height: 0,
        borderTopRightRadius: '20px',  // On exit, collapse to height 0 and increase the border radius
        borderTopLeftRadius: '20px',
        transition: {
          duration: skillDescriptions_duration,
          delay: skillDescriptions_delay,
          staggerChildren: 0.1,
          staggerDirection: -1,
          borderTopRightRadius: { type: 'spring', stiffness: 100, damping: 10 },
          borderTopLeftRadius: { type: 'spring', stiffness: 100, damping: 10 },
          height: { type: 'tween', duration: skillDescriptions_duration, delay: skillDescriptions_delay + 0.2 }
        }
      }}  // Collapse to height 0 on exit

      // Customize the transition for both the entrance and exit
      transition={{
        borderTopRightRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        borderTopLeftRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        height: {
          type: 'tween', // Use a smooth tween transition
          duration: skillDescriptions_duration,  // Duration of the transition
          delay: skillDescriptions_delay  // Delay the start of the entrance animation
        }
      }}
      style={{ backgroundColor: electrical_background }}
    >
        <div className='custom-padding col-12 text-start'>
            <p>From a young age, I was fascinated by circuit boards. This passion grew during my internship, where I learned circuit and PCB design using Eagle software.</p>
            <p>My first project was designing and printing a board, marking my entry into PCB development. Since then, I've embraced PCB design projects, becoming skilled with a soldering iron and using an oscilloscope for troubleshooting.</p>
            <p>I integrate microcontrollers like Arduinos, ESP32s, ARM, and Raspberry Pis, enabling diverse applications. This hands-on experience has refined my technical skills and driven my pursuit of innovative electrical solutions.</p>
            <h4 className='text-center'>PCB Software Experience</h4>
              <div className='d-flex justify-content-center align-items-center flex-wrap mt-3'>
                <img src={EagleLogo} alt="Eagle Logo" className="logo-electrical" />
                <img src={AltiumLogo} alt="Altium Logo" className="logo-electrical" />
                <img src={MicrocapLogo} alt="Microcap Logo" className="logo-electrical" />
              </div>
        </div>
    </motion.div>
  );
};

export default Electrical;
