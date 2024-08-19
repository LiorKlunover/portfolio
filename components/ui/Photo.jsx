"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, easeIn:
        "easeIn" }, 
        }}
      >
        {/* Photo */}
        <motion.div 
         initial={{ opacity: 0 }}
         animate={{
         opacity: 1,
         transition: { delay: 2.4, duration: 0.4, easeInOut:
         "easeIn" }, 
         }}
      
        className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute ">
          <Image
            src="/Lior.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div> 
        {/* circle */}
        <motion.svg
         className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
         fill="transparent"
         viewBox="0 0 506 506"
         xmlns="http://www.w3.org/2000/svg">
          <motion.circle 
                  cx= "270"
                  cy="260"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                  strokeDasharray: ["20 20 25 200", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                  }}
                  transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
