import { motion } from "framer-motion"
//variable
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animation: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

//calculate the reverse index fot staggred delay 
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}
function Stairs() {
    return (
        <>
            {/* render 6 motion divs,each representing a step of the stairs 
            Each div will have the same animation defined by the stairsAnimation object .
            The delay for each div is calculated sinamicolly based on its reversed index ,
            creating a stoggered effect with decreasing delay for each subsequent step */}
            {[...Array(6)].map((_, index) => {
                console.log(index)
                return (<motion.div key={index}
                    variants={stairAnimation}
                    initial="initial"       
                    animate="animation"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1, }} className={`h-full w-full bg-white relative`} />
                )
            })}
            
        </>
    )
}

export default Stairs