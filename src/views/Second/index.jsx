import React from 'react'
import SecondCrad from '../../components/SecondCrad'

const Second = () => {
  return (
    <div
      className="grid justify-center items-center px-[28px] text-start mb-[30px] mt-[52px] md:pl-[20px] md:px-0 md:mt-[50px] 
      lg:mt-[77px] lg:pl-[7px] xl:mt-[22px] xl:px-[27px] xl:justify-start"
    >
      <p className="text-[1.6em] font-normal text-[white] leading-[1.2] tracking-[0.027em] md:text-[30px] md:tracking-[0.020em]">
        Second Gallery
      </p>
      <div className="">
        <p className="text-[white] md:w-[90%] w-[100%] xl:w-[55%] xl:mt-[27px] lg:w-[67%] lg:tracking-[0.04em] text-[1em] leading-[1.9] md:tracking-[0.037em] tracking-[0.035em]  font-light mt-[13px]">
          Aenean nulla lorem, laoreet eu nibh et, lacinia ullamcorper dui. Nullam ut tincidunt odio. Morbi accumsan diam vel enim cursus, in dapibus eros tristique.
        </p>
      </div>
      <SecondCrad />
    </div>
  )
}

export default Second