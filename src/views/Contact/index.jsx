import React from 'react'
import { MdError } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className='md:flex md:justify-center md:mt-[20px] md:gap-[10px] lg:px-[12px] lg:gap-[30px] lg:mt-[45px] xl:mt-[12px] xl:gap-16 xl:px-[0rem]'>
        <div className='grid justify-center text-start pl-[38px] py-[30px] md:pt-[25px] md:pl-[27px] xl:pl-[30px] mt-[20px] lg:w-[480px] bg-opacity-[0.5] xl:w-[555px] lg:h-[610px] bg-white md:w-[365px]'>
          <p className='text-balck text-[1.6em] md:tracking-tighter'>Contact Us</p>
          <p className='w-[89%] md:w-[93%] xl:w-full leading-[1.9] tracking-wider pt-[10px] xl:pt-[0px]'>Praesent tempus dapibus odio nec elementum. Sed elementum est quis tortor faucibus, et molestie nibh finibus. Mauris condimentum ex vestibulum fringilla consectetur.</p>
          <div className='mt-[11.8px]  grid gap-y-6 lg:mt-[10.7px] xl:mt-[0px]'>
            <input className='w-[88%] md:w-[90%] lg:w-[95%]  placeholder:text-[black] placeholder:font-light border px-8 py-5' type="text" name="" id="" placeholder='Name' />
            <input className='w-[88%]  md:w-[90%] lg:w-[95%] placeholder:text-[black] placeholder:font-light border px-8 py-5' type="text" name="" id="" placeholder='Email' />
            <textarea className='w-[88%] md:w-[90%] lg:w-[95%] placeholder:text-[black] placeholder:font-light border px-8 py-5 h-[170px]' name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
            <div className='flex ml-[41%] lg:ml-[60%] xl:ml-[65%] xl:mt-0 mt-[2%]'>
              <button className='bg-[#0066CC] px-[50px] text-white text-[1.6em] py-[9px]'>Send</button>
            </div>
          </div>
        </div>
        <div className='h-[585px] md:h-[650px] bg-white bg-opacity-[0.5] mt-[20px] pt-[34px] md:pl-[33px] lg:w-[490px]  xl:w-[555px] md:px-0 md:pt-[10px] lg:pl-[38px] lg:px-0 lg:h-[615px] px-[40px] xl:px-[22px] md:w-[365px]'>
          <p className='pt-[17px] leading-[1.2] tracking-[-0.45px] md:tracking-[-0.90px] lg:w-[92%]  w-[88%] md:w-[99%] text-[1.6em]'>
            123 New Street 11000, San Francisco, CA
          </p>
          <div className='flex justify-center mt-[10px] ml-[-30px] xl:ml-[-10px] xl:mt-[23px]'>
            <div className=' h-[425px] md:w-[310px] bg-gray-200 md:h-[520px]  px-[15px] lg:h-[430px] lg:w-[430px]  xl:w-[500px]'>
              <div className='grid mt-[15px] pt-[50%] justify-center items-center text-center'>
                <div className='grid justify-center'>
                  <p className='text-[40px]'><MdError /></p>
                </div>
                <div className='grid justify-center'>
                  <p>
                    Xatolik yuz berdi
                  </p>
                  <p className=''>Bu sahifa Google Xaritalarni noto‘g‘ri yukladi. Texnik ma’lumotlar olish uchun JavaScript konsolini ko‘ring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <p className='lg:h-[20px] xl:h-[32px]'></p>
    </div>
  )
}

export default Contact