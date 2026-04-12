"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { CartButton } from "./mini-components/sheet-button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { Logo } from "./mini-components/logo";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Top Sellings", href: "/#top-selling" },
    { name: "About", href: "/About" },
    { name: "Menu", href: "/Menu" },
    { name: "Contact Us", href: "/#form" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="text-white body-font font-chinese tracking-widest sticky z-50 top-0 overflow-x-hidden bg-black/40 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative z-20">
        <div className="flex w-full md:w-auto justify-between items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0 group"
          >
            <Logo className="w-10 h-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
            <span className="ml-3 text-2xl group-hover:text-orange-400 transition-colors duration-300 font-bold tracking-widest">
              Fusions <span className="text-orange-500">Feast</span>
            </span>
          </Link>

          <div className="md:hidden flex items-center gap-4">
            <CartButton />
            <button onClick={toggleMenu} className="text-white hover:text-orange-400 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className={`${isMenuOpen ? "flex" : "hidden"
          } md:flex w-full md:w-auto md:ml-auto md:mr-auto flex-col md:flex-row items-center gap-8 text-base justify-center cursor-pointer`}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative py-2 md:py-0 group text-gray-200 hover:text-white transition-colors duration-300">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CartButton />
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
