"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Title } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    Title: 'frontend Development',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
    href: ""
  },
  {
    num: "02",
    Title: 'backend Development',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
    href: ""

  },
  {
    num: "03",
    Title: 'Ux/Ui Design',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.',
    href: ""

  },
 
]
import { motion } from "framer-motion";

function page() {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div className="grid grid-cols-1 gap-[60px] md:grid-cols-2" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: .4, ease: 'easeIn' } }}>
        {services.map((service, index) => {
          return <div key={index} className="flex flex-col flex-1 justify-center gap-6 group">
            <div className="w-full flex justify-between items-center  ">
              <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent duration-500 flex justify-center items-center hover:-rotate-45 ">
                <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
            </div>

            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent duration-500">{service.Title}</h2>
            <p className="text-white/60">{service.description}</p>
            <div className="border-b border-white/20 w-full"></div>
          </div>
        })}
      </motion.div>
    </div>
  </section>
}

export default page