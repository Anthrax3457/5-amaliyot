import React from 'react'

const About = () => {
  return (
    <div className='grid justify-center mt-[20px] items-center px-[10px] md:mt-[40px] lg:mt-[62px] xl:px-[85px] xl:mt-[14px]'>
      <div>
        <div className='bg-white  h-[425px] pt-[30px] pl-[30px] md:h-[230px] md:pt-[29px] md:pl-[40px] lg:h-[205px] xl:h-[240px] xl:pt-[25px]'>
          <p className='text-[1.6em] tracking-[0.07em] md:text-[1.8em]'>Lorem ipsum dolor</p>
          <p className='mt-[13px] w-[88%] leading-[1.92] text-[1em] tracking-[0.026em] md:mt-[9px] md:tracking-[0.035em] md:w-[94.8%] xl:mt-[51px] xl:w-[97%] xl:tracking-[0.030em] '>
            Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Vivamus non molestie leo, non tincidunt diam. Mauris sagittis elit in velit ultricies aliquet sed in magna. Pellentesque semper, est nec consequat viverra, sem augue tincidunt nisi, a posuere nisi sapien sed sapien. Nulla facilisi.
          </p>
        </div>
        <div className='grid md:flex mt-[30px] md:mt-12 md:gap-[11px] lg:gap-[29px]'>
          <div className='bg-white h-[300px] pt-[33px] pl-[30px] md:h-[328px] md:w-[370px] md:pt-[30px] md:pl-[42px] lg:h-[263px] lg:pt-[27px] lg:w-[487px] xl:w-[100%] xl:h-[250px] xl:pt-[29px] xl:pl-[40px]'>
            <p className='text-[1.6em] tracking-[0.05em] md:text-[1.8em] md:tracking-wider  xl:tracking-[0.049em]'>Nulla facilisi</p>
            <p className='mt-[10px] w-[88%] leading-[1.92] text-[1em] tracking-[0.026em] lg:w-[90%] lg:tracking-[0.025em] lg:mt-[10px] xl:mt-[20px] xl:w-[91.933%]'>
              Donec vitae bibendum est, et ultrices urna. Curabitur ac bibendum augue, a convallis mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices placerat arcu.
            </p>
          </div>
          <div className='bg-white mt-[30px] h-[330px] md:mt-0 pt-[30px] pl-[30px] md:h-[328px] md:w-[370px] md:pt-[30px] md:pl-[42px] lg:h-[263px] lg:pt-[27px] lg:w-[487px] xl:w-[100%] xl:h-[250px] xl:pt-[29px] xl:pl-[43px]'>
            <p className='text-[1.6em] tracking-[0.06em] md:text-[1.8em] md:tracking-wider xl:tracking-[0.06em]'>Aliquam sem sem</p>
            <p className='mt-[12px] w-[88%] leading-[1.92] text-[1em] tracking-[0.026em] md:mt-[11px] xl:mt-[20px] xl:w-[91.933%]'>
              Proin sagittis mauris dolor, vel efficitur lectus dictum nec. Sed ultrices placerat arcu, id malesuada metus cursus suscipit. Donex quis consectetur ligula. Proin accumsan eros id nisi porttitor, a facilisis quam cursus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About