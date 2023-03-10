import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function VotingCard() {
  return (
    <section>
        <div className='flex gap-5 flex-col md:flex-row  rounded-md md:rounded-none md:p-0 border-border-clr p-4 border-2 md:border-0' >
            <div className= 'w-full md:w-[63%] relative'> 
                <span className='flex gap-2 items-center'>
                    <Image src="/assets/icons/share.png" alt="img" className='block' width={40} height={40} />
                    <h2 className='info-14-24 font-semibold'>Vote for MetaShooter (MHUNT)</h2>   
                </span>
                <p className='truncate mt-[16px] info-14-16 text-[#606465]'>
                    MetaShooter is the first decentralized blockchain-based hunting metaverse. Experience realistic hunting in the open world and develop many activities with monetization opportunities in MetaShooter. 
                </p>
                <div className='flex gap-3  justify-between mt-[20px] md:mt-[30px]] flex-wrap md:flex-nowrap'>
                    <div className='flex gap-3 md:w-[50%] w-[100%]'>
                        <div className='w-[50%] md:w-[100%]'>
                            <span className='block info-14-20 text-[#1da2b4] '>540,000</span>
                            <span className='block mt-[10px] text-[14px]  font-normal font-noto leading-[26px] dark:text-grey text-[#606465]'>Prize pool( MHUNT) </span>
                        </div>
                        <div className='w-[50%] md:w-[100%]'>
                            <span className='block info-14-20 text-[#5b5b5b] '>1,000,000</span>
                            <span className='block mt-[10px] text-[14px]  font-normal font-noto leading-[26px] dark:text-grey text-[#606465]'>Minimum votes required</span>
                        </div>
                    </div>
                    <div className='flex gap-3 md:w-[50%] w-[100%]'>
                        <div className='w-[50%] md:w-[100%]'>
                            <span className='block info-14-20 text-[#5b5b5b] '>1,673,707</span>
                            <span className='block mt-[10px] text-[14px]  font-normal font-noto leading-[26px] dark:text-grey text-[#606465]'>Totle Votes</span>
                        </div>
                        <div className='w-[50%] md:w-[100%]'>
                            <span className='block info-14-20 text-[#5b5b5b] '>2022-08-16 15:30</span>
                            <span className='block mt-[10px] text-[14px]  font-normal font-noto leading-[26px] dark:text-grey text-[#606465]'>End Time</span>
                        </div>
                    </div> 
                </div>

                <div>
                    <Link href="/" className='mt-[20px] md:mt-[30px] w-full max-w-full md:max-w-[425px] block text-center bg-[#f5f4f4] rounded-lg p-[15px] info-14-16 ' >
                        Event Ended
                    </Link>
                </div>
                <Image src="/assets/icons/completed-icon.svg" alt="img" className='block absolute top-[50%] translate-x-[20%] md:-translate-x-[0%] -translate-y-[50%] md:-translate-y-[0%] md:top-0 md:right-0 scale-50 md:scale-100' width={280} height={279} />
            </div>
            <div className='w-full hidden md:block md:w-[37%] overflow-hidden '>
                <Image src="/assets/images/dumyCard.png" alt="img" className='block m-auto hover:scale-105 duration-500' width={440} height={308} />
            </div>
        </div>
    </section>
  )
}

export default VotingCard