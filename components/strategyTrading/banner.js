import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='dark:bg-black-v-3 py-10 md:py-20'>
        <div className='container '>
          <div className='flex items-center justify-between flex-col-reverse lg:flex-row gap-6  text-left'>

            <div className='flex flex-col gap-2'>
              <h1 className='hero-heading font-noto'>Create Strategy</h1>
            </div>

            <img src='/assets/icons/strategy_bot-logo.effdedc.svg' alt='error' className='max-w-[332px] md:w-full mt-5' ></img>

          </div>
        </div>

      </section>
    </>
  )
}

export default Banner