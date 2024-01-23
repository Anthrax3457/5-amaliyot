import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {

    const [active, setActive] = useState('hero')
    return (
        <div className='z-[1000000]'>
            <div data-aos="fade-down" data-aos-duration="1000" className='absolute bg-white  bg-opacity-[0.8]  ml-[-120px] mt-[60px] lg:flex lg:gap-[10px]'>
                <Link to='/'>
                    <p onClick={() => { setActive('hero') }} className={`tracking-wider ${active === 'hero' ? 'text-[#5394D6] xl:py-[42.3px] xw-[120px] grid justify-center py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[18.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>Home</p>
                </Link>
                <Link to='/first'>
                    <p onClick={() => { setActive('first') }} className={`tracking-wider ${active === 'first' ? 'text-[#5394D6] xl:py-[42.3px]  w-[120px] grid justify-center py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[18.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>First Gallery</p>
                </Link>
                <Link to='/second'>
                    <p onClick={() => { setActive('second') }} className={`tracking-wider ${active === 'second' ? 'text-[#5394D6] xl:py-[42.3px]  w-[120px] grid justify-center py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[18.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}> Second</p>
                </Link>
                <Link to='/third'>
                    <p onClick={() => { setActive('third') }} className={`tracking-wider ${active === 'third' ? 'text-[#5394D6] xl:py-[42.3px]  w-[120px] grid justify-center py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[18.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}>Third Grid</p>
                </Link>
                <Link to='/about'>
                    <p onClick={() => { setActive('about') }} className={`tracking-wider ${active === 'about' ? 'text-[#5394D6] xl:py-[42.3px] xl:w-[150px] w-[120px] grid justify-center py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center py-[18.1px] xl:text-[1.8rem]  xl:w-[150px] xl:py-[40.6px]'}`}> About Us</p>
                </Link>
                <Link to='/contact'>
                    <p onClick={() => { setActive('contact') }} className={`tracking-wider ${active === 'contact' ? 'text-[#5394D6] xl:py-[42.3px]  w-[120px] grid justify-center xl:ml-[4px] py-[18px] bg-white xl:text-[1.8rem]' : 'text-[#2c343b] w-[120px] grid justify-center xl:text-[1.8rem] xl:w-[150px] py-[18.1px] xl:py-[40.6px]'}`}>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Menu