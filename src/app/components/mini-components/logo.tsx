"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      initial={{ rotate: 0 }}
      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Bowl */}
      <path d="M 15 55 C 15 85, 85 85, 85 55 Z" fill="url(#logoGradient)" filter="url(#glow)"/>
      
      {/* Chopsticks */}
      <motion.line 
        x1="10" y1="45" x2="90" y2="25" 
        stroke="#ffffff" strokeWidth="5" strokeLinecap="round" 
        initial={{ x2: 90, y2: 25 }}
        whileHover={{ x2: 95, y2: 20 }}
      />
      <motion.line 
        x1="10" y1="35" x2="90" y2="15" 
        stroke="#ffffff" strokeWidth="5" strokeLinecap="round" 
        initial={{ x2: 90, y2: 15 }}
        whileHover={{ x2: 95, y2: 10 }}
      />
      
      {/* Animated Steam / Essence */}
      <motion.path 
        d="M 40 50 Q 25 30, 50 5 Q 75 30, 60 50" 
        fill="none" 
        stroke="url(#logoGradient)" 
        strokeWidth="4" 
        strokeLinecap="round"
        filter="url(#glow)"
        animate={{ 
          d: [
            "M 40 50 Q 30 30, 50 10 Q 70 30, 60 50",
            "M 40 50 Q 45 25, 50 5 Q 55 25, 60 50",
            "M 40 50 Q 30 30, 50 10 Q 70 30, 60 50"
          ],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};
