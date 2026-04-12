"use client";

import React from "react";
import { CarouselPlugin } from "./mini-components/carousel";
import { motion } from "framer-motion";

const TopSelling = () => {
  return (
    <section className="min-h-screen py-16 px-4 overflow-x-hidden relative" id="top-selling">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl mb-12 font-bold tracking-wide">
          Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_0_10px_rgba(234,88,12,0.8)]">Selling</span> Items
        </h1>
        <CarouselPlugin />
      </motion.div>
    </section>
  );
};

export default TopSelling;