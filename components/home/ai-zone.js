import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import Carousel from  '../snippets/carousel';
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

let image = [
    {
        image:carousel1
    },
    {
        image:carousel2
    },
    {
        image:carousel3
    },
    {
        image:carousel4
    },
    {
        image:carousel5
    }
] 
let arrText = [
    {
        arrText:"Initial Listing With $BLUR - Total of $180,000+ BLUR and BGB, 5 BTC, and Messi Signed Jersey To Be Won!",
    },
    {
        arrText:"Bitget Joins the VerifyVASP Alliance",
    },
    {
        arrText:"Bitget Listed CryptoAI (CAI) and Botto (BOTTO) in the AI Zone - Share $20,000 Worth of Rewards!"
    }
]


const Aizone = () => {
  return (
    <section className="ai_zone bg-black-v-5 py-[80px] md:py-[120px]">
        <div className="container">
            <div className="flex gap-5 mb-8  items-start  overflow-hidden">
                <Image src={Sound} alt="error" width={24} height={24} />
                {/* <Carousel  data={arrText} vertical={true}  arrow={true}/> */}
                <Swiper
                    modules={[Autoplay]}
                    className='!m-0 h-[74px] md:h-[30px]'
                    slidesPerView={1}
                    autoplay={{
                        delay:2500
                    }}
                    direction='vertical'
                    loop={true}
                >
                    {
                        arrText.map((e,i)=>{
                         
                            return (
                                <SwiperSlide key={i}>
                                    <p className='text-white'>{e.arrText}</p>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            {/* image carousel */}
            <Carousel  data={image} arrow={true} delay={true} />
        
            <div className='text-end'>
                <Link href="#" className="text-white">See More</Link>
            </div>
        </div>
    </section>
  )
}

export default Aizone;