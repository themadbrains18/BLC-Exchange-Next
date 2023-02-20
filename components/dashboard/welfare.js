import React from 'react'

const Welfare = () => {
    return (
        <section className=' '>
            <div className='blue-gradient-active p-6 flex flex-col rounded-2xl'>
                <div className='flex justify-between'>
                    <p className='info-14-20 dark:text-black'>Exclusive for new users</p>
                    <div className='flex flex-col items-end'>
                        <p className=' info-14'>Time Left</p>
                        <div className='flex gap-1'>
                            <p className='bg-black info-14 text-white rounded px-1' >04D</p>
                            <p className='bg-black info-14 text-white rounded px-1' >22H</p>
                            <p className='bg-black info-14 text-white rounded px-1' >05M</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <img src='/assets/icons/flower.svg' alt='error' className='mt-5'></img>
                </div>
                <div className='text-center'>
                    <span className='info-14-20 dark:text-black'>Earn up to <span className='text-[#FFB800]'>5000 USDT</span>  for your first deposit</span>
                </div>
                    <button className=' info-14 dark:text-black bg-primary text-white w-full text-center inline-block mt-2 rounded-md py-2 px-4'>Get Started</button>
              
            </div>
        </section>
    )
}

export default Welfare
