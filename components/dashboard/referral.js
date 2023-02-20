import React from 'react'


const Referral = () => {
  return (
    <section className='py-10 '>
        <div className=" border border-blue-gradient-active rounded-xl px-6 pt-8 bg-[url('/assets/icons/referral-bg.svg')] bg-no-repeat bg-right-bottom	">
            <p className='info-14-20'>Get up to 3000 USDT when you invite friends</p>
            <div className='mt-7 mb-16'>
                <p className='info-14'>Refferal</p>
                <span className='info-14-16'>0</span>
            </div>
            <div className='bg-light-hover rounded px-3 flex mb-4 text-center justify-between items-center'>
                <div className='text-ellipsis break-words whitespace-nowrap overflow-hidden pr-2 py-2'>https://www.blcexchange.in/en/referral/register?clacCode=NVQPH393
                </div>
                <div>

                  <button className='bg-primary text-white py-1 px-3 rounded'> Copy</button>  
                </div>
            </div>
        </div>
      
      


    </section>
  )
}

export default Referral
