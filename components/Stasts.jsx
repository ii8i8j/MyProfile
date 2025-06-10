"use client";

import CountUp from "react-countup";
const starts = [
    {
        num: 3,
        text: "Years of experience",
    },
    {
        num: 10,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    }
]
function Stasts() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {starts.map((item, index) => {
                        return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp end={item.num} delay={2} duration={5} className="text-4xl xl:text-6xl font-extrabold" />
                            <p className={`${item.text.length<15?"max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stasts