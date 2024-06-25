import React from 'react';
import { motion } from 'framer-motion';
import { skillDescriptions_delay, skillDescriptions_duration, software_background } from '../constants';
import './SkillSection.css';

import ASMLogo from '../../../../assets/images/AsmLogo.png';
import CLogo from '../../../../assets/images/CLogo.png';
import CppLogo from '../../../../assets/images/CPlusPlusLogo.png';
import CssLogo from '../../../../assets/images/CssLogo.png';
import DartLogo from '../../../../assets/images/DartLogo.png';
import JavaLogo from '../../../../assets/images/JavaLogo.png';
import JsLogo from '../../../../assets/images/JavaScriptLogo.png';
import MatlabLogo from '../../../../assets/images/MatlabLogo.png';
import PythonLogo from '../../../../assets/images/PythonLogo.png';

import BootstrapLogo from '../../../../assets/images/BootstrapLogo.png';
import FlaskLogo from '../../../../assets/images/FlaskLogo.png';
import FlutterLogo from '../../../../assets/images/FlutterLogo.png';
import NodeLogo from '../../../../assets/images/NodeJsLogo.png';
import ReactLogo from '../../../../assets/images/ReactLogo.png';
import ScikitLogo from '../../../../assets/images/SkLearnLogo.png';
import TensorflowLogo from '../../../../assets/images/TensorFlowLogo.png';


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
        <div className='p-5 col-12 text-start'>
            <p>I began my journey into programming during my first year of undergrad, where I was introduced to Java. My interest in software took a significant leap during my first internship, which required me to program an Arduino for a data collection device I was developing. This experience led me to delve into embedded programming, exploring peripherals, memory management, and more, using C/C++ on embedded devices.</p>
            <p>Eager to expand my software skills, I undertook a challenging project at work to develop a web app for processing accelerometer data. I taught myself web app development, focusing on integrating a backend system with an engaging user interface. This newfound knowledge paved the way for me to explore mobile app development.</p>
            <p>Throughout my university career, I extensively used MATLAB for a variety of data processing and visualization tasks. My projects ranged from implementing particle filters and Extended Kalman Filter SLAM algorithms to conducting sophisticated audio and image processing. Each challenge not only sharpened my technical skills but also deepened my passion for software engineering.</p>
        
            <div class="container">
            <div class="row mt-5">
                <div class="col-md-6 col-12 d-flex  justify-content-center">
                    <div>
                        <h4 className='text-center'>Languages</h4>
                        <div className='d-flex justify-content-center align-items-center flex-wrap mt-3'>
                            <img src={ASMLogo} alt="ASM Logo" className="logo-language" />
                            <img src={CLogo} alt="C Logo" className="logo-language" />
                            <img src={CppLogo} alt="C++ Logo" className="logo-language" />
                            <img src={CssLogo} alt="CSS Logo" className="logo-language" />
                            <img src={DartLogo} alt="Dart Logo" className="logo-language" />
                            <img src={JavaLogo} alt="Java Logo" className="logo-language" />
                            <img src={JsLogo} alt="JavaScript Logo" className="logo-language" />
                            <img src={MatlabLogo} alt="Matlab Logo" className="logo-language" />
                            <img src={PythonLogo} alt="Python Logo" className="logo-language" />

                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 d-flex  justify-content-center">
                    <div>
                        <h4 className='text-center'>Frameworks and Tools</h4>
                        <div className='d-flex justify-content-center align-items-center flex-wrap mt-3'>
                          <img src={BootstrapLogo} alt="Bootstrap Logo" className="logo-framework" />
                          <img src={FlaskLogo} alt="Flask Logo" className="logo-framework" />
                          <img src={FlutterLogo} alt="Flutter Logo" className="logo-framework" />
                          <img src={NodeLogo} alt="NodeJs Logo" className="logo-framework" />
                          <img src={ReactLogo} alt="React Logo" className="logo-framework" />
                          <img src={ScikitLogo} alt="Scikit Learn Logo" className="logo-framework" />
                          <img src={TensorflowLogo} alt="Tensorflow Logo" className="logo-framework" />

            
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
    </motion.div>
  );
};

export default Software;
