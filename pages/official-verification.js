import React from 'react'
import Image from 'next/image'

const OfficialVerification = () => {
  return (
    <section className="py-10 md:py-20 pt-[120px] bg-[url('/assets/images/verify-bg.png')] min-h-[720px] h-full bg-no-repeat bg-cover">
      <div className='container pt-16 md:pt-52'>
        <div className='flex flex-col text-center gap-3 md:gap-0 md:flex-row justify-center items-center'>
          <Image
            src="/assets/icons/companyLogo.svg"
            width={186}
            height={50}
            alt="Company Logo"
          />
          <div className='hidden md:block w-[1px] h-10 bg-[#4f596e] mx-5 self-center'></div>
          <h1 className='section-secondary-heading text-2xl md:text-4xl text-white'>Official Channel Verification</h1>
        </div>
        <div className='flex  flex-col md:flex-row justify-center items-center mt-4 gap-1'>
          <p className='info-14-16 text-white'> Please confirm that you are visiting:</p>
          <img src='/assets/icons/lock.svg'/>
          <p className='info-14-16 text-white'>www.blcexchange.net</p>
        </div>
        <p className='px-5 pt-5 info-14-16 text-white text-center'>To prevent phishing or fraud, please verify that the mail/website/social</p>
         <p className='info-14-16 text-white text-center'>media account is from an official BLC-Exchange channel.</p>
         <form className="flex justify-center items-center gap-3 max-w-[750px] w-full mt-8 mx-auto  flex-col md:flex-row	">
            <input type="text" className="block px-5 py-4 max-w-full md:max-w-[70%] w-full bg-white border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" placeholder="Enter the email/website/social media account" />
            <button className='cta px-7 py-2' type='submit'>Search</button>
        </form>
      </div>
    
    </section>
  )
}

export default OfficialVerification
