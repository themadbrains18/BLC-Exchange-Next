import React from 'react'
import Image from 'next/image';

export const UserTask = () => {
    return (
        <>
            <section className="py-10 md:pb-20 dark:bg-black">
                <div className='container'>
                    <div className='flex justify-between items-center mb-5 md:mb-9 lg:mb-12'>
                        <h2 className='font-noto-display text-[24px] md:text-[32px]'>New User Tasks</h2>
                        <span className='block text-[12px] text-[#1e1e1e] border-b-[1px] border-[#1e1e1e] md:hidden' > Rules</span>
                    </div>
                    <div className='lg:border-[1px] border-[#ebebeb] rounded-2xl lg:flex'>
                        <div className='px-5 py-6 mb-5 border-[1px] border-[#ebebeb] rounded-2xl md:flex  justify-between md:py-7 md:px-8 lg:border-hidden gap-12'>
                            <div>
                                <img src='/assets/images/gift-user-task.png' alt='error' width={66} height={66} className='mb-3'></img>
                                <div className='flex gap-2 items-center mb-[10px]'>
                                    <p className='font-noto dark:text-white font-semibold text-xl md:text-[#1e1e1e] text-[24px]'>Sign up</p>
                                    <img src='/assets/icons/question.png' alt='error' width={16} height={16}></img>
                                </div>
                                <p className='font-noto info-14-16  mb-[10px] '>Sign up to begin your journey with BLC Exchange</p>
                            </div>
                            <button className='font-noto  text-white py-2 w-full bg-[#1da2b4] rounded-[4px] md:h-10 md:w-44 mt-3 lg:self-center '> Sign up</button>
                        </div>

                        <div className='px-5 py-6 mb-5 border-[1px] border-[#ebebeb] rounded-2xl flex  justify-between md:py-7 md:px-8 lg:border-hidden  gap-12'>
                            <div>
                                <p className='mb-3 text-[40px] font-bold text-[#1da2b4]'>+5,000<span className='text-[14px] font-medium ml-1'>USDT</span></p>
                                <div className='flex gap-2 items-center mb-[10px]'>
                                    <p className='font-noto  dark:text-white font-semibold text-xl md:text-[#1e1e1e] text-[24px]'>Deposit</p>
                                    <img src='/assets/icons/question.png' alt='error' width={16} height={16}></img>
                                </div>
                                <p className='font-noto info-14-16  mb-[10px]'>Earn rewards worth up to 5,000 USDT</p>
                            </div>
                            <Image src='/assets/icons/lock-new-task-user.svg' alt='error' width={40} height={40} className='self-start mt-3 lg:self-center'></Image>
                        </div>

                        <div className='px-5 py-6 mb-5 border-[1px] border-[#ebebeb] rounded-2xl flex  justify-between md:py-7 md:px-8 lg:border-hidden  gap-12'>
                            <div>
                                <p className='mb-3 text-[40px] font-bold text-[#1da2b4]'>+5,000<span className='text-[14px] font-medium ml-1'>USDT</span></p>
                                <div className='flex gap-2 items-center mb-[10px]'>
                                    <p className='font-noto  dark:text-white font-semibold text-xl md:text-[#1e1e1e] text-[24px]'>Trade</p>
                                    <img src='/assets/icons/question.png' alt='error' width={16} height={16}></img>
                                </div>
                                <p className='font-noto info-14-16  mb-[10px]'>Earn rewards worth up to 5,000 USDT</p>
                            </div>
                            <Image src='/assets/icons/lock-new-task-user.svg' alt='error' width={40} height={40} className='self-start mt-3 lg:self-center'></Image>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default UserTask