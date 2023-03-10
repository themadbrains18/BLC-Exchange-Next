import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function TraderPrivilege() {
    return (
        <section className='startTraderPrivilege dark:bg-black md:pt-[80px] pt-[40px]'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='heading-28-40 font-semibold capitalize '>Star Trader Privileges</h2>
                    <p className='info-14-16'>Get more views and maximize earnings from your followers </p>
                </div>
                <div className='flex-col flex md:flex-row  md:pt-[48px] pt-[28px] justify-between gap-5' >
                    <div className='w-full md:w-[48%]'>
                        <div className='text-center mb-[48px]'>
                            <Image src="/assets/images/award1.svg" alt="img" className='block m-auto' width={175} height={173} />
                            <h3 className='info-16-28 captialize font-semibold pt-[17px]'>Exclusive Bonuses</h3>
                        </div>
                        <ul className=' rounded-sm border-2 border-[#ebebeb] md:px-10 p-5 md:pt-10 md:pb-14'>
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Share profits</h5>
                                <p className=' info-14-16 text-[#929899]'>Earn up to 10% of the profits made by your followers, which will be credited on a daily basis with no maximum receivable limit.</p>
                            </li>    
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Copy trading events</h5>
                                <p className=' info-14-16 text-[#929899]'>Take part in regular copy trading activities with an abundance of rewards</p>
                            </li>    
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Gift packages</h5>
                                <p className=' info-14-16 text-[#929899]'>Receive Bitget gift packages in addition to the event rewards.</p>
                            </li>    
                            <li className='list-disc '>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Get certified</h5>
                                <p className=' info-14-16 text-[#929899]'>Get badges that will help certify your account which increases your credibility.</p>
                            </li>    
                        </ul>                           
                    </div>

                    <div className='w-full md:w-[48%]'>
                        <div className='text-center mb-[48px]'>
                            <Image src="/assets/images/serve.svg" alt="img" className='block m-auto' width={175} height={173} />
                            <h3 className='info-16-28 captialize font-semibold pt-[17px]'>Exclusive Services</h3>
                        </div>
                        <ul className=' rounded-sm border-2 border-[#ebebeb] md:px-10 p-5 md:pt-10 md:pb-14'>
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Influence</h5>
                                <p className=' info-14-16 text-[#929899]'>Monetize your influence by providing millions of Bitget users your trading strategy.</p>
                            </li>    
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Increase credibility</h5>
                                <p className=' info-14-16 text-[#929899]'>Elite Star Traders can be certified by Bitget and gain exposure to extend their reach.</p>
                            </li>    
                            <li className='list-disc md:mb-10 mb-5'>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Prize pools</h5>
                                <p className=' info-14-16 text-[#929899]'>Be in the running for exclusive prize pools on a regular basis.</p>
                            </li>    
                            <li className='list-disc '>
                                <h5 className='mb-2 info-16-22 text-black font-semibold'>Exclusive support</h5>
                                <p className=' info-14-16 text-[#929899]'>Your feedback will be prioritized & receive exclusive professional support.</p>
                            </li>    
                        </ul>                           
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TraderPrivilege