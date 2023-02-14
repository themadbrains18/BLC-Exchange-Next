import { useContext } from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Context from '../contexts/context';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Carousel = ({ play_cta, data, arrow }) => {
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
                    disableOnInteraction: true
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
                className={` ${mode === 'dark' ? '' : 'black-arrows'}`}

            >
                {

                    data.map((e, i) => {
                        console.log(e, "==========")
                        return (
                            <SwiperSlide key={i} className="!w-auto">
                                {
                                    e.arrText &&
                                    <p className='text-white h-[50px]'>{e.arrText}</p>
                                }
                                <div className='relative'>
                                    {
                                        e.image &&
                                        <Image src={e.image} alt="error" width={384} height={220} className='rounded-xl w-[254px] sm:w-[384px] border border-[#414747] mb-6 cursor-pointer ' />
                                    }
                                    {
                                        play_cta &&
                                        <Image className='absolute right-3 bottom-3' src="/assets/images/tutorial-play.png" width={30} height={22} alt="" />
                                    }
                                    {

                                        e.bigImage
                                        &&
                                        <Image src={e.bigImage} alt="error" width={620} height={342} className='rounded-xl border border-[#414747] mb-6 cursor-pointer ' />
                                    }
                                </div>

                                {
                                    e.heading &&
                                    <p className='info-12 text-2xl mb-4	w-[254px] sm:w-[384px]'>{e.heading}</p>
                                }
                                {
                                    e.subHeading &&
                                    <p className='info-14-16 w-[254px] sm:w-[384px]'>{e.subHeading}</p>
                                }


                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </>
    )
}

export default Carousel;