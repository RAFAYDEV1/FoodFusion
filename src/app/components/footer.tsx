import React from "react";
import {Instagram, } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2 border-t-orange-400">
      <div className="container px-4 md:px-5 py-6 md:py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center">
          <a className="flex title-font font-medium items-center justify-center text-gray-900 mb-4 sm:mb-0">
            <div className="rounded-full bg-orange-400 h-4 md:h-5 w-4 md:w-5"></div>
            <span className="ml-2 md:ml-3 text-lg md:text-xl text-orange-400">Fusion Feast</span>
          </a>
          <p className="text-xs md:text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 text-center sm:text-left">
            © 2024 Fusions Feast
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-0">
          <Link 
            href="https://www.instagram.com/fusions_feast?igsh=MWFrNDJxaWd1aGRqcA==" 
            target="_blank"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" color="#ffa726"/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
