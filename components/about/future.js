import Image from 'next/image'
import React from 'react'

const Future = () => {
    return (
        <section className='bg-white dark:bg-black-v-5 py-10 md:py-20 border-b-2 border-border-clr '>
            <div className="container inline-block xl:flex justify-between items-start gap-4">
                <div className=' w-[100%] xl:w-[50%]'>
                    <h1 className='dark:text-white text-2xl font-noto mb-6 md:text-[40px] leading-10 font-bold xl:mb-20'>The Future of Trading is Social</h1>
                    <p className='dark:text-white info-14-20  text-base md:text-xl'>Through our flagship products like One-Click Copy Trading and Grid Trading, BLC-Exchange is helping our community engage, interact, and learn from each other in ways that were never before possible.</p>
                    <p className='dark:text-white  my-6 info-14-20  text-base md:text-xl xl:my-8'>Experience the power of social trading today, and be sure to join us physically or virtually at one of the many events, meetups, and conferences that we hold around the world.</p>
                    <p className='dark:text-white  info-14-20  text-base md:text-xl'>BLC-Exchange is the link that connects you.</p>                
                </div>
                <div className='mt-12 xl:mt-0 grid md:grid md:grid-cols-2 gap-4'>
                    <div className='p-6 grid place-items-center bg-table-bg rounded-2xl w-[100%] xl:max-w-[282px] xl:w-full min-h-[222px] '>
                        <Image src='/assets/images/future1.png' alt='error' width={90} height={90}></Image>
                        <p className='dark:text-black info-14 text-center'>Exchange market information</p>
                    </div>
                    <div className='p-6 grid place-items-center bg-table-bg rounded-2xl  w-[100%] xl:max-w-[282px] xl:w-full  min-h-[222px] '>
                        <Image src='/assets/images/future2.png' alt='error' width={90} height={90}></Image>
                        <p className='dark:text-black info-14 text-center'>Follow model traders</p>
                    </div>
                    <div className='p-6 grid place-items-center bg-table-bg rounded-2xl  w-[100%] xl:max-w-[282px] xl:w-full  min-h-[222px]'>
                        <Image src='/assets/images/future3.png' alt='error' width={90} height={90}></Image>
                        <p className='dark:text-black info-14 text-center'>Share trading strategies & simulations</p>
                    </div>
                    <div className='p-6 grid place-items-center bg-table-bg rounded-2xl  w-[100%] xl:max-w-[282px] xl:w-full  min-h-[222px] '>
                        <Image src='/assets/images/future4.png' alt='error' width={90} height={90}></Image>
                        <p className='dark:text-black info-14 text-center'>Connect with the crypto-community</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Future
