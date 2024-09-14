

"use client"
import React from "react";
import  Link  from "next/link";
import { motion } from "framer-motion";

const item = {
    hidden: { opacity: 0,y:100 },
    show: { opacity: 1 ,y:0},
  };
  
  const NavLink = motion(Link);
  
const ProjectLayout = ({name, description, date, demoLink}) => {
    return(
        <NavLink
        variants={item}
        href={demoLink}
        target="_blank"
        className="  text-sm md:text-base custom-bg flex items-center justify-between w-full relative 
         rounded-lg overflow-hidden  p-4 md:p-6  bg-background/20  border border-accent/30 border-solid 
               backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm">
            <div className="flex items-center justify-center space-x-2">
                <h2 className="text-foreground">{name}</h2>
                <p className="text-muted  hidden sm:inline-block">{description}</p>

            </div>
            <div className="  self-end flex-1 mb-2 bg-transparent border-b border-dashed border-muted "/>
            <p className=" text-muted sm:text-foreground">
                { new Date(date).toDateString()}
            </p>
        </NavLink>
    )
}
export default ProjectLayout