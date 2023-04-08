import React from 'react'
import logo from "../images/logo.svg"
import {GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

//NAVBAR ANIMATION

const navAnimation = {
  hidden:{y:-200,opacity:0,skew:10},
  visible:{y:0,opacity:1,skew:360,transition:{duration:1}}
}
const NavBar = () => {
  return (
   <motion.nav variants={navAnimation} initial= "hidden" animate="visible" className='flex justify-between p-5 md:px-20'>
  <img src={logo}/>
<GiHamburgerMenu className='text-3xl text-gray-600'/>


   </motion.nav>
  )
}

export default NavBar