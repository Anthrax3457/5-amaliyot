import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// react-icons
import { IoClose } from "react-icons/io5";

// import required modules
import { Navigation } from "swiper/modules";

const GalleryModal = ({ images, openModal, setOpenModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <div className="gallery-modal">
    //   <Slider {...settings}>
    //     {images.map((image, index) => (
    //       <div
    //         key={index}
    //         style={{ display: "block" }}
    //         className="w-[444px] h-[671px] block"
    //       >
    //         <img src={image} alt="" className="w-full" />
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-[444px] h-[671px] bg-white">
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-[-25px] text-white text-[20px] right-0"
              >
                <IoClose />
              </button>
              <img src={image} alt="" />
              <span className="absolute bottom-[-25px]  right-0 text-[14px] text-white">{`${
                index + 1
              } of ${images.length}`}</span>
            </div>
            <div
              onClick={() => setOpenModal(false)}
              className="absolute w-full h-full top-0 left-0 bottom-0 block bg-black opacity-[0.8] z-[-1]"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GalleryModal;
