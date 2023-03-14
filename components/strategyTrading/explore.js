import React from 'react'
import Image from 'next/image'
import exploreImg from '../../public/assets/icons/strategyTradingExplore.svg';

const Explore = () => {
    return (
        <>
            <section className='dark:bg-black-v-3 bg-[#f1fcfd] py-10 md:py-20'>
                <div className='container'>
                    <div className='flex flex-col-reverse items-center gap-10  md:gap-16 lg:justify-between lg:flex-row lg:gap-24'>
                        <div>
                            <h1 className='heading-28-40 font-noto mb-6'>Having a rough ride with market volatility? Automate your trades with Strategy Hub</h1>
                            <p className='font-light font-noto text-black text-[14px] leading-[22px] mb-10 md:text-[18px] md:leading-[26px] md:mb-[70px] dark:text-white;'>With Strategy Hub, subscribe to an elite strategist for 30 days and take your trades to the next level with automated orders.</p>
                            <button className='cta'>Explore now</button>
                        </div>
                        <Image src={exploreImg} width={402} height={231} className='' ></Image>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore