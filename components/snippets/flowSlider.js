import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import { Grid,Autoplay} from "swiper";
const FlowSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
        modules={[Grid]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="ml-10"><div className="card w-[400px]">fviofhvfiossdjiosdjfsdifj</div></SwiperSlide>
        <SwiperSlide >Slide 2</SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default FlowSlider;
