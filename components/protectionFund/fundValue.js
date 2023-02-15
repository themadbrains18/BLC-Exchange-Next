import React from 'react'


const FundValue = () => {
    // const cardData = [
    //     {
    //         cardImg: cardImg1,
    //         cardHeading: "Battle-tested Technology",
    //         cardInfo: "Stable and secure trading, even in the most extreme market conditions",

    //     },
    //     {
    //         cardImg: cardImg2,
    //         cardHeading: "Stable Security",
    //         cardInfo: "A+ ranking for 12 SSL indicators, and four major security vendors",
    //     },
    //     {
    //         cardImg: cardImg3,
    //         cardHeading: "Professional Customer Support",
    //         cardInfo: "24/7 customer support in localized languages (EN, FR, DE, RU, JP, TR, TC, ES…)",
    //     },
    //     {
    //         cardImg: cardImg4,
    //         cardHeading: "Margined Futures Accounts",
    //         cardInfo: "Supports 70+ trading pairs for USDT- USDC- and Coin-Margined futures"
    //     },
    //     {
    //         cardImg: cardImg5,
    //         cardHeading: "Full Quantitative Trading Tools",
    //         cardInfo: "Fully open API, supports CCXT, Quantitative Trading Tool Gunbot, Autoview, Sirius Trader"
    //     },
    //     {
    //         cardImg: cardImg6,
    //         cardHeading: "Intuitive Trading Tools",
    //         cardInfo: "From drag-and-drop TP/SL levels and futures calculators, to isolated and cross margin modes"
    //     },
    // ]

    return (
        <section className='dark:bg-black pb-20 lg:pt-[64px]' >
            <div className='container grey-gradiant p-10'>
                <p className='section-secondary-heading'>The fund is currently valued at <span className='text-[#c36f09]'>US $300 million.</span></p>
                <div className='flex justify-between mt-6'>
                    <div className='border-t-2 border-primary bg-[#f1fcfd] p-6 md:max-w-[288px] md:w-full rounded-lg'>
                        <div className='flex justify-between ' >
                            <div >
                                <p className='text-base text-light-grey'>BTC</p>
                                <p className='info-14-20'>6500 BTC</p>
                            </div>
                            <img src='/assets/icons/btc.svg' className='w-[24px] h-[24px]'></img>
                        </div>
                        <div className='mt-6 flex gap-4'>
                            Wallet
                            <img src='/assets/icons/arrow.svg'></img>
                        </div>
                    </div>
                    <div className='border-t-2 border-primary bg-[#f1fcfd] p-6 md:max-w-[288px] md:w-full  rounded-lg'>
                        <div className='flex justify-between ' >
                            <div >
                                <p className='text-base text-light-grey'>USDT</p>
                                <p className='info-14-20'>160 million USDT</p>
                            </div>
                            <img src='/assets/icons/USDT.svg' className='w-[24px] h-[24px]'></img>
                        </div>
                        <div className='mt-6 flex gap-4'>
                            Wallet
                            <img src='/assets/icons/arrow.svg'></img>
                        </div>
                    </div>
                    <div className='border-t-2 border-primary bg-[#f1fcfd] p-6 md:max-w-[288px] md:w-full  rounded-lg'>
                        <div className='flex justify-between ' >
                            <div >
                                <p className='text-base text-light-grey'>USDC</p>
                                <p className='info-14-20'>160 million USDC</p>
                            </div>
                            <img src='/assets/icons/USDC.svg' className='w-[24px] h-[24px]'></img>
                        </div>
                        <div className='mt-6 flex gap-4'>
                            Wallet
                            <img src='/assets/icons/arrow.svg'></img>
                        </div>
                    </div>
                 
                </div>
            </div>

        </section>
    )
}

export default FundValue
