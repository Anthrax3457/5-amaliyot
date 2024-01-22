import React from 'react'

// react-icons
import { RiFacebookFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mt-[10px] md:mt-[55px] lg:mt-[22px] xl:mt-[20px]'>
      <div className='flex gap-[14px] justify-center'>
        <p className='p-4 bg-[#E0DBD4]'><RiFacebookFill /></p>
        <p className='p-4 bg-[#E0DBD4]'><FaGooglePlusG /></p>
        <p className='p-4 bg-[#E0DBD4]'><FaTwitter /></p>
        <p className='p-4 bg-[#E0DBD4]'><FaBehance /></p>
        <p className='p-4 bg-[#E0DBD4]'><FaLinkedinIn /> </p>
      </div>
      <div className='px-[10px] mt-[30px] md:px-[30px] lg:mt-[20px] '>
        <p className='bg-[#5F5C49] px-[12px] py-[5px] text-[1.8rem]  tracking-wide text-[white] md:w-[490px] md:text-[1.6rem] md:tracking-[1px] lg:tracking-[1.4px]'>Copyright © 2016 Your Company - Design: Templatemo</p>
      </div>
    </div>
  )
}

export default Footer