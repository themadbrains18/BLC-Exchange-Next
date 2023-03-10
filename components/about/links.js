import Image from 'next/image'
import React from 'react'

const Links = () => {
  return (
    <section className='bg-[#f8f8f8] dark:bg-black-v-3 py-10 md:py-20  '>
    <div className="container ">
        <h1 className='dark:text-white text-2xl md:text-[40px] leading-10 font-bold mb-16'>More Helpful Links</h1>
     <div className='flex-wrap flex gap-12 md:gap-8 justify-between '>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className='dark:text-white info-14-24 text-2xl font-semibold'>Affiliate Program</p>
            <p className='dark:text-white font-noto text-base md:info-14-16 mb-2'>Earn daily commissions by being an influencer</p>
            <Image src='/assets/images/arrow.png' width={48} height={48} alt=""></Image>
        </div>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className='dark:text-white info-14-24 text-2xl font-semibold'>Rewards Program</p>
            <p className='dark:text-white font-noto text-base md:info-14-16 mb-2'>Earn rewards by completing tasks</p>
            <Image src='/assets/images/arrow.png' width={48} height={48} alt=""></Image>
        </div>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className='dark:text-white info-14-24 text-2xl font-semibold'>BLC-Exchange Academy</p>
            <p className='dark:text-white font-noto text-base md:info-14-16 mb-2' >Accelerate your trading journey with BLC-Exchange Academy's in-depth guides</p>
            <Image src='/assets/images/arrow.png' width={48} height={48} alt=""></Image>
        </div>
     </div>
    </div>
</section>
  )
}

export default Links
