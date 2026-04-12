"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
      >
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-center mb-8">
          Fusions <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)]">Feast</span> <br/>
          <span className="font-semibold text-2xl md:text-3xl text-gray-300 mt-4 block">
            Authentic <span className="text-orange-400 italic font-mono tracking-widest text-xl md:text-2xl ml-2">Chinese Cuisine</span> in Karachi
          </span>
        </h1>      
        
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-justify text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 font-sans"
        >
          Established in 2024, <span className="font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Fusions Feast</span>{" "}
          brings the rich and vibrant flavors of authentic Chinese cuisine to the
          heart of Karachi, Pakistan. Nestled in a cozy yet contemporary setting,
          this restaurant is a haven for food enthusiasts seeking a genuine taste
          of China. 
          <br /><br />
          Fusions Feast&apos;s menu offers a diverse selection of dishes, from
          the fiery heat of Sichuan specialties to the delicate balance of
          Cantonese dim sum, all crafted by skilled chefs using fresh,
          high-quality ingredients. The restaurant&apos;s signature dishes include
          Peking Duck, Hot and Sour Soup, Kung Pao Chicken, and an array of
          noodles and dumplings, ensuring a delightful experience for every
          palate. 
          <br /><br />
          The ambiance combines traditional Chinese aesthetics with modern
          design, featuring elegant décor, warm lighting, and an inviting
          atmosphere perfect for families, couples, and friends. Fusions Feast also
          offers exceptional service, making it a must-visit spot for anyone
          craving an authentic culinary journey in Karachi. Whether you’re dining
          in or ordering for delivery, Fusions Feast promises a fusion of tradition
          and innovation, delivering the essence of Chinese cuisine straight to
          your plate.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
