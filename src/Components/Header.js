import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../images/illustration-working.svg";


//HERO SECTION ANIMATION
const heroAnimation = {
  hidden: { opacity: 0 ,x:-300},
  visible: { opacity: 1 ,x:0, transition:{duration:1}},
  
};


const Header = () => {
  return (
    <motion.section variants={heroAnimation} initial="hidden" animate = "visible" className="w-screen border-4 border-yellow-400 md:h-[80vh]">
      <div className="flex flex-col-reverse items-center  ml-5 md:flex-row md:ml-20">
        <div className=" border-4 border-blue-600 heroText mt-5 mb-40 px-3 flex flex-col justify-center items-center md:items-start">
          <h1 className=" font-textFont text-4xl  text-gray-800 font-bold text-center md:text-left md:text-5xl">
            More than just shorter links
          </h1>
          <p className="text-center md:text-left md:text-xl">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>

          <motion.button className="bg-[#19c9cf] box-border px-3 py-2 mt-5 rounded-3xl font-bold text-white">
            Get started
          </motion.button>
        </div>
        <div className=" heroImage overflow-hidden">
          <motion.img 
            src={backgroundImage}
            className="-translate-x-[-25vw] md:-translate-x-[-10vw]"
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
