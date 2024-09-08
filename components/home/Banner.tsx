"use client";
import { motion } from "framer-motion";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner flex md:justify-start justify-center items-center">
      <div className="text-white bg-[#0033225b] h-fit py-4 md:pr-5 md:pl-24 w-[100%] text-center md:text-start md:max-w-[60%]  top-[50%] right-0">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            ease: "easeOut",
            duration: 0.7,
          }}
          className="text-[1.3rem] lg:text-[2rem] font-semibold"
        >
          أول منصة أونلاين لبيع الملابس بالجملة
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            ease: "easeOut",
            duration: 0.7,
          }}
          className="text-[1rem] lg:text-[1.5rem] font-light mt-[-13px] lg:mt-[-20px] lg:mb-10 max-w-[650px]"
        >
          <br /> تشكيلة واسعه بجودة عالية وأسعار تنافسية وخدمة عملاء متميزة
          وسياسة إسترجاع سهلة
        </motion.p>
        <button
          className={`banner-button text-[18px] lg:text-xl z-30 font-medium`}
        >
          سجل الآن وابدأ التسوق
        </button>
      </div>
    </div>
  );
};

export default Banner;
