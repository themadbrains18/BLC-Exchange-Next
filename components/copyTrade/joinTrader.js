import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const JoinTrader = () => {
    return (
        <section className='dark:bg-black-v-3 py-10 md:py-20'>
            <div className=' text-center grid place-content-center'>
                <div className='container'>
                    <div className='mb-11 md:mb-28 mt-[75px]'>
                        <h2 className='heading-28-40 mx-auto  text-center max-w-[600px] mb-12'>Share your strategies with 8 million + BLC Exchange users</h2>
                        <button className='cta'>Join as a Trader</button>
                    </div>
                    <div>
                        <div className='flex gap-7 justify-center mb-[10px] md:gap-12'>
                            <Link href="/"> <Image src="/assets/icons/telegramIcon.svg" alt="img" className='' width={40} height={40} /></Link>
                            <Link href="/">  <Image src="/assets/icons/twitter.svg" alt="img" className='' width={40} height={40} /> </Link>
                        </div>
                        <Link href="/" className='info-14'>Click to join our futures community</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinTrader