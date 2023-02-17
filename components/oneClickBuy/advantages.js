import React from 'react'

const Advantages = () => {

    const cardData = [
        {
            cardImg: 'best1.svg',
            cardHeading: "Buy crypto",
            cardInfo: "Buy crypto with one-click and you don't need to be a professional to get started",

        },
        {
            cardImg: 'best2.svg',
            cardHeading: "Asset security",
            cardInfo: "Once the buyer place an order, the seller's asset will be locked by the platform. Customer support will intervene in case any dispute arises",
        },
        {
            cardImg: 'best3.svg',
            cardHeading: "Best quote",
            cardInfo: "When a user places an order, the system will match it with the best price for the corresponding payment method",
        }
    ]



    return (
        <section className='dark:bg-black-v-3 px-10 py-10 lg:py-20'>
            <div className='container'>
                <h1 className='section-secondary-heading'>The BLC-Exhange Advantages</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6'>
                    {cardData && cardData.map((e, i) => {
                        return (
                            <div key={i} className="max-w-full lg:max-w-xs w-full flex border border-[#ebebeb] rounded-lg p-6 md:p-9 lg:p-0 lg:border-none">
                                <img src={`/assets/icons/${e.cardImg}`} alt="error" className='max-w-[80px] lg:max-w-[120px] mr-8 lg:mr-0 w-full' />
                                <div className='mt-4 lg:mt-6 w-full '>
                                    <h3 className='info-14-24'>{e.cardHeading}</h3>
                                    <p className='info-14-16 text-grey mt-2 lg:mt-4'>{e.cardInfo}</p>
                                </div>

                            </div>

                        )
                    })}

                </div>
            </div>

        </section>
    )
}

export default Advantages
