import React from 'react'

const WhyNeed = () => {
  return (
    <section className='dark:bg-black bg-[#f9fbfb] py-10 md:py-20 '>
      <div className='container'>
        <h1 className='hero-heading  text-[32px] lg:text-[56px]'>Why do we need a protection fund?</h1>
        <div className='flex flex-col lg:flex-row gap-2 p-2 '>
            <div className='mt-14 mr-0 lg:mr-40 info-14-16 text-base'>
                <p>The BLC-Exchange Protection Fund gives our platform an extra layer of resilience against cybersecurity threats.</p>
                <p className='my-6'>In addition to our <a href='/proof-of-reserves' className='text-primary underline '>Proof of Reserves</a> the fund shows that we’re committed to protecting your assets, and that we operate with transparency and integrity.</p>
                <p>If our customers have their accounts compromised or assets stolen or lost - not due to their own actions or trading behavior - then they may apply for a claim through the BLC-Exchange Protection Fund.</p>                
            </div>
            <img src='/assets/icons/btcfund.svg' alt='error' className='mt-16 self-center ' />
        </div>
      </div>
    </section>
  )
}

export default WhyNeed
