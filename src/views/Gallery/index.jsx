import React from "react";
// components
import GallleryCrad from "../../components/GalleryCrad/index";
// style
import "../Home/style.css";

const Gallery = () => {
  return (
    <div className="gallery__container site-container">
      <div
        className="grid justify-center items-center px-[30px] text-start mb-[30px] mt-[52px] md:pl-[43px] md:px-0 md:mt-[50px] 
      lg:mt-[77px] lg:pl-[3px] xl:mt-[20px] xl:px-0 xl:justify-start"
      >
        <p className="text-[1.6em] font-normal text-[white] leading-[1.2] tracking-[0.027em] md:text-[30px] md:tracking-[0.020em]">
          First Image Gallery
        </p>
        <div className="">
          <p className="text-[white] md:w-[90%] xl:w-[55%] xl:mt-[27px] lg:w-[67%] lg:tracking-[0.03em] text-[1em] leading-[1.9] md:tracking-[0.037em] tracking-[0.025em] font-light mt-[13px]">
            Curabitur quis tellus sed orci rhoncus fermentum. Praesent
            sollicitudin scelerisque nunc et vehicula. Sed ex magna, elementum
            ut volutpat ut, vehicula quis metus.
          </p>
        </div>
      </div>
      <GallleryCrad />
    </div>
  );
};

export default Gallery;
