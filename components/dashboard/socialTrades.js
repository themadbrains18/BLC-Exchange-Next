import React from 'react'
import { useContext } from 'react';

import Context from '../contexts/context';

const SocialTrades = () => {

  const { mode } = useContext(Context);

  return (
    <section className='py-10 md:py-20'>
      <div>
        <p className='section-secondary-heading'>My social trades</p>
        <div className='flex justify-between items-start my-8'>
          <div className='flex flex-col w-full'>
            <div>
              <span className='info-14 border-b border-dashed border-border-clr'>Capital</span>
            </div>
            <div>
              <span className='section-secondary-heading mr-3'>0</span>
              <span className='info-14-16'>USDT</span>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div>
              <span className='info-14 border-b border-dashed border-border-clr'>Total Profit</span>
            </div>
            <div>
              <span className='section-secondary-heading mr-3'>0</span>
              <span className='info-14-16'>USDT</span>
            </div>
          </div>
        </div>

        <div>
          <div className={` p-1 grid grid-cols-1 md:grid-cols-2  gap-11`}>
            <div className={` ${mode === 'dark' ? 'blue-gradient' : 'blue-gradient-active'} rounded-lg w-full`}>

              <div className="bg-[url('/assets/icons/bg-social.svg')] bg-no-repeat p-8"
              style={{
                backgroundPosition:' right 32px top 32px',
              }}>
                <div className='flex'>
                  <span className='info-14-16'>Copy trading </span>
                  <img src='/assets/icons/navigate.svg' alt='error'></img>
                </div>
                <div className='mt-8 flex gap-1'>
                  <span className='info-14-16 text-primary'>100,000</span>
                  <span className='info-14-16'>Traders</span>
                </div>
              </div>
            </div>
            <div className={` ${mode === 'dark' ? 'blue-gradient' : 'blue-gradient-active'} rounded-lg w-full`}>
              <div className="bg-[url('/assets/icons/bg-social.svg')] bg-right-top bg-no-repeat p-8"
               style={{
                backgroundPosition:' right 32px top 32px',
              }}>
                <div className='flex'>
                  <span className='info-14-16'>Copy trading </span>
                  <img src='/assets/icons/navigate.svg' alt='error'></img>
                </div>
                <div className='mt-8 flex gap-1'>
                  <span className='info-14-16 text-primary'>10000</span>
                  <span className='info-14-16'>Traders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialTrades
