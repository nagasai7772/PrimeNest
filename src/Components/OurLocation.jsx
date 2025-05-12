import React, { useState } from 'react'
import { locationData } from '../assets/assets'
import { motion } from "framer-motion";
import { useEffect } from 'react';
const OurLocation = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
    const [cardstoShow, setCardstoshow] = useState(1);

    useEffect(() => {
        const updatecardsToshow = () => {
          if (window.innerWidth >= 1024) {
            setCardstoshow(locationData.length);
          } else {
            setCardstoshow(1);
          }
        };
        updatecardsToshow();
        window.addEventListener("resize", updatecardsToshow);
        return () => window.removeEventListener("resize", updatecardsToshow);
      }, []);
      const nextlocation = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % locationData.length);
      };
    
      const prevlocation= () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? locationData.length - 1 : prevIndex - 1
        );
      };
  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    id="WhyUs"
  >
    <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
      Why Us...?{" "}
      <span className="underline underline-offset-4 decoration-1 under font-light">
        Trusted Choice
      </span>
    </h1>
    <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
      Many customers near your area have chosen our homes!
    </p>
  
    {/* LOCATIONS SLIDER */}
    <div className="overflow-hidden">
      <div
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardstoShow}%)`,
        }}
        // Optional transform if adding slider buttons later
      >
        {locationData.map((project, index) => (
          <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
            <img
              src={project.image}
              alt=""
              className="w-full h-96 mb-14 rounded"
            />
            <div className="absolute left-0 right-0 bottom-5 flex justify-center rounded-full">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                <h2 className="text-xl text-gray-800 font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.location}{" "}
                  <span className="px-1">{project.description}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-2'>
        <p className='h-4 w-4 bg-orange-500 rounded-full hover:bg-blue-600 cursor-pointer' onClick={prevlocation}></p>
        <p className='h-4 w-4 bg-orange-500 rounded-full hover:bg-blue-600 cursor-pointer'onClick={nextlocation}></p>
      </div>
    </div>
  </motion.div>
  
  )

}

export default OurLocation