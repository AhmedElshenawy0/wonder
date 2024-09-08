"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import image1 from "../../../public/images/logonew1.jpg";
import image2 from "../../../public/images/logo2.png";
// import image3 from "../../../public/images/logo3.png";
import image4 from "../../../public/images/logo4.png";
import image5 from "../../../public/images/logo5.png";
import image6 from "../../../public/images/logo6.png";
import image7 from "../../../public/images/logo7.png";
import "swiper/swiper-bundle.css";

import "./clients.css";
import Image from "next/image";
const Clients = () => {
  const data = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image4 },
    { id: 4, image: image5 },
    { id: 5, image: image6 },
    { id: 6, image: image7 },
  ];
  return (
    <div className="client bg-[#fcf7ed] py-8">
      <h2 className="text-[26px] lg:text-4xl text-center font-medium leading-8 py-12">
        "شركاء النجاح"
      </h2>
      <div className="wrapper">
        {data.map((ele, idx) => (
          <div className={`item item${ele.id}`} key={idx}>
            <Image width={150} height={150} src={ele.image} alt="" />
          </div>
        ))}
      </div>
      {/* <Swiper
        className="border-b border-gray-400"
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map((ele,idx) => (
          <SwiperSlide key={ele.height} className="flex flex-col">
            <div>
              <Image width={100} height={100} src={ele} alt="" />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Clients;
