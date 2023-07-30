import React from 'react'
import './Teammates.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Abinesh from "../../img/abinesh.png";
import Avinesh from "../../img/avinesh.png";
import Nandha from "../../img/nandha.png";
import 'swiper/css'
const Teammates = () => {
  return (
    <div className="teammates" id='Teammates'>
        {/*headings*/}
        <span>My</span>
        <span>Teammates</span>

        {/*slider*/}
        <Swiper
            spaceBetween={30}
            slidesPerView={0}
            grabCursor={true}
            className='teammates-slider'
        >
            <SwiperSlide>
                <img src={Abinesh} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Avinesh} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Nandha} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Teammates