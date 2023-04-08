import React from 'react'
import logo from "../images/logo.svg"
import {GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
   <nav className='flex justify-between p-5 md:px-20'>
  <img src={logo}/>
<GiHamburgerMenu className='text-3xl text-gray-600'/>


   </nav>
  )
}

export default NavBar