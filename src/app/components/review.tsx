import React from "react";
import { MarqueeDemo } from "./mini-components/review";

const Review = () => {
  return (
    <section className="">
      <h1 className="text-center text-6xl uppercase mt-4 mb-8">
        What People Say About Us
      </h1>
      <MarqueeDemo />
    </section>
  );
};

export default Review;
