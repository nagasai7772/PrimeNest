import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardstoShow, setCardstoshow] = useState(1);
  useEffect(() => {
    const updatecardsToshow = () => {
      if (window.innerWidth >= 1024) {
        setCardstoshow(projectsData.length);
      } else {
        setCardstoshow(1);
      }
    };
    updatecardsToshow();
    window.addEventListener("resize", updatecardsToshow);
    return () => window.removeEventListener("resize", updatecardsToshow);
  }, []);
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces,Building Legacies-Explore Our Portfolio
      </p>
      {/* SLIDER BUTTONS */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* PROJECTS SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardstoShow}%)`,
          }}
        >
          {
            // sm:w-1/4 means it will display 4 four images in 1-row
            projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4"
              >
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-96 mb-14 rounded"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl text-gray-800 font-semibold">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price}{" "}
                      <span className="px-1">{project.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
