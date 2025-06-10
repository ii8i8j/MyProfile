"use client";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

//components
import Stairs from "./Stairs";
function StairTransition() {
  const pathname = usePathname()
  return (
    <>

      <AnimatePresence mode="wait">

        <div key={pathname}>
          <div className="w-screen h-screen  fixed top-0 left-0   flex pointer-events-none z-40">

            <Stairs />
          </div>
          <motion.div className="w-screen h-screen bg-primary fixed top-0 left-0 pointer-events-none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1, duration: .4, ease: "easeInOut" }}></motion.div>

        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition