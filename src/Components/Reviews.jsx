import React from "react";
import { assets, reviewsData } from "../assets/assets";
import { motion } from "framer-motion";
const Reviews = () => {
  return (
    <motion.div
    initial={{opacity:0,x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Reviews"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Reviews
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        True Stories from Families Who Found Their Forever Home{" "}
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 items-center ">
        {reviewsData.map((reviewer, index) => {
          return (
            <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center cursor-pointer hover:translate-y-3 duration-500 transition-all">
              <img
                src={reviewer.image}
                alt={reviewer.alt}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 "
              />
              <h2 className="text-xl text-gray-700 font-medium">{reviewer.name}</h2>
              <p className="text-gray-500 mb-4 text-sm">{reviewer.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {
                  Array.from({length:reviewer.rating},(item,index)=>(
                    <img src={assets.star_icon} alt="" key={index}/>
                  ))
                }
              </div>
              <p className="text-gray-600">{reviewer.text}</p>

            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Reviews;
