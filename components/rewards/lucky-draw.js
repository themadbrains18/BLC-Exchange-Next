import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';


import giftIcon from '../../public/assets/icons/gift-box.svg';
import rewardCoin from '../../public/assets/icons/rewards-coin.svg';

let arrText = [
    {
        arrText: "The user R0d****Qhz has a futures trading volume of 719,301.3295 USDT, and and has claimed 888 USDT",
    },
    {
        arrText: "The user R0d****Qhz has a futures trading volume of 719,301.3295 USDT, and and has claimed 888 USDT",
    },
    {
        arrText: "The user R0d****Qhz has a futures trading volume of 719,301.3295 USDT, and and has claimed 888 USDT"
    }
]


const LuckyDraw = () => {
    return (
        <>
            <section className="py-10 lg:pb-20 bg-white">
                <div className='container'>
                    <div className='bg-[#e8f6f7] py-[30px] px-5 rounded-lg'>
                        <div className='lg:flex justify-between items-center '>
                            <div>
                                <h2 className='font-noto-display text-[24px] font-semibold mb-1 md:text-[32px]'>Daily Lucky Draw of 888 USDT</h2>
                                <p className='font-noto  text-[14px] text-[#1e1e1e] mb-[30px] md:text-[#1e1e1e]  md:text-[16px]'>Complete new user tasks to unlock advanced tasks</p>
                                <div className="flex gap-5  items-start  overflow-hidden">
                                    <Image src={giftIcon} alt="error" width={24} height={24} />
                                    {/* <Carousel  data={arrText} vertical={true}  arrow={true}/> */}
                                    <Swiper
                                        modules={[Autoplay]}
                                        className='!m-0 h-[74px] md:h-[30px]'
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 2500
                                        }}
                                        direction='vertical'
                                        loop={true}
                                    >
                                        {
                                            arrText.map((e, i) => {

                                                return (
                                                    <SwiperSlide key={i}>
                                                        <p className='text-black'>{e.arrText}</p>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                            <div className='hidden lg:block pr-20'>
                            <Image src={rewardCoin} alt='error' width={175} height={147}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuckyDraw