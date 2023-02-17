import React from 'react'

const Banner = () => {
  return (
    <section className='dark:bg-black-v-3 pb-20 pt-[120px] lg:pt-[120px]' >
        <div className='container flex items-center justify-between flex-col-reverse lg:flex-row gap-5  text-left'>
            <div className='flex flex-col gap-2'>
               <p className='info-14-24 dark:text-[#c36f09]  text-[#c36f09]'>Your security, our priority</p>
               <h1 className='hero-heading'>BLC-Exchange Protection Fund</h1>
               <p className='info-14-20 mt-6 lg:mt-10'>We regularly monitor the BLC-Exchange Protection Fund, as well as crypto's cybersecurity landscape, to make sure that our fund remains adequate for our customers.</p>
            </div>
            <div className='max-w-[332px] md:w-full'>
                <img src='/assets/images/protection-fund.png' alt='error' ></img>
            </div>
        </div>
      
    </section>
  )
}

export default Banner
