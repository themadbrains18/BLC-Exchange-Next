import React from 'react'
import Image from 'next/image'

const JoinTrader = () => {
    return (
        <section className='dark:bg-black-v-3 py-10 md:py-20'>
            <div className='bg-jointrader  bg-no-repeat text-center grid place-content-center'>
                <div className='container'>
                    <div className='mb-11 md:mb-28 mt-[75px]'>
                        <h2 className='heading-28-40 mx-auto  text-center max-w-[600px] mb-12'>Share your strategies with 8 million+ Bitget users</h2>
                        <button className='cta'>Join as a Trader</button>
                    </div>
                    <div>
                    <div className='flex gap-7 justify-center mb-[10px] md:gap-12'>
                        <Image src="/assets/icons/telegramIcon.svg" alt="img" className='' width={40} height={40} />
                        <Image src="/assets/icons/twitter.svg" alt="img" className='' width={40} height={40} />
                    </div>
                    <p className='info-14'>Click to join our futures community</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinTrader