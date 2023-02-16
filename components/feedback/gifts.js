import React from 'react'

const Gifts = () => {
  return (
    <section className='bg-white dark:bg-black-v-5 py-10 md:py-20'>
      <div className=' flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl leading-[60px] font-noto font-bold self-center dark:text-white'>Redeem Gifts</h1>
        <p className='info-14-20 pt-6'>Once your feedback is accepted, you will be eligible for rewards of up to 2,000 USDT, as well as exclusive Bitget swag. </p>
        <div className='flex justify-between mt-14 gap-12'>
          <div className='p-4 pb-10 text-center bg-[#f7f7f7] rounded-xl'>
            <img src='/assets/images/gift1.png'></img>
            <span className='info-14-20 dark:text-black'>2000 USDT</span>
          </div>
          <div className='p-4 pb-10 text-center bg-[#f7f7f7] rounded-xl'>
            <img src='/assets/images/gift2.png'></img>
            <span  className='info-14-20 dark:text-black'>Official hoodie</span>
          </div>
          <div className='p-4 pb-10 text-center bg-[#f7f7f7] rounded-xl'>
            <img src='/assets/images/gift3.png'></img>
            <span  className='info-14-20 dark:text-black '>Mug</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gifts
