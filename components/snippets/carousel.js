import { useContext } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper";
import Context from "../contexts/context";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import GradientCard from "./gradientCard";

const Carousel = ({ play_cta, data, arrow,loop,left_pad,delay,card,speed}) => {
  const { mode } = useContext(Context);


  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        
        slidesOffsetBefore= {left_pad && left_pad}
        spaceBetween={20}
        navigation={arrow}
        // freeMode={true}
        // threshold={0}
        // edgeSwipeThreshold={0}
        // longSwipesMs={0}
        speed={speed && 5000}
        autoplay={{
            // speed:5000000,
          delay: delay ? 2500 :0,
          disableOnInteraction: true,
        }}
        // breakpoints={{
        //     // when window width is >= 640px
        //     320: {
        //         spaceBetween: 20,
        //         // slidesPerView: 1.5,

        //     },
        //     // when window width is >= 768px
        //     768: {
        //         spaceBetween: 20,
        //         // slidesPerView: 2,
        //     },
        //     768: {
        //         // slidesPerView: 3,
        //     },
        // }}
        loop={loop && loop}
        className={` ${mode === "dark" ? "" : "black-arrows"}`}
      >
        {data &&
          data.map((e, i) => {
            console.log(e.image);
            return (
              <SwiperSlide key={i} className="!w-auto">
                {e.arrText && (
                  <p className="text-white h-[50px]">{e.arrText}</p>
                )}
                <div className="relative">
                  {e.image && (
                    <Image
                      src={e.image}
                      alt="error"
                      width={384}
                      height={220}
                      className="rounded-xl w-[254px] sm:w-[384px] border border-[#414747] mb-6 cursor-pointer "
                    />
                  )}
                  {play_cta && (
                    <Image
                      className="absolute right-3 bottom-3"
                      src="/assets/images/tutorial-play.png"
                      width={30}
                      height={22}
                      alt=""
                    />
                  )}
                </div>
                {e.heading && (
                  <p className="info-12 text-2xl mb-4	w-[254px] sm:w-[384px]">
                    {e.heading}
                  </p>
                )}
                {e.subHeading && (
                  <p className="info-14-16 w-[254px] sm:w-[384px]">
                    {e.subHeading}
                  </p>
                )}
              </SwiperSlide>
            );
          })}
        
         {
            card &&<>
             <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <GradientCard />
          </SwiperSlide></>
         }
                
      </Swiper>
    </>
  );
};

export default Carousel;
