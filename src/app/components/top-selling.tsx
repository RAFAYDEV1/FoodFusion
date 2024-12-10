import React from "react";
import { CarouselPlugin } from "./mini-components/carousel";

const TopSelling = () => {
  return (
    <section className="h-[100vh] " id="top-selling">
        <h1 className="text-center text-6xl mt-4 mb-8">Top Selling Items</h1>
        <CarouselPlugin/>
    </section>
  );
};

export default TopSelling;
 