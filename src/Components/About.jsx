import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 ">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Start your next chapter with a bold move
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.Brand_Img_}
          alt=""
          className="w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 ">12+</p>
              <p className="">Years of Exellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">15+</p>
              <p className="">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">25+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">30+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg ">
            At PrimeNest, we’re redefining modern living. Our real estate
            ventures combine premium locations, intelligent design, and
            long-term value — delivering homes and investments that stand the
            test of time.
          </p>
          <button className="bg-zinc-800 text-white px-8 py-2 rounded hover:scale-105 transition-all duration-150" >Learn more </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
