import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='bg-[#f8f8f8] dark:bg-black-v-3 py-[50px] md:py-[120px]  '>
    <div className="container ">
        <h1 className='dark:text-white text-2xl font-semibold md:text-4xl leading-10 md:font-bold mb-6 lg:mb-0'>About Us</h1>
        <div className='flex justify-around items-center  '>
            <Image src='/assets/images/about_us.png' width={332} height={380} alt='error' className='hidden lg:block'></Image>
            <div className='max-w-full lg:max-w-xl w-full'>
            <p className='info-14-20 text-base md:text-xl'>
            Launched in 2018, BLC-Exchange provides comprehensive and secure trading solutions to our global userbase.
            </p>
            <p className='my-8 info-14-20 text-base md:text-xl'>
            With a core focus on social trading, BLC-Exchange has amassed over 8 million users, 1.1 million followers, and 55,000 professional traders from more than 100 countries around the world.
            </p>
            <p className='info-14-20 text-base md:text-xl'>
            BLC-Exchange is ranked in the top five globally by CoinGecko for derivatives trading by volume, and has generated over US$100 billion in trading volume in 2021 alone.
            </p>

            </div>
            
        </div>
        <div className='grid grid-cols-1  p-4 md:grid md:grid-cols-2 bg-[#f8f8f8] lg:flex justify-between mt-16 rounded-2xl lg:bg-white lg:py-16 lg:px-20'>
           <div className='mb-10 md:mb-16 lg:flex flex-col justify-between'>
            <p className='section-secondary-heading text-2xl md:text-3xl font-noto text-primary dark:text-primary font-bold'>#1 Platform</p>
            <p className='mt-4 text-base info-14-16  dark:text-black'>For copy trading by volume</p>
           </div>
           <div className='mb-10 md:mb-16 lg:flex flex-col justify-between'>
            <p className='section-secondary-heading text-2xl md:text-3xl font-noto text-primary dark:text-primary font-bold'>Top 5</p>
            <p className='mt-4 info-14-16 text-base dark:text-black'>In derivatives by trading volume</p>
           </div>
           <div className='mb-10 md:mb-16 lg:flex flex-col justify-between'>
            <p className='section-secondary-heading text-2xl md:text-3xl font-noto text-primary  dark:text-primary font-bold'>8+ million</p>
            <p className='mt-4 info-14-16 text-base dark:text-black'>Registered users</p>
           </div>
           <div className='mb-10 md:mb-16 lg:flex flex-col justify-between'>
            <p className='section-secondary-heading text-2xl md:text-3xl font-noto text-primary  dark:text-primary font-bold'>US $10 Billion</p>
            <p className='mt-4 text-base info-14-16 dark:text-black'>Average daily trading volume</p>
           </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs
