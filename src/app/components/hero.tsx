import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-[85vh] flex flex-col items-center justify-center text-center" id="home">
      <h1 className="text-8xl tracking-wider">
        Authentic <span className="text-orange-500">Chinese Food </span>
        <br />
        in your city
      </h1>  
      <Link href="/Menu">
        <Button className="mt-4 text-black text-3xl bg-orange-500 hover:bg-orange-600 " >Order Now</Button>
      </Link>
    </section>
  );
};
export default Hero;
