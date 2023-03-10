import React from 'react'
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="py-10 lg:pb-20 bg-white">
            <div className='container  text-left lg:flex flex-row-reverse justify-between items-center'>
                <div className='lg:w-[50%]'>
                    <Image src='/assets/images/banner_rewards.png' alt='error' width={690} height={342} className='m-auto mb-9 lg:self-baseline lg:mb-0'></Image>
                </div>
                <div className='w-full  lg:w-[50%]'>
                    <h1 className=' text-[32px] font-noto-display  lg:text-[56px] text-[#1e1e1e] font-medium lg:w-[600px]'>Complete tasks to earn up to <span className='text-[#1da2b4]'>5,005</span> USDT </h1>
                    <div className='flex gap-3 mt-8 lg:gap-7 lg:mt-12'>
                        <button className='py-3 w-full px-[38px] font-noto font-semibold text-white bg-[#1da2b4] rounded-[4px] border-[1px] border-[1da2b4] lg:w-32'>Log In</button>
                        <button className='py-3 w-full px-[38px] font-noto font-semibold text-[#1da2b4] bg-white rounded-[4px]  border-[1px] border-[1da2b4] lg:w-32'>Share</button>
                        <button><img src='/assets/icons/question.png' alt='error' width={16} height={16}></img> </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
