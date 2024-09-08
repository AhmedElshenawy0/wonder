"use client";
import image1 from "@/public/images/logo2.png";
import image2 from "@/public/images/logo4.png";
import image3 from "@/public/images/logo5.png";
import image4 from "@/public/images/logo6.png";
import image5 from "@/public/images/logo7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./reviews.css";
import Image from "next/image";
const Reviews = () => {
  return (
    <div className="px-2  py-8 ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden text-2xl">
            "When something comes along that streamlines it all and makes
            ordering for that group of different interests easier, it’s worth"
          </p>
          <Image width={100} height={100} src={image1} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden text-2xl">
            "  as 500 items available for order across 28 distinct menus —
            many of which were developed with well-known chefs like Mr. Flay,"
          </p>
          <Image width={100} height={100} src={image2} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden  text-2xl">
            "Easily the best takeaway dinner we’ve had in years "
          </p>
          <Image width={100} height={100} src={image3} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden  text-2xl">
            "Wonder is winning the hearts of chefs."
          </p>{" "}
          <Image width={100} height={100} src={image5} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden text-2xl">
            "  as 500 items available for order across 28 distinct menus —
            many of which were developed with well-known chefs like Mr. Flay,"
          </p>
          <Image width={100} height={100} src={image4} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="max-w-[350px] md:max-w-[600px] md:max-h-[75px] truncate overflow-hidden  text-2xl">
            "Easily the best takeaway dinner we’ve had in years "
          </p>
          <Image width={100} height={100} src={image5} alt="logo" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Reviews;
