import React from 'react'
import ThirdCrad from '../../components/ThirdCard'

const Third = () => {
  return (
    <div
      className="grid justify-center items-center px-[15px] text-start mb-[30px] mt-[52px]  md:px-[55px] md:mt-[50px] 
      lg:mt-[77px] lg:px-[10px] xl:mt-[22px] xl:px-[27px] xl:justify-start"
    >
      <p className="text-[1.6em] font-normal text-[white] leading-[1.2] tracking-[0.040em] xl:tracking-[0.043em]  md:text-[30px] md:tracking-[0.020em]">
        Third Image Grid
      </p>
      <div className="">
        <p className="text-[white] md:w-[99%] w-[102%] xl:w-[54%] xl:mt-[25px] xl:tracking-[0.038em] lg:w-[70%] lg:tracking-[0.035em] text-[1em] leading-[1.9] md:tracking-[0.037em] tracking-[0.035em]  font-light mt-[13px]">
          Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Maecenas purus sem, lobortis id odio in, ultrices scelerisque sapien.
        </p>
      </div>
      <div className='grid justify-center'>
        <ThirdCrad />
      </div>
    </div>
  )
}

export default Third