import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./bestSeller.css"
const Card = ({ ele }: any) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      className=" relative overflow-hidden min-h-[300px] rounded-xl w-[300px] flex text-black flex-col justify-between"
    >
        <small className=" absolute top-2 right-2 bg-[#044123] text-[#ffffff] px-2 py-1 font-semibold" >جديد ! </small>
      <Image src={ele.image} alt="" className="image" />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" z-10 absolute cursor-pointer w-full h-full flex justify-center items-center"
          >
            <div className="absolute top-0 right-0 w-[100%] h-[100%] bg-black opacity-50 " />
            <motion.h2
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className=" z-20 bg-white text-black py-1 px-2 rounded-xl font-semibold"
            >
              click to show
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="docs px-2 flex justify-between w-full mt-2">
        <h3 className=" font-bold text-lg">{ele.title}</h3>
        <div className=" font-bold text-sm flex flex-col justify-center">
          <p>{ele.price}</p>
        </div>
      </div>
      <div className="px-2 flex justify-between w-full mt-1 mb-6">
        <p className="gap-[2px] text-[12px] font-light w-[150px]">
          تصميم عصري وأنيق
        </p>
        <div className="flex items-center w-full justify-end pl-1 gap-[2px] text-sm font-light">
          <p className=" text-sm">100 قطعة</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
