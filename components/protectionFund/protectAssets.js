import React from 'react'

const ProtectAssets = () => {

    const cardData = [
        {
            cardImg: 'learn1.svg',
            cardType: ['Cryptocurrency'],
            cardHeading: "$300M BLC-Exchange Protection Fund to Protect User's Assets",
            cardInfo: "December 22, 2022 ｜ 10 min",

        },
        {
            cardImg: 'learn2.svg',
            cardType: ['BLC-Exchange'],
            cardHeading: "Solana's $6M Hack: How to Protect Your Money with the BLC-Exchange Protection Fund",
            cardInfo: " December 12, 2022 ｜ 5 min",
        },
        {
            cardImg: 'learn3.svg',
            cardType: ['Cryptocurrency', 'BLC-Exchange'],
            cardHeading: "Rookie Mistakes When Starting Out in Crypto",
            cardInfo: "November 18, 2022 ｜ 10 min",
        }
    ]



    return (
        <section className='dark:bg-black-v-3 py-10 md:py-20'>
            <div className='container'>
                <h1 className='hero-heading text-[32px] lg:text-[56px]'>Learn how to protect your assets.</h1>
                <p className='info-14-24 text-base mt-2 lg:text-2xl lg:mt-6'>Read our Academy articles on how to protect your account on Web3.</p>
                <div className='flex flex-nowrap flex-col  gap-10 md:flex-row md:flex-wrap lg:gap-6 mt-14 justify-center lg:justify-between'>
                {cardData && cardData.map((e, i) => {
                        return (
                        <div key={i} className="w-full md:w-max">
                            <img src={`/assets/icons/${e.cardImg}`} alt="error" className='rounded-xl max-w-full w-full md:max-w-[368px] ' />
                            <div  className='mt-4 lg:mt-6 '>
                                        {e.cardType.map((item, i) => {
                                            return (

                                                <span key={i} className='info-12 bg-[#eff1f1] w-fit py-2 px-3 mr-4 rounded'>{item}</span>

                                            )
                                        })}
                                   <h3 className='mt-4 h-16 txt_ellipsis max-w-[350px] info-14-24 text-base lg:text-2xl'>{e.cardHeading}</h3>
                                   <p className='info-14 mt-4'>{e.cardInfo}</p>
                                    </div>

                        </div>

                        )})}
                   
                </div>      
                <p className='mt-10 info-12'>*BLC-Exchange shall have the right to conduct investigations on the compromised accounts and/or the lost assets, and claims may be subject to the investigation result.</p>
            </div>
        </section>
    )
}

export default ProtectAssets
