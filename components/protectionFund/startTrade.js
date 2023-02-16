import React from 'react'

const StartTrade = () => {
  return (
    <section className='dark:bg-black bg-[#f9fbfb] py-10 md:py-20'>
      <div className='container flex flex-col-reverse text-center items-center lg:justify-between lg:flex-row'>
        <div className='mb-20 mt-8 lg:mt-0'>
            <h1 className='hero-heading  text-[32px] lg:text-[56px]'>Ready to start trading?</h1>
            <p className='info-14-24 text-base mt-2 lg:text-2xl lg:mt-6'>Your account and assets are protected here.</p>
            <button className='info-14-16 mt-[72px] p-4 rounded bg-primary dark:text-white'>Get Started</button>
        </div>
            <img src='/assets/icons/trading.svg' alt='error' className='self-center lg:self-end'></img>
      </div>
    </section>
  )
}

export default StartTrade
