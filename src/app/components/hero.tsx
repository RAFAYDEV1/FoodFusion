"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const HeroBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dynamic Animated Mesh / Orbs specifically for hero */}
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/4 w-[120%] h-[150%] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-600/30 via-red-900/10 to-transparent rounded-[100%] mix-blend-screen filter blur-[80px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 100, -50, 0],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/30 rounded-full mix-blend-overlay filter blur-[100px]"
      />
      
      {/* Falling or Rising Sparks Effect */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-3 rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: typeof window !== 'undefined' ? window.innerHeight : 800,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden relative" id="home">
      <HeroBackground />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-wider font-bold">
          <motion.span variants={itemVariants} className="inline-block text-white drop-shadow-lg">Authentic</motion.span>{" "}
          <motion.span variants={itemVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.6)]">Chinese Food </motion.span>
          <br className="md:block hidden" />
          <motion.span variants={itemVariants} className="md:mt-2 mt-2 inline-block text-gray-200">in your city</motion.span>
        </h1>  
        
        <motion.div variants={itemVariants} className="mt-8">
          <Link href="/Menu">
            <Button className="relative overflow-hidden group text-black text-xl md:text-2xl lg:text-3xl px-8 py-6 bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all duration-300 transform hover:scale-105 border border-orange-400">
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
