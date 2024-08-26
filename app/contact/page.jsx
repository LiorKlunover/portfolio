"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import{
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectTrigger,
oSelectValue}
from "@/components/ui/select";
import { icons } from "lucide-react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const contact_info = [
  {
    icons:<FaPhoneAlt/>,
    name: "Phone",
    value: "052-819-8460"
  },
  {
    icons:<FaEnvelope/>,
    name: "Email",
    value: "liorklunover@gmail.com"
  },
  {
    icons:<FaMapMarkerAlt/>,
    name: "Address",
    value: "Tel-Aviv"
  }
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
     <motion.section 
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {duration: 0.4, delay: 2.4, ease: "easeIn"},
      }}
      className=" py-6 xl:py-0">
      <div container mx-auto>
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Contact Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form>
              form
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1
            xl:order-none mb-8 xl:mb-0">
              info
          </div>
        </div>
      </div>
     </motion.section>
  )

}

export default Contact 