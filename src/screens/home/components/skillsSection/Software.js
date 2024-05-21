import React from 'react';
import { motion } from 'framer-motion';
import { skillDescriptions_delay, skillDescriptions_duration, software_background } from '../constants';

const Software = () => {
  return (
    <motion.div
      className="software-description skill-description mt-3 col-12"
      initial={{ height: 0, borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}  // Start from height 0 with rounded top right corner
      animate={{ height: '100%', borderTopRightRadius: '0px', borderTopLeftRadius: '0px' }}  // Animate to full height and flatten the border radius
      exit={{
        height: 0,
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
      }}
      transition={{
        borderTopRightRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        borderTopLeftRadius: { type: 'spring', stiffness: 100, damping: 10, delay: skillDescriptions_delay },  // Delay the border radius animation
        height: { type: 'tween', duration: skillDescriptions_duration, delay: skillDescriptions_delay }  // Delay the height animation
      }}
      style={{ backgroundColor: software_background }}
    >
        <div className='p-5 col-12'>
            <p>I began my journey into programming during my first year of undergrad, where I was introduced to Java. My interest in software took a significant leap during my first internship, which required me to program an Arduino for a data collection device I was developing. This experience led me to delve into embedded programming, exploring peripherals, memory management, and more, using C/C++ on embedded devices.</p>
            <p>Eager to expand my software skills, I undertook a challenging project at work to develop a web app for processing accelerometer data. I taught myself web app development, focusing on integrating a backend system with an engaging user interface. This newfound knowledge paved the way for me to explore mobile app development.</p>
            <p>Throughout my university career, I extensively used MATLAB for a variety of data processing and visualization tasks. My projects ranged from implementing particle filters and Extended Kalman Filter SLAM algorithms to conducting sophisticated audio and image processing. Each challenge not only sharpened my technical skills but also deepened my passion for software engineering.</p>
        
            <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 d-flex align-items-center justify-content-center">
                    <div>
                        <h4>Languages</h4>
                        <ul >
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Assembly</li>
                            <li>JavaScript</li>
                            <li>Dart</li>
                            <li>Matlab</li>
                            <li>SQL</li>
                            <li>Java</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-12 d-flex align-items-center justify-content-center">
                    <div>
                        <h4>Frameworks/Tools</h4>
                        <ul>
                            <li>Flutter</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Flask</li>
                            <li>Bootstrap</li>
                            <li>Tensorflow</li>
                            <li>Scikit-Learn</li>
                            <li>More...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        </div>
    </motion.div>
  );
};

export default Software;
