import React from 'react'


const FundValue = () => {


    return (
        <section className='dark:bg-black px-5 pb-20 lg:pt-[80px]' >
            <div className='container grey-gradiant p-10 relative'>
                <p className='section-secondary-heading dark:text-black'>The fund is currently valued at <span className='text-[#c36f09]'>US $300 million.</span></p>
                <div className='flex flex-col md:flex-row gap-6 mt-6'>
                    <div className='items-start lg:items-stretch justify-between flex lg:flex-col border-t-2 border-primary bg-[#f1fcfd] p-3 lg:p-6 md:max-w-[288px] md:w-full rounded-lg'>
                        <div className='flex flex-row-reverse items-center gap-2 lg:flex-row lg:justify-between ' >
                            <div >
                                <p className=' hidden lg:block text-base text-light-grey dark:text-black'>BTC</p>
                                <p className='info-14-20 text-sm lg:text-xl dark:text-black'>6500 BTC</p>
                            </div>
                            <div>

                                <img src='/assets/icons/btc.svg' className='w-[24px] h-[24px]'></img>
                            </div>
                        </div>

                        <div className='mt-0  pt-1 lg:pt-0 lg:mt-6 flex gap-4'>
                            <p className='hidden lg:block'>Wallet</p>
                            <img src='/assets/icons/arrow.svg' alt='error'></img>
                        </div>
                    </div>
                    <div className='items-start lg:items-stretch justify-between flex lg:flex-col border-t-2 border-primary bg-[#f1fcfd] p-3 lg:p-6 md:max-w-[288px] md:w-full rounded-lg'>
                        <div className='flex flex-row-reverse items-center gap-2 lg:flex-row justify-between ' >
                            <div >
                                <p className='hidden lg:block text-base text-light-grey dark:text-black'>USDT</p>
                                <p className='info-14-20 text-sm lg:text-xl dark:text-black'>160 million USDT</p>
                            </div>
                            <img src='/assets/icons/USDT.svg' className='w-[24px] h-[24px]'></img>
                        </div>
                        <div className='mt-0  pt-1 lg:pt-0 lg:mt-6 flex gap-4'>
                            <p className='hidden lg:block'>Wallet</p>
                            <img src='/assets/icons/arrow.svg' alt='error'></img>
                        </div>
                    </div>
                    <div className='items-start lg:items-stretch justify-between flex lg:flex-col border-t-2 border-primary bg-[#f1fcfd] p-3 lg:p-6 md:max-w-[288px] md:w-full rounded-lg'>
                        <div className='flex flex-row-reverse items-center gap-2 lg:flex-row justify-between ' >
                            <div >
                                <p className='hidden lg:block  text-base text-light-grey dark:text-black'>USDC</p>
                                <p className='info-14-20 text-sm lg:text-xl dark:text-black'>160 million USDC</p>
                            </div>
                            <img src='/assets/icons/USDC.svg' className='w-[24px] h-[24px]'></img>
                        </div>
                        <div className='mt-0 pt-1 lg:pt-0 lg:mt-6 flex gap-4'>
                            <p className='hidden lg:block'>Wallet</p>
                            <img src='/assets/icons/arrow.svg' alt='error'></img>
                        </div>
                    </div>

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
