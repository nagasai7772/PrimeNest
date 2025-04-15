import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.EstateLogo} alt="" className="h-20 w-20" />
          <p className="text-white mt-4">
            PrimeNest Realty is your trusted partner for buying, selling, and
            investing in properties across Hyderabad. We offer expert guidance,
            personalized service, and deep local market knowledge to help you
            make smart real estate decisions. Whether it's your dream home or a
            valuable investment, PrimeNest makes it simple and stress-free.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About US
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news,articles and resources sent to your inbox weekely
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white ">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright © 2025 PrimeNest. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
