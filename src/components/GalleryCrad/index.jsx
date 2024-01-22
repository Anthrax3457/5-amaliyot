import React, { useState } from "react";
// image
import Img1 from "../../assets/images/tm-img-01.jpg";
import Img2 from "../../assets/images/tm-img-02.jpg";
import Img3 from "../../assets/images/tm-img-03.jpg";
import Img4 from "../../assets/images/tm-img-04.jpg";
// style
import "./style.css";
import { Link } from "react-router-dom";
import GalleryModal from "../GalleryModal";

const GallleryCrad = () => {
  const [openModal, setOpenModal] = useState(false);
  const data = [
    {
      img: Img1,
      title: "IMAGE ONE",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Img2,
      title: "IMAGE TWO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Img3,
      title: "IMAGE THREE",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      img: Img4,
      title: "IMAGE FOUR",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const images = [Img1, Img2, Img3, Img4];
  return (
    <div className="md:px-[46px] lg:px-2">
      <ul className={`gallery-card__list grid justify-center gap-[20px] md:grid-cols-2 lg:grid-cols-4  ${openModal ? 'block' : ''}`}>
        {data.map((item, index) => {
          return (
            <li key={index} className="gallery-card__item">
              <Link
                onClick={() => setOpenModal(true)}
                className="gallery-card__link relative block gallery-card__link  text-white w-[320px] h-[420px] lg:w-[230px] lg:h-[310px] xl:w-[315px] xl:h-[410px] text-center bg-[#17819c] overflow-hidden transition-all duration-300"
              >
                <div className="grid justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="gallery-card__img  h-[420px] lg:w-[300px] lg:h-[310px] xl:w-[315px] xl:h-[410px] w-full opacity-[0.8] scale-[1.15] transition-all duration-300"
                  />
                </div>
                <div className="gallery-card__content absolute top-0 left-0 z-10 p-[42.5px] w-full transition-all duration-300">
                  <div className="flex flex-col justify-center">
                    <h2 className="gallery-card__title mt-[5.30em] text-[white] tracking-[0.027em] text-[30px] justify-center mb-[14px] items-center lg:text-[1.6em] lg:w-[100%] xl:text-[2em] xl:mt-[2.6em] lg:font-light lg:text-center lg:mt-[0.8em] xl:w-[100%] ">
                      IMAGE ONE
                    </h2>
                    <div className="gallery-card__info p-[20px] mt-[16px] border-[1px] border-white text-[16px] invisible opacity-0 transition-all duration-300">
                      <p className="lg:w-[100px] xl:w-[100%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Modal slider */}
      <div className="grid justify-center">
        {openModal && (
          <div className="fixed block w-full h-full justify-center top-0 left-0 bottom-0 z-[10000]">
            {openModal && (
              <GalleryModal
                images={images}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </div>
        )}
      </div>
      <p className=" md:h-[22px] lg:h-[39px] xl:h-[37.5px]"></p>
    </div>
  );
};

export default GallleryCrad;
