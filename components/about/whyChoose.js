import React from 'react'
import Image from 'next/image';
import cardImg1 from '../../public/assets/images/choose1.png';
import cardImg2 from '../../public/assets/images/choose2.png';
import cardImg3 from '../../public/assets/images/choose3.png';
import cardImg4 from '../../public/assets/images/choose4.png';
import cardImg5 from '../../public/assets/images/choose6.png';
import cardImg6 from '../../public/assets/images/choose7.png';

const WhyChoose = () => {
    const cardData = [
        {
            cardImg: cardImg1,
            cardHeading: "Battle-tested Technology",
            cardInfo: "Stable and secure trading, even in the most extreme market conditions",
    
        },
        {
            cardImg: cardImg2,
            cardHeading: "Stable Security",
            cardInfo: "A+ ranking for 12 SSL indicators, and four major security vendors",
        },
        {
            cardImg: cardImg3,
            cardHeading: "Professional Customer Support",
            cardInfo: "24/7 customer support in localized languages (EN, FR, DE, RU, JP, TR, TC, ES…)",
        },
        {
            cardImg: cardImg4,
            cardHeading: "Margined Futures Accounts",
            cardInfo: "Supports 70+ trading pairs for USDT- USDC- and Coin-Margined futures"
        },
        {
            cardImg: cardImg5,
            cardHeading: "Full Quantitative Trading Tools",
            cardInfo: "Fully open API, supports CCXT, Quantitative Trading Tool Gunbot, Autoview, Sirius Trader"
        },
        {
            cardImg: cardImg6,
            cardHeading: "Intuitive Trading Tools",
            cardInfo: "From drag-and-drop TP/SL levels and futures calculators, to isolated and cross margin modes"
        },
    ]
    return (
        <section className='bg-white dark:bg-black-v-5 py-[80px] md:py-[120px]  '>
            <div className="container ">
                <h1 className='dark:text-white text-2xl md:text-[40px] leading-10 font-bold'>Why Choose Bitget?</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6 '>
                    {cardData && cardData.map((e, i) => {
                         return(
                        <div className='flex flex-col gap-4 p-4 justify-around sm:max-w-[340px] sm:w-full md:max-w-[282px] md:w-full'>
                            <Image src={e.cardImg} alt="" width={90} height={90}  />
                            <div className="mt-4" >
                                <h3 className='dark:text-white text-2xl font-noto font-medium md:info-14-24 mb-3 sm:mb-5'>{e.cardHeading}</h3>
                                <p className='dark:text-white text-base font-noto md:info-14-16'>{e.cardInfo}</p>
                            </div>
                        </div>
                         )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
