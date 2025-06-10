"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { BsArrow90DegRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";
const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Shopify ',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
        stack: [
            { name: "Next.js" },
            { name: "Tailwindcss" },
            { name: "typeScript" },
        ],
        image: '/assets/image.png',
        live: "https://birthblessing-git-main-m7mdk-fs-projects.vercel.app/",
        github: "https://github.com/ii8i8j",
    },

    {
        num: '02',
        category: 'fullstack',
        title: 'pharmacy',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "TypeScript" },
            { name: "Asp.Net Core api" },
        ],
        image: '/assets/image2.png',
        live: "https://home-page-six-theta.vercel.app/ar",
        github: "https://github.com/ii8i8j",
    },

    {
        num: '03',
        category: 'fullstack',
        title: 'online courses',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
        stack: [
            { name: "Html5" },
            { name: "Bootstrap" },
            { name: "JavaScript" },
            { name: "Asp.Net Core" },
        ],
        image: '/assets/image3.png',
        live: "",
        github: "https://github.com/ii8i8j",
    },
]
function Page() {
 const [project, setProject] = useState(projects[0]);

    const handleSliderChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        console.log(currentIndex);
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-1/2">
                            <div>
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                                    {project.num}
                                </div>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent duration-500 capitalize ">
                                {project.category} project
                            </h2>
                            <p className="text-white/60 ">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>
                            <div className="border border-white/20">
                            </div>

                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrow90DegRight className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent " />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12 "
                            onSlideChange={handleSliderChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full ">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                                        <div className="absolute w-full h-full top-0 bottom-0 z-10 bg-black/10"></div>
                                        <div className="w-full h-full relative">
                                            <Image src={project.image} fill className="object-contain" alt="" />
                                        </div>
                                        <div ></div>
                                    </div>
                                </SwiperSlide>
                            })}

                            <WorkSliderBtn btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center duration-300" containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Page