import React, { useState } from "react";
// image
import Img1 from '../../assets/images/tm-img-05.jpg'
import Img2 from '../../assets/images/tm-img-06.jpg'
import Img3 from '../../assets/images/tm-img-07.jpg'
import Img4 from '../../assets/images/tm-img-08.jpg'
import Img5 from '../../assets/images/tm-img-09.jpg'
import Img6 from '../../assets/images/tm-img-10.jpg'
// style
import "./style.css";
import { Link } from "react-router-dom";
import GalleryModal from "../GalleryModal";

const SecondCrad = () => {
    const [openModal, setOpenModal] = useState(false);
    const data = [
        {
            img: Img1,
            title: "PICTURE ONE",
            text: " Suspendisse id placerat risus. Mauris quis luctus risus.",
        },
        {
            img: Img2,
            title: "PICTURE TWO",
            text: "Maecenas purus sem, lobortis id odio in sapien.",
        },
        {
            img: Img3,
            title: "PICTURE THREE",
            text: " Suspendisse id placerat risus. Mauris quis luctus risus.",
        },
        {
            img: Img4,
            title: "PICTURE FOUR",
            text: "Maecenas purus sem, lobortis id odio in sapien.",
        },
        {
            img: Img5,
            title: "PICTURE FIVE",
            text: " Suspendisse id placerat risus. Mauris quis luctus risus.",
        },
        {
            img: Img6,
            title: "PICTURE SIX",
            text: "Maecenas purus sem, lobortis id odio in sapien.",
        },
    ];
    const images = [Img1, Img2, Img3, Img4,Img5, Img6,];
    return (
        <div className="lg:px-2 xl:px-0 w-[300px] md:w-[100%]">
            <ul className={`gallery-card__list grid md:gap-x-[20px] md:pr-[15px] md:px-0 justify-center mt-[27px] gap-y-[19px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:gap-x-6 xl:gap-y-6 ${openModal ? 'block' : ''}`}>
                {data.map((item, index) => {
                    return (
                        <li key={index} className="gallery-card__item">
                            <Link
                                onClick={() => setOpenModal(true)}
                                className="gallery-card__link relative block gallery-card__link  text-white w-[354px] h-[239px] lg:h-[219px] lg:w-[320px] xl:w-[100%] xl:h-[283px] text-center bg-[#17819c] overflow-hidden transition-all duration-300"
                            >
                                <div className="grid justify-center">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="gallery-card__img opacity-[0.8] scale-[1.15] transition-all duration-300"
                                    />
                                </div>
                                <div className="gallery-card__content absolute top-0 left-0 z-10 p-[42.5px] w-full transition-all duration-300">
                                    <div className="flex flex-col justify-center">
                                        <h2 className="gallery-card__title mt-[0.8em] text-[white] font-medium tracking-[0.020em] text-[2em] justify-center mb-[24px] items-center lg:text-[1.6em] lg:w-[100%] md:mt-[0.6em] xl:text-[2em] xl:mt-[1.3em] lg:font-light lg:text-center lg:mt-[0.6em] xl:w-[100%] ">
                                            {item.title}
                                        </h2>
                                        <div className="gallery-card__info p-[20px] mt-[16px] border-[1px] border-white text-[16px] invisible opacity-0 transition-all duration-300">
                                            <p className="lg:w-[100px] ] xl:w-[100%]">
                                                {item.text}         
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
            <p className="h-0 md:h-[22px] lg:h-11 xl:h-[32.5px] opacity-0">......</p>
        </div>
    );
}

export default SecondCrad;
