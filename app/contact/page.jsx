
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem, Item } from '@radix-ui/react-select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+970) 597 532 729"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamd.co75@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Palestain"
  },
]

import { motion } from "framer-motion"
export default function page() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6" >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent ">Lets work together</h3>
              <p className="text-white/60">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibysdam, sunt explicabo inventore.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />

              </div>
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li className="flex gap-6 items-center " key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1 ">
                    <p className="text-white/60 ">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
