import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {motion} from 'framer-motion'
import Header_img1 from "/Header_img1.jpg";
import Header_img2 from "/Header_img2.jpeg";
import Header_img3 from "/Header_img3.jpg";

const Header = () => {
  const Header_images = [Header_img1, Header_img2, Header_img3];
  const [currentImg, setCurrentImg] = useState(0);
  const colours=['#FFA500	','#FF4500','#AFEEEE']
  const [color,setColors]=useState('')
  
  
  useEffect(() => {
    const setTiming = setInterval(() => {
      setCurrentImg((prevIndex) => (prevIndex + 1) % Header_images.length);
    }, 2000);
    return () => clearInterval(setTiming);
  }, []);
  useEffect(()=>
  {
    const setcolourTiming=setInterval(() => {
      setColors((prevIndex)=>(prevIndex+1)% colours.length)
      
    }, 2000);
    return ()=>clearInterval(setcolourTiming)

  },[])
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-ceneter flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${Header_images[currentImg]})` }}
      id="Header"
    >
      {/* <Navbar /> */}
      <motion.div
       initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
       className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className={`text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl  pt-20 font-thin`} style={{color:colours[color]}}>
          Let’s turn your dream house into your address
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded hover:bg-orange-400  transition-all duration-500 ">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded hover:bg-emerald-500 transition-all duration-500 ">
            ContactUs
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
