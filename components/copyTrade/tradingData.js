import Image from 'next/image'
import React from 'react'

const TradingData = () => {
  return (
    <section className='dark:bg-black-v-3 py-10 md:py-20'>
    <div className='container '>
        <div>
          <h2 className='heading-28-40 text-center mb-12'>Copy Trading Data</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-y-9 mb-9'>
            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-black-v-3 mb-[5px]'>$20,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Star Trader Total Profits</p>
            </div>
            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-black-v-3 mb-[5px]'>$1,000,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Total Trading Volume</p>
            </div>
            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-black-v-3 mb-[5px]'>$3,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Highest AUM</p>
            </div>

            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-[#1da2b4] mb-[5px]'>$20,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Star Trader Total Profits</p>
            </div>
            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-[#1da2b4] mb-[5px]'>$1,000,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Total Trading Volume</p>
            </div>
            <div className='text-center'>
              <h3 className='info-16-28 font-medium text-[#1da2b4] mb-[5px]'>$3,000,000+</h3>
              <p className='info-14-16 text-[#929899]' >Highest AUM</p>
            </div>
          </div>
          <div className='text-center'>
            <Image src="/assets/icons/copytradeMobile.svg" alt="img" className='block m-auto mb-14' width={819} height={130} />
            <button className='cta'>Join as a Trader</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingData