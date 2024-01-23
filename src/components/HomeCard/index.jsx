import React from 'react'
// react-icons
import { FaPagelines } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";

const HomeCrad = () => {
    return (
        <div className='grid mt-[19px] justify-center gap-[30px] px-[11px]  
        md:flex md:flex-wrap md:px-0 md:gap-[0px]
        lg:grid lg:grid-cols-3 lg:px-[10px] lg:ml-0 lg:gap-[20px] xl:px-[92px] xl:gap-[23px]'>

            {/* Card 1 */}

            <div className='bg-[#E0DBD4] justify-center px-[1.8em] pt-[3.1em] pb-[2.29em]
            md:w-[364px] md:mt-[19px] md:h-[439px] md:pt-[2.8em] md:px-[2.6em]
            lg:w-[324px] lg:h-[438px] lg:ml-0 lg:mt-[44px] xl:w-[370px] xl:mt-[6px] xl:h-[409px]  xl:px-[2.4em]'>
                <div className='flex justify-center'>
                    <p className='text-[70px]'><FaPagelines /></p>
                </div>
                <p className='text-[1.6em] mt-[28px] tracking-[0.05em] font-normal text-[#000005] md:text-[1.8em] md:tracking-[0.039em]'>Hello Guest</p>
                <div>
                    <p className='text-[16px] mt-[10px] leading-[1.9] tracking-[0.040em]'>Upper HTML Template contains different background images for pages. Please check <span className='text-[#3f97c9]'>Motion Template</span> if you want to see video backgrounds. Feel free to download and use web templates from templatemo.</p>
                </div>
            </div>

            {/* Card 2 */}

            <div className='bg-[#E0DBD4] justify-center px-[1.8em] pt-[2.3em] pb-[2.3em]
            md:w-[364px] md:mt-[19px] md:h-[409px]  md:ml-[20px]  md:pt-[2em] md:px-[2.4em]
            lg:w-[324px] lg:h-[438px]  lg:ml-0 lg:mt-[44px] xl:w-[370px]  xl:mt-[6px] xl:h-[409px]  xl:px-[2.4em]'>
                <div className='flex justify-center'>
                    <p className='text-[90px]'><FaBicycle /></p>
                </div>
                <p className='text-[1.6em] mt-[18px] tracking-[0.062em] font-normal text-[#000005] md:mt-[20px] md:text-[1.8em]'>Welcome!</p>
                <div>
                    <p className='text-[16px] mt-[10px] leading-[1.9] tracking-[0.040em]'>
                        There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!
                    </p>
                </div>
            </div>


            {/* mdCard */}
            <div className=' md:w-[365px] md:mt-[-90px] lg:hidden'></div>
            {/* Card 3 */}

            <div className='bg-[#E0DBD4] justify-center px-[1.8em] mt-[-30px] pt-[2.8em] pb-[2.3em]
            md:w-[365px] md:h-[407.9px] md:mt-[-2px] md:ml-[20px]  md:px-[2.36em]
            lg:w-[324px]  lg:h-[438px]  lg:ml-0 lg:mt-[44px] xl:w-[370px]  xl:mt-[6px] xl:h-[409px]  xl:px-[2.9em]'>
                <div className='flex justify-center'>
                    <p className='text-[70px]'><PiAirplaneTiltFill /></p>
                </div>
                <p className='text-[1.6em] mt-[32px] tracking-[0.05em] font-normal text-[#000005] md:mt-[27px] md:text-[1.8em]'>Stay relaxed</p>
                <div>
                    <p className='text-[16px] mt-[11px] leading-[1.9] tracking-[0.035em]'>
                        You can easily change icons in HTML codes by <span className='text-[#3f97c9]'> Font Awesome.</span> Praesent tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.
                    </p>
                </div>
            </div>
            <p className='md:h-[32px] lg:h-[0px] xl:h-[12px] opacity-0'>...........</p>
        </div>
    )
}

export default HomeCrad
