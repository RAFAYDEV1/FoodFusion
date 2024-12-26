import React from "react";
import { MarqueeDemo } from "./mini-components/review";

const Review = () => {
  return (
    <section className="py-8 px-4 overflow-x-hidden">
      <h1 className="text-center text-3xl md:text-4xl lg:text-6xl uppercase mt-4 mb-8">
        What People <span className="text-orange-500">Say</span> About Us
      </h1>
      <MarqueeDemo />
    </section>
  );
};

export default Review;
