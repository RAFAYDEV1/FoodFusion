import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-x-hidden" id="home">
      <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-wider">
        Authentic <span className="text-orange-500">Chinese Food </span>
        <br className="md:block hidden" />
        <span className="md:mt-0 mt-2 inline-block">in your city</span>
      </h1>  
      <Link href="/Menu">
        <Button className="mt-6 text-black text-xl md:text-2xl lg:text-3xl px-6 py-3 bg-orange-500 hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
          Order Now
        </Button>
      </Link>
    </section>
  );
};
export default Hero;
