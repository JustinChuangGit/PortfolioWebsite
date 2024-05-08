import React from 'react';
import { motion } from 'framer-motion';
import { electrical_background, skillDescriptions_delay, skillDescriptions_duration } from './constants';

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
        <div className='p-5 col-12'>
            <h3>Electrical Engineering</h3>
            <p>Details about electrical skills, circuits, electronics, etc.</p>
        </div>
    </motion.div>
  );
};

export default Electrical;
