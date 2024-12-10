'use client'

import React, { useState, useEffect } from "react";
// import { ShoppingCart, CircleUser } from "lucide-react";
import Link from "next/link";
import { CartButton } from "./mini-components/sheet-button";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  return (
    <header
      className={`text-white body-font font-chinese tracking-widest sticky z-10 top-0 bg-black transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <div className="rounded-full bg-orange-400 h-5 w-5"></div>
          <span className="ml-3 text-xl">
            Food <span className="text-orange-400">Fusion</span>
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-8 items-center text-base justify-center cursor-pointer">
          <Link href="/#home" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/#top-selling" className="hover:text-orange-400">
            Top Sellings
          </Link>
          <Link href="/About" className="hover:text-orange-400">
            About
          </Link>
          <Link href="/Menu" className="hover:text-orange-400">
            Menu
          </Link>
          <Link href="#" className="hover:text-orange-400">
            Contact Us
          </Link>
        </nav>
          <CartButton/>        
      </div>
    </header>
  );
};

export default Nav;
