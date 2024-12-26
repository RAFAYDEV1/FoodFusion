"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CartButton } from "./mini-components/sheet-button";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`text-white body-font font-chinese tracking-widest sticky z-10 top-0 overflow-x-hidden bg-black transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link
            href="/#home"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <div className="rounded-full bg-orange-400 h-5 w-5"></div>
            <span className="ml-3 text-xl">
              Fusions <span className="text-orange-400">Feast</span>
            </span>
          </Link>
          
          <div className="md:hidden flex items-center gap-4">
            <CartButton />
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex w-full md:w-auto md:ml-auto md:mr-auto flex-col md:flex-row items-center gap-8 text-base justify-center cursor-pointer`}>
          <Link href="/#home" className="hover:text-orange-400 py-2 md:py-0">
            Home
          </Link>
          <Link href="/#top-selling" className="hover:text-orange-400 py-2 md:py-0">
            Top Sellings
          </Link>
          <Link href="/About" className="hover:text-orange-400 py-2 md:py-0">
            About
          </Link>
          <Link href="/Menu" className="hover:text-orange-400 py-2 md:py-0">
            Menu
          </Link>
          <Link href="/#form" className="hover:text-orange-400 py-2 md:py-0">
            Contact Us
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Nav;
