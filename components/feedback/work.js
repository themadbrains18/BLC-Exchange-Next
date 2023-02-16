import React from 'react'

const Work = () => {
  return (
    <section className='bg-white dark:bg-black-v-3 py-10 md:py-20'>
    <div className='container flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl leading-[60px] font-noto font-bold self-center dark:text-white'>How Does It Work? </h1>
        <div className=' grid grid-cols-5 mt-12 gap-16 w-full items-baseline'>
          <div className='text-center'>
          <img src='/assets/icons/how1.svg' alt='error' className='my-0 mx-auto'></img>
          <span>Submit feedback</span>
          </div>
          <div className='text-center'>
          <div className='bg-gradient-to-r from-[#fff] to-[#1da2b4] h-1 '></div>
          </div>
          <div className='text-center'>
          <img src='/assets/icons/how2.svg' alt='error' className='my-0 mx-auto'></img>
          <span>Team review</span>
          </div>
        <div className='text-center'>
        <div className='bg-gradient-to-r from-[#fff] to-[#1da2b4] h-1 '></div>
        </div>
        <div className='text-center'>
        <img src='/assets/icons/how3.svg' alt='error' className='my-0 mx-auto'></img>
        <span>Redeem your gift</span>
        </div>
         
        </div> 

       
    </div>
</section>
  )
}

export default Work
