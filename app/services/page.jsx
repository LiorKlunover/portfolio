"use client";
import { BsArrowDownRight } from 'react-icons/bs';  // Corrected icon import
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "Building responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React.js. Focused on creating dynamic, interactive, and visually appealing web applications.",
    href: "#"
  },
  {
    num: '02',
    title: 'Java Development',
    description: "Developing robust and scalable applications using Java. Experienced in object-oriented programming, data structures, and algorithms. Familiar with building desktop applications and backend services.",
    href: "#"
  },
  {
    num: '03',
    title: 'C/C++ Development',
    description: "Proficient in C/C++ programming for systems and application development. Knowledgeable in memory management, pointers, and low-level programming. Able to develop efficient and performance-optimized code.",
    href: "#"
  },
  {
    num: '04',
    title: 'Python Development',
    description: "Creating versatile applications in Python, ranging from automation scripts to full-fledged applications. Skilled in using Python libraries for data analysis, machine learning, and web scraping.",
    href: "#"
  },
];


import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
              opacity: 1,
              transition: {duration: 1 , delay:2.4 , ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
          {services.map((service, index) => (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >

                {/* Top section */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500
                  ">
                    {service.num}
                  </div>
                  <Link href={service.href}>
                    <BsArrowDownRight/>
                  </Link>
                </div>

                {/* Title */}
                <h2>{service.title}</h2>

                {/* Description */}
                <p>{service.description}</p>

                {/* Border */}
                <div className="border-b border-white/20 w-full "></div>
              </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
