"use client"
import { useSwiper } from "swiper/react"
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

function WorkSliderBtn({ containerStyles, btnStyles, iconStyles }) {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
        
            <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
                <GrFormPrevious className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <MdOutlineNavigateNext className={iconStyles} />
            </button>
        </div>
    )
}

export default WorkSliderBtn