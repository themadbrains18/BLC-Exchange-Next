import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Carousel = ({ play_cta, data }) => {

    return (
        <>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        spaceBetween: 20,
                        slidesPerView: 1.2
                    },
                    // when window width is >= 768px
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                }}

            >
                {
                    data.map((e, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='relative rounded-xl border border-[#414747] mb-6 cursor-pointer '>
                                    {
                                        e.image &&
                                        <Image src={e.image} alt="error" width={384} height={220} />
                                    }
                                    {
                                        play_cta &&
                                        <Image className='absolute right-3 bottom-3' src="/assets/images/tutorial-play.png" width={30} height={22} />
                                    }

                                </div>
                                {
                                    e.heading &&
                                    <p className='info-12 text-2xl mb-4	'>{e.heading}</p>
                                }
                                {
                                    e.subHeading &&
                                    <p className='info-14-16'>{e.subHeading}</p>
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