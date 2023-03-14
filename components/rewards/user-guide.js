import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import Carousel from '../snippets/carousel';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import userGuideImg1 from '../../public/assets/images/user-guide.jpg';
import userGuideImg2 from '../../public/assets/images/user-guide2.jpg';
import userGuideImg3 from '../../public/assets/images/user-guide3.jpg';
import userGuideImg4 from '../../public/assets/images/user-guide4.jpg';
import userGuideImg5 from '../../public/assets/images/user-guide5.jpg';


import Sound from '../../public/assets/images/sound.png';

let image = [
    {
        image:userGuideImg1,
        figcation:"How to start my crypto journey on BLC Exchange？"
    },    
    {
        image:userGuideImg2,
        figcation:"How to buy my first crypto？"
        
    },
    {
        image:userGuideImg3,
        figcation:"How to trade in the Spot Market？"
    },
    {
        image:userGuideImg4,
        figcation:"How to trade in the Futures Market？"
    },
    {
        image:userGuideImg5,
        figcation:"How to get started with Copy Trade？"
    }
] 
const UserGuide = () => {
    return (
        <>
            <section className="ai_zone py-10 dark:bg-black lg:pb-20">
                <div className='container'>
                    <div className='flex justify-between items-center mb-5 md:mb-9 lg:mb-12'>
                        <h2 className='font-noto-display text-[24px] md:text-[32px]'>User Guide</h2>
                        <p className='text-[14px] text-[#1e1e1e] hidden lg:block' >More</p>
                    </div>

                    <div>
                        <SwiperSlide>
                            <Carousel data={image} arrow={true} delay={true} PaginationCta={true}  />
                        </SwiperSlide>
                       
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserGuide