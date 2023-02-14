import Image from 'next/image'
import React from 'react'

const Links = () => {
  return (
    <section className='bg-[#f8f8f8] dark:bg-black-v-5 py-[80px] md:py-[120px]  '>
    <div className="container ">
        <h1 className='dark:text-white text-2xl md:text-[40px] leading-10 font-bold mb-16'>More Helpful Links</h1>
     <div className='flex-wrap flex gap-8 justify-between '>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className=' text-2xl font-semibold md:info-14-24'>Affiliate Program</p>
            <p className='text-base md:info-14-16'>Earn daily commissions by being an influencer</p>
            <Image src='/assets/images/arrow.png' width={48} height={48}></Image>
        </div>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className='text-2xl font-semibold md:info-14-24'>Rewards Program</p>
            <p className='text-base md:info-14-16'>Earn rewards by completing tasks</p>
            <Image src='/assets/images/arrow.png' width={48} height={48}></Image>
        </div>
        <div className='flex flex-col justify-between gap-4 md:max-w-[280px] md:w-full'>
            <p className='text-2xl font-semibold md:info-14-24'>Bitget Academy</p>
            <p className='text-base md:info-14-16'>Accelerate your trading journey with Bitget Academy's in-depth guides</p>
            <Image src='/assets/images/arrow.png' width={48} height={48}></Image>
        </div>
     </div>
    </div>
</section>
  )
}

export default Links
