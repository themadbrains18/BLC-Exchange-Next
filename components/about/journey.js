import React from 'react'

const Journey = () => {
  return (
    <section className="bg-primary dark:bg-primary py-10 md:py-20 md:bg-no-repeat md:bg-center md:bg-[url('/assets/images/journeybg.png')]  ">
    <div className="container my-0 mx-auto ">
        <h1 className='text-white text-2xl md:text-[40px] font-semibold leading-10 md:font-bold text-center'>Start Your Crypto Journey Now!</h1>
        <p className='mt-2 text-center text-base md:info-14-16 text-white'>Trade on a platform trusted by millions of users</p>
        <div className='text-center mt-5'>
            <button className='dark:text-black px-10 h-[48px] info-14-16 text-black rounded-lg bg-white text-center'>Join Us</button>
        </div>

    </div>
</section>
  )
}

export default Journey
