import React from 'react'

const Banner = () => {
  return (
      <section className="pt-[120px] bg-gradient-to-r from-[#000] to-[#2c2c2c]" >
      <div className='container flex justify-between gap-2'>
        <div>
         <h1 className='text-5xl leading-[60px] font-noto font-medium text-white'>We love hearing from you!</h1>
         <p className='pt-2 section-secondary-heading text-white'> Thank you for your feedback.</p>
        </div>
        <img src='/assets/icons/banner-feedback.svg' alt='error' className='self-baseline'></img>
      </div>
    </section>
  )
}

export default Banner
