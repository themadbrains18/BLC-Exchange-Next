import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../snippets/carousel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


import carousel1 from '../../public/assets/images/ali-zone1.jpg';
import carousel2 from '../../public/assets/images/ali-zone2.png';
import carousel3 from '../../public/assets/images/ali-zone3.png';
import carousel4 from '../../public/assets/images/ali-zone4.png';
import carousel5 from '../../public/assets/images/ali-zone5.png';
import Sound from '../../public/assets/images/sound.png';

let images = [carousel1,carousel2,carousel3,carousel4,carousel5];

let arrText = [
    "Initial Listing With $BLUR - Total of $180,000+ BLUR and BGB, 5 BTC, and Messi Signed Jersey To Be Won!",
    "Bitget Joins the VerifyVASP Alliance",
    "Bitget Listed CryptoAI (CAI) and Botto (BOTTO) in the AI Zone - Share $20,000 Worth of Rewards!"
]


const Aizone = () => {
  return (
    <section className="ai_zone bg-black-v-5 py-[80px] md:py-[120px]">
        <div className="container">
            <div className="flex gap-5 mb-8 h-[74px] items-start md:h-[24px] overflow-hidden">
                <Image src={Sound} alt="error" width={24} height={24} />
                <Swiper
                    modules={[Autoplay]}
                    className='!m-0'
                    slidesPerView={1}
                    autoplay={{
                        delay:2500
                    }}
                    direction="vertical"
                >
                    {
                        arrText.map((e,i)=>{
                            return (
                                <SwiperSlide key={i}>
                                    <p className='text-white'>{arrText[i]}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <Swiper
                modules={[Navigation,Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction: true
                }}
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        spaceBetween:20,
                        slidesPerView: 1.2
                    },
                    // when window width is >= 768px
                    768: {
                        spaceBetween:20,
                        slidesPerView: 3
                    },
                  }}
            
            >
                {
                    images.map((e,i)=>{
                        return (
                            <SwiperSlide key={i}>
                                <Image src={images[i]} alt="error" width="384px" height="200px" className='rounded-xl' />
                            </SwiperSlide>
                        )
                    })
                }
            

            </Swiper>
            <div className='text-end'>
                <Link href="#" className="text-white">See More</Link>
            </div>
        </div>
    </section>
  )
}

export default Aizone;