import React from "react";
import { Facebook, Instagram, } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2 border-t-orange-400 ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <div className="rounded-full bg-orange-400 h-5 w-5"></div>
          <span className="ml-3 text-xl text-orange-400">Food Fusion</span>
        </a>
        <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Food Fusion
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center gap-8 sm:justify-start">
          <Link href={"#"}>
            <Facebook color="#ffa726"/>
          </Link>
          <Link href={"#"}>
            <Instagram color="#ffa726"/>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
