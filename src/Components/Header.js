import React from "react";
import backgroundImage from "../images/illustration-working.svg";
const Header = () => {
  return (
    <section className=" h-[90vh] flex">

<div className="flex flex-col-reverse items-center  ml-5 md:flex-row md:ml-20">
<div className="heroText mt-5 flex flex-col justify-center items-center md:items-start">
  <h1 className=" font-textFont text-4xl  text-gray-800 font-bold text-center md:text-left md:text-5xl">
          More than just shorter links
        </h1>
        <p className="text-center md:text-left md:text-xl">Build your brand's recognition and get detailed insights on how your links are performing</p>

        <button className="bg-[#19c9cf] box-border px-3 py-2 mt-5 rounded-3xl font-bold text-white">Get started</button>
        </div>
        <div className=" heroImage overflow-hidden">
        <img src={backgroundImage} className="-translate-x-[-25vw] md:-translate-x-[-10vw]" alt="" />
     

    
       

      </div>
      </div>
    </section>
  );
};

export default Header;
