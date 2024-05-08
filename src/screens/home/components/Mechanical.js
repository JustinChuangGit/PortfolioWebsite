import React from 'react';
import { motion } from 'framer-motion';
import { mechanical_background, skillDescriptions_delay, skillDescriptions_duration } from './constants';

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
      <div className='p-5 col-12'>
        <p>From a young age, I was immersed in the world of hands-on construction and engineering, thanks to my stepdad's career as a contractor. My early years were spent constructing wooden structures, which sparked a lifelong passion for building and mechanics. By the age of twelve, I was already dismantling and rebuilding small engines, from line trimmers to chainsaws.</p>
        <p>This mechanical curiosity escalated when I acquired a dirt bike in high school. After experiencing a complete engine failure, I seized the opportunity to deepen my understanding of motorcycle engines through a meticulous rebuild. This hands-on experience was invaluable, laying a solid foundation for my mechanical skills.</p>
        <p>My first internship was a turning point, introducing me to CAD technology. I quickly adapted, teaching myself SolidWorks and transforming abstract ideas into tangible models. Over the past four years, I've developed a robust skill set in CAD, covering Simulation, Motion Studies, Surfaces, and CAM, allowing me to expertly navigate from concept to execution. </p>

        <h4>CAD Software Experience</h4>
          <ul>
            <li>SolidWorks</li>
            <li>AutoCAD</li>
            <li>Fusion 360</li>
            <li>OnShape</li>
          </ul>
        
        <h4>Certifications</h4>
          <ul>
            <li>SolidWorks Professional (CSWP) - Surfacing</li>
            <li>SolidWorks Associate (CSWA) - Mechanical Design</li>
            <li>SolidWorks Associate (CSWA) - Simulation</li>
            <li>SolidWorks Associate (CSWA) - Additive Manufacturing</li>
          </ul>
      </div>
    </motion.div>
  );
};

export default Mechanical;
