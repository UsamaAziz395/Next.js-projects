'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function MarqueeRow({ 
  children, 
  direction = 'left',
  speed = 50,
  pauseOnHover = true
}) {
  const isLeft = direction === 'left';
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative overflow-hidden w-full py-4">
      
      {/* Gradient Fade Left */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#1a1c23] to-transparent z-10 pointer-events-none"></div>
      
      {/* Gradient Fade Right */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#1a1c23] to-transparent z-10 pointer-events-none"></div>

      {/* Animated Row */}
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: isLeft ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
        onHoverStart={() => pauseOnHover && setIsPaused(true)}
        onHoverEnd={() => pauseOnHover && setIsPaused(false)}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}