"use client";

import image1 from "../../../public/images/06.jpg";
import image2 from "../../../public/images/018.jpg";
import image3 from "../../../public/images/03.jpg";
import image4 from "../../../public/images/02.jpg";
import image5 from "../../../public/images/011.jpg";
import image6 from "../../../public/images/012.jpg";
import image7 from "../../../public/images/013.jpg";
import image8 from "../../../public/images/014.jpg";
import image9 from "../../../public/images/015.jpg";
import image10 from "../../../public/images/016.jpg";
import image11 from "../../../public/images/000.jpg";
import image12 from "../../../public/images/018.jpg";
import image13 from "../../../public/images/019.jpg";
import image14 from "../../../public/images/020.jpg";

// import "swiper/swiper-bundle.css";
import "./bestSeller.css";
import { useEffect, useState } from "react";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "./Card";

const BestSeller = () => {
  const data = [
    {
      title: "الموديل",
      image: image1,
      price: "EGP 765",
      pair: "pairs 100",
    },

    {
      title: "الموديل",
      image: image3,
      price: "EGP 415",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image4,
      price: "EGP 720",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image5,
      price: "EGP 660",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image13,
      price: "EGP 900",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image6,
      price: "EGP 400",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image11,
      price: "EGP 780",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image9,
      price: "EGP 470",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image7,
      price: "EGP 499",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image14,
      price: "EGP 499",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image8,
      price: "EGP 635",
      pair: "pairs 100",
    },
    {
      title: "الموديل",
      image: image10,
      price: "EGP 710",
      pair: "pairs 100",
    },

    {
      title: "الموديل",
      image: image12,
      price: "EGP 510",
      pair: "pairs 100",
    },
  ];

  const FAST_DURATION = 30;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setReRender(!reRender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, reRender]);
  return (
    <div className="best-seller mt-20 lg:mt-8 lg:px-10 bg-[#fcf7ed] py-10">
      <div className="title text-center ">
        <h2 className="text-[26px] lg:text-4xl font-medium leading-8 pt-12 mb-5">
          منتجاتنا الأكثر مبيعات
        </h2>
      </div>
      <div className="wraper py-8 h-[400px] relative overflow-hidden ">
        <motion.div
          className="absolute left-0 flex gap-4"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...data, ...data].map((ele, idx) => (
            <Card key={idx} ele={ele} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BestSeller;
