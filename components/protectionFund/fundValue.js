import React from 'react'
import DropdownWallet from '../snippets/dropdownWallet'

const FundValue = () => {

    const cardData = [
        {
            cardImg: 'btc.svg',
            wallet: [
                {
                    desc:'Wallet1'
                },{
                    desc:'Wallet2' 
                }
            ],
            cardHeading: "BTC",
            cardInfo: "6500 BTC",

        },
        {
            cardImg: 'USDT.svg',
            wallet: [
                {
                    desc:'Wallet3'
                },{
                    desc:'Wallet4' 
                }
            ],
            cardHeading: "USDT",
            cardInfo: "160 million USDT",
        },
        {
            cardImg: 'USDC.svg',
            wallet: [
                {
                    desc:'Wallet5'
                },{
                    desc:'Wallet6' 
                }
            ],
            cardHeading: "USDC",
            cardInfo: "160 million USDC",
        }
    ]


    return (
        <section className='dark:bg-black px-5 pb-20 lg:pt-[80px]' >
            <div className='container grey-gradiant p-10 relative'>
                <p className='section-secondary-heading dark:text-black'>The fund is currently valued at <span className='text-[#c36f09]'>US $300 million.</span></p>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    {cardData && cardData.map((e, i) => {
                        return (
                            <div key={i} className='items-start lg:items-stretch justify-between flex lg:flex-col border-t-2 border-primary bg-[#f1fcfd] p-3 lg:p-6 md:max-w-[288px] md:w-full rounded-lg'>
                                <div  className='flex flex-row-reverse items-center gap-2 lg:flex-row lg:justify-between ' >
                                    <div >
                                        <p className=' hidden lg:block text-base text-light-grey dark:text-black'>{e.cardHeading}</p>
                                        <p className='info-14-20 text-sm lg:text-xl dark:text-black'>{e.cardInfo}</p>
                                    </div>
                                    <img src={`/assets/icons/${e.cardImg}`} alt="error" className='w-[24px] h-[24px] self-baseline' />
                                </div>
                                <div className='mt-0  pt-1 lg:pt-0 lg:mt-6 flex gap-4 relative group cursor-pointer'>
                                    <p className='hidden lg:block'>Wallet</p>
                                    <img src='/assets/icons/arrow.svg' alt='error'></img>
                                    {e.wallet && <DropdownWallet subMenu={e.wallet} />}
                                </div>
                          
                            </div>



                        )
                    })}
                   

                </div>
                <p className='mt-6 info-14'>
                    *Based on opening prices of November 15, 2022.
                </p>
                <img src='/assets/icons/downloadfund.svg' className='absolute top-0 right-0' alt='error' />
            </div>

        </section>
    )
}

export default FundValue
