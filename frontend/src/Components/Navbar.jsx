import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.EstateLogo} alt="" className="w-16" />
        <ul className="hidden md:flex gap-7 text-white  ">
          <a href="" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Reviews" className="cursor-pointer hover:text-gray-400">
            Reviews
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowMenu(true)}
          alt=""
          className={`md:hidden ${showMenu ? "none" : ""} w-7 cursor-pointer`}
        />
      </div>
      {/* MOBILE SECTION MENU */}
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-inherit transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            alt=""
            className="w-6 "
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
          <a
            href="#Header"
            className="px-4 rounded-full inline-block"
            onClick={() => setShowMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 rounded-full inline-block"
            onClick={() => setShowMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 rounded-full inline-block"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Reviews"
            className="px-4 rounded-full inline-block"
            onClick={() => setShowMenu(false)}
          >
            Reviews
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
