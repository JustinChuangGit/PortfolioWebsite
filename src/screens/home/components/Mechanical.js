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
        <h3>Mechanical Engineering</h3>
        <p>Details about mechanical skills, projects, and experiences.</p>
      </div>
    </motion.div>
  );
};

export default Mechanical;
