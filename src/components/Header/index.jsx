import React, { useState } from 'react'

// react-icons
import { IoMdFlash } from "react-icons/io";
// import { LuMenu } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Menu from '../menu';


const Header = () => {
    const [open, setOpen] = useState(false)

    const [active, setActive] = useState('hero')
    return (
        <section className='flex justify-center'>
            <div className='flex w-[95%] mt-[10px] bg-[#E0DBD4] py-[5px] px-5 justify-between 
            md:w-[97.5%] lg:px-[30px] lg:w-[97.2%] lg:py-[0px]
            xl:mt-[31px] xl:w-[96.8%]'>
                <div className='flex justify-center gap-[160px] items-center
            md:gap-[551px] lg:gap-[77px] xl:gap-[155px]'>
                    <div className='flex justify-center gap-[18px] items-center xl:gap-[10px]'>
                        <p className='text-[30px] align-middle xl:text-[45px]'><IoMdFlash /></p>
                        <p className='text-[25px] align-middle leading-[1.1] -tracking-[0.15rem] font-extralight uppercase lg:-tracking-[0.099em] md:-tracking-[0.05em] xl:text-[35px] xl:-tracking-[0.06em] '>Upper</p>
                    </div>
                    {open && <div onClick={() => { setOpen(false) }} className='py-[12px] px-[15px] bg-[white] 
                    md:px-[15.2px] lg:hidden'>
                        <CiMenuBurger />
                    </div>}
                    {!open && <div onClick={() => { setOpen(true) }} className='py-[12px] px-[15px] bg-[white] 
                    md:px-[15.2px] lg:hidden'>
                        <CiMenuBurger />
                    </div>}
                    <div className='hidden lg:flex lg:gap-[10px]'>
                        <Link to='/'>
                            <p onClick={() => { setActive('hero') }} className={`tracking-wider ${active === 'hero' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[28.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>Home</p>
                        </Link>
                        <Link to='/first'>
                            <p onClick={() => { setActive('first') }} className={`tracking-wider ${active === 'first' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[28.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>First Gallery</p>
                        </Link>
                        <Link to='/second'>
                            <p onClick={() => { setActive('second') }} className={`tracking-wider ${active === 'second' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[28.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}> Second</p>
                        </Link>
                        <Link to='/third'>
                            <p onClick={() => { setActive('third') }} className={`tracking-wider ${active === 'third' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[28.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>Third Grid</p>
                        </Link>
                        <Link to='/about'>
                            <p onClick={() => { setActive('about') }} className={`tracking-wider ${active === 'about' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[28.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}> About Us</p>
                        </Link>
                        <Link to='/contact'>
                            <p onClick={() => { setActive('contact') }} className={`tracking-wider ${active === 'contact' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[132px] grid justify-center xl:ml-[4px] py-[28px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center xl:text-[1.8rem] xl:w-[150px] py-[28.1px] xl:py-[40.6px]'}`}>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
            {open && <Menu />}
        </section>
    )
}

export default Header