import React from 'react'

const Banner = () => {
  return (
      <section className="py-10 md:pb-20 bg-gradient-to-r from-[#000] to-[#2c2c2c]" >
      <div className='container flex flex-col-reverse gap-3 text-center lg:text-left lg:flex-row justify-between lg:gap-2'>
        <div>
         <h1 className='hero-heading text-white'>We love hearing from you!</h1>
         <p className='pt-2 section-secondary-heading text-white'> Thank you for your feedback.</p>
        </div>
        <img src='/assets/icons/banner-feedback.svg' alt='error' className='self-center lg:self-baseline'></img>
      </div>
    </section>
  )
}

export default Banner
