"use client";
import Link from "next/link";
import { FaHtml5, FaCss3, FaReact, FaPython, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";

import { 

  SiTailwindcss,
  SiNextDotJs,
  
} from "react-icons/si";


const about = {
  title: "About Me",
  description: "I am a full-stack developer with a strong passion for web development. My experience includes building dynamic and responsive web applications using technologies like React, Node.js, and PostgreSQL. In addition to web development, I am proficient in Python and Java, which allows me to work across different areas of software development. I am currently seeking opportunities to contribute to exciting projects that will challenge my skills and help me grow professionally.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lior Klunover",
    },
    {
      fieldName: "Email",
      fieldValue: "liorklunover@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "0528198460",
    },
    {
      fieldName: "Address",
      fieldValue: "Tel Aviv",
    },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "I have hands-on experience in network operations and web development, with a focus on maintaining robust infrastructure and creating reliable software solutions.",
  items: [
    {
      title: "NOC Engineer",
      company: "AccessFintech",
      date: "2023 - Present",
      description: "In this role, I am responsible for monitoring and maintaining the company's network infrastructure, ensuring uptime and reliability across all systems. I work closely with other teams to troubleshoot issues and implement improvements to network performance.",
    },
    {
      title: "NOC Engineer",
      company: "Hot-Mobile",
      date: "2021 - 2023",
      description: "At Hot-Mobile, I was tasked with overseeing the network operations, addressing technical issues, and maintaining the overall health of the company's communication systems. This role honed my ability to work under pressure and handle critical system outages efficiently.",
    },
  ]
};

const education = {
  icon: '/assets/resume/badge.svg',
  title: "My Education",
  description: "I hold a Bachelor's degree in Computer Science, which provided me with a solid foundation in software development, algorithms, and system design.",
  items: [
    {
      title: "Bachelor's Degree",
      school: "The Open University",
      date: "2021 - 2024",
      field : "Computer Science",
    },
    {
      title: "High School Diploma",
      school: "Maayan-Shahar High School",
      date: "2018 - 2021",
      field : "Computer Science and Physics",
   
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "Throughout my academic and professional journey, I have developed a versatile skill set in both frontend and backend technologies, enabling me to build full-stack applications.",
  skillList: [
     { icon: <FaReact/>, name: "React" },
     { icon: <FaNodeJs/>, name: "Node.js" },
     { icon: <FaDatabase/>, name: "PostgreSQL" }, 
     { icon: <FaPython/>, name: "Python" },
     { icon: <FaJava/>, name: "Java" },
     { icon: <FaHtml5/>, name: "HTML" },
     { icon: <FaCss3/>, name: "CSS" },
     { icon: <SiTailwindcss/>, name: "Tailwind CSS" },
  ]
};


import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  } from "@/components/ui/tooltip";
import {motion} from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
  
const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.5,
              ease: "easeIn" ,
            }
        }}      
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    
    >
      <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value= "skills">Skills</TabsTrigger>
              <TabsTrigger value = "about">About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className="min-h-[70vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-fuLL">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                  <ul className ="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}  
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                            <span className="text-accent">{item.date}</span>
                              <h3 className="text-xl max-w-[200px] min-h-[60px] text-center lg:text-left">
                                {item.title}
                              </h3>
                            <div className="flex items-center gap-3">
                              {/*dot */}
                              <span className="w-[6px] h-[6px] bg-accent rounded-full">

                              </span>
                              <p className="text-white/60">
                                {item.company}
                              </p>
                            </div>
                        </li>
                      )
                    })}
                  </ul>
              </ScrollArea>
                
            </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-fuLL h-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                  <ul className ="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index}  
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                            <span className="text-accent">{item.date}</span>
                              
                          
                              <h3>
                                {item.field}
                              </h3>
                            <div className="flex items-center gap-3">
                              {/*dot */}
                              <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                              <h3 className="text-xl max-w-[200px] min-h-[60px] text-center lg:text-left">
                                {item.school}
                              </h3>
                            </div>
                        </li>
                      )
                    })}
                  </ul>
              </ScrollArea>
                
            </div>
            </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li 
                          key={index}  
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[158px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent
                                    transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize text-center ">
                                    {skill.name}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-fuLL">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">
                {about.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="mr-2">
                      {item.fieldName}: 
                      </span>
                      <span>
                        {item.fieldValue}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>

            </div>
          </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume