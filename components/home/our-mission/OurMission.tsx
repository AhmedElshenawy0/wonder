"use client";
import { motion } from "framer-motion";
import ReadButton from "@/components/global/ReadButton";
import "./ourMission.css";

const OurMission = () => {
  return (
    <div className="mission-holder">
      <div 
      
       className="our-mission flex justify-center items-center text-center pt-40 flex-col gap-2">
        <motion.h2 
         initial={{ opacity: 0, x: 40 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.5, ease:'easeOut',
         duration: 0.7,
       }}
        className="text-white items-center  font-medium text-[2rem] leading-10">
          خطط لموسمك المقبل وإكتشف عروضنا الحصرية
        </motion.h2>
        <motion.p 
         initial={{ opacity: 0, x: 40 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.5, ease:'easeOut',
         duration: 0.7,
       }}
        className="text-white items-center  text-[16px] leading-6 ">
          إتخذ قرار الشراء المثالي بمساعدة كتالوجنا التفصيلي{" "}
        </motion.p>
        <ReadButton>إطلب كتالوجك الآن</ReadButton>
      </div>
    </div>
  );
};

export default OurMission;
