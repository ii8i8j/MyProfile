"use client";

import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDotnet, SiNextdotjs, SiTailwindcss } from "react-icons/si";

//about data 
const about = {
  title: "About me",
  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
  info:
    [
      {
        fieldName: "Name",
        fieldValue: "mohamed farjallah"
      },
      {
        fieldName: "Phone",
        fieldValue: "(+970) 59 753 2729"
      },
      {
        fieldName: "Experience",
        fieldValue: "3+ Years"
      },

      {
        fieldName: "Nationality",
        fieldValue: "Palestinian"
      },
      {
        fieldName: "Email",
        fieldValue: "mohamd.co75@gmail.com"
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available"
      },
      {
        fieldName: "Languages",
        fieldValue: "English, aribaic "
      },
    ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
  items:
    [
      {
        company: "GTC",
        opstion: "Full Stack Developer",
        duration: "2022 - Present"
      },
      {
        company: "GTC",
        opstion: "Front-End Developer Intern",
        duration: "Summer 2022"
      },
           {
        company: "GTC",
        opstion: "Front-End Developer Intern",
        duration: "Summer 2021"
      },
    ]
}

//education data 
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
  items:
    [
      {
        institution: "GTC",
        opstion: "Full Stack Web Development",
        duration: "2022 - 2024"
      },
    

    ]
}

//skills data
const skills = {
  title: "My skills",
  description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.',
  skillList:
    [
      {
        icon: <FaHtml5 />,
        name: "html 5"
      },
      {
        icon: <FaCss3 />,
        name: "css 3"
      },
      {
        icon: <FaJs />,
        name: "javascript"
      },
      {
        icon: <FaReact />,
        name: "react.js"
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js"
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css"
      },
      {
        icon: <SiDotnet />,
        name: "asp .net core "
      },

      {
        icon: <FaFigma />,
        name: "figma"
      },
    ]

}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
function page() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: .4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience  */}
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6  rounded-xl flex flex-col justify-center items-center px-10 lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.opstion}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full" >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6  rounded-xl flex flex-col justify-center items-center px-10 lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.opstion}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full" >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about  */}
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
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

export default page