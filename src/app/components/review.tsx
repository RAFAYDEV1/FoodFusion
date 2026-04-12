"use client";

import React from "react";
import { MarqueeDemo } from "./mini-components/review";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="py-16 px-4 overflow-x-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl uppercase mb-12 font-bold tracking-wide">
          What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)]">Say</span> About Us
        </h1>
        <MarqueeDemo />
      </motion.div>
    </section>
  );
};

export default Review;
