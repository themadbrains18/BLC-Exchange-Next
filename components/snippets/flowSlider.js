import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Autoplay } from "swiper";

import GradientCard from "./gradientCard";

const FlowSlider = () => {
 
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        // autoplay={{
        //   delay: 1,
        //   disableOnInteraction: false,
        // }}
        modules={[Grid]}
        loop={true}
        className=" auto_slider !w-full !h-full"
  
      >
        <SwiperSlide className="ml-10 h-[50%]  !w-auto">
      
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%]  !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>
        <SwiperSlide className="ml-10 h-[50%] !w-auto">
       <GradientCard/>
        </SwiperSlide>

      
      </Swiper>
    </>
  );
};

export default FlowSlider;
