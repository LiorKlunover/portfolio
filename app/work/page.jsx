'use client'
import {motion} from 'framer-motion'
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import{BsArrowUpRight,BsGithub} from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  } from "@/components/ui/tooltip";
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import Link from 'next/link'
import Image from 'next/image'
const projects = [
    { 
      num: "01",
      category: 'Secure Client Server File Transfer Protocol',
      title: 'Project 1',
      description: 'Developed a robust client-server system using C++ for the client and Python for the server, enabling secure file transfer and storage. The server-side application employs a MySQL Lite database for managing and storing incoming files from multiple clients. It effectively handles simultaneous client requests through multithreading, ensuring efficient and concurrent processing. To guarantee data security during transmission, implemented RSA encryption for file transfer, safeguarding file integrity and confidentiality throughout the process.',
      stack: [
        {name: 'Python', color: 'blue'}, 
        {name: 'C++', color: 'gray'}
        ],
        image: '/Secure-Client-Server-File-Transfer.jpg',
        live: "",
        github: "https://github.com/LiorKlunover/Secure-Client-Server-File-Transfer",
    },
    { 
      num: "02",
      category: 'Assembler - C',
      title: 'Project 2',
      description: 'Developed a powerful assembler program with over 2000 lines of code, translating high-level assembly-like code into machine code for a specialized processor. Integrated advanced features such as symbol resolution, instruction parsing, and memory management, dramatically boosting code translation efficiency and accuracy.',
      stack: [
        {name: 'C++', color: 'yellow'},
        ],
        image: '/Assembler.png',
        live: "",
        github: "https://github.com/LiorKlunover/Assembler",
    },
    { 
      num: "03",
      category: 'Microsoft Stock Forecasting with LSTMs',
      title: 'Project 3',
      description: 'Developed a recurrent neural network (RNN) model using TensorFlow and Keras to predict Microsoft (MSFT) stock prices. Utilized historical stock data from Yahoo Finance, implemented data preprocessing techniques including Min-Max scaling and lagged features, and optimized the model using Adam optimizer. ',
      stack: [
        {name:  'Python ', color: 'red'},
        {name: 'TensorFlow ', color: 'blue'},
        {name: 'Keras ', color: 'blue'},
        ],
        image: '/Microsoft-Stock-Forecasting-with-LSTMs.png',
        live: '',
        github: 'https://colab.research.google.com/drive/1P6SmI0fuRjIBNuLxZBN9wEgYZ9hE6uTb?usp=sharing',
    },


]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {duration: 1 , delay:2.4 , ease: "easeIn"},
        }} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
              xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px]"> 
                {/* outline num*/}
                <div className="text-8xl leading-none font-extrabold text-accent text-outline"> 
                {project.num}
                </div>
                  {/* project category*/}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.category} project
                  </h2> 
                  {/* project description*/}
                  <p className="text-white/60 ">
                    {project.description}
                  </p>
                  {/*stack*/}
                  <ul className="flex gap-4 mt-4">
                    {project.stack.map((item, index) =>{ 
                      return (
                        <li key={index} className="text-xl text-accent">
                          {item.name}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      )
                    })}
                  </ul>
                  {/*border */}
                  <div className="border-b border-white/20 w-1/2"></div>
                    {/*buttons */}
                    <div className= "flex items-center gap-4 ">
                      {/*Live button */}
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent "/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    
                     {/*Github button */}
                      <Link href={project.github}>
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      </div>
                  </div>
            
            </div>
            
            <div className="w-full xl:w-1/2">
              <Swiper 
                 spaceBetween={30}
                 slidesPerView={1}
                 className="xl:h-[520px] mb-12"
                 onSlideChange={handleSlideChange}
                 modules={[Navigation]}   
                 navigation 
              >            
                  {projects.map((project, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* Placeholder or actual image */}
                      <div>
                      <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                    )
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
  );
}

export default Work;