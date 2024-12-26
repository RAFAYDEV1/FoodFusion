import React from "react";
import { CarouselPlugin } from "./mini-components/carousel";

const TopSelling = () => {
  return (
    <section className="min-h-screen py-8 px-4 overflow-x-hidden" id="top-selling">
      <h1 className="text-center text-3xl md:text-4xl lg:text-6xl mb-8">
        Top <span className="text-orange-500">Selling</span> Items
      </h1>
      <CarouselPlugin />
    </section>
  );
};

export default TopSelling;