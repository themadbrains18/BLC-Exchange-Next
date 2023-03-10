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

const Carousel = ({figcation, play_cta, data, arrow}) => {
  const { mode } = useContext(Context);
 

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={arrow}
        autoplay={{

          delay: 2500,
          disableOnInteraction: true,
        }}
      
        className={` ${mode === "dark" ? "" : "black-arrows"}`}
      >
        {data &&
          data.map((e, i) => {
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
                  {e.figcation && (
                    <p className='font-noto dark:text-white font-semibold text-[#090d11] mt-6 md:text-xl'>{e.figcation}</p>                    
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
        
      
                
      </Swiper>
    </>
  );
};

export default Carousel;
