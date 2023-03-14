import Image from 'next/image'
import React from 'react'
import futureSpot1 from '../../public/assets/icons/futureSpot1.svg';
import futureSpotArrow from '../../public/assets/icons/futureSpotArrow.svg';
import Link from "next/link";


const FutureSpot = () => {
    return (
        <>
            <section className='dark:bg-black-v-3 py-10 md:py-20'>
                <div className='container '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4'>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto  dark:text-white text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="none"><path d="M24.746 8.707a1 1 0 000-1.414L18.383.929a1 1 0 00-1.415 1.414L22.625 8l-5.657 5.657a1 1 0 001.415 1.414l6.363-6.364zM.04 9h24V7h-24v2z" fill="#0D0E0E " className='dark:fill-white' /></svg>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto dark:text-white text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="none"><path d="M24.746 8.707a1 1 0 000-1.414L18.383.929a1 1 0 00-1.415 1.414L22.625 8l-5.657 5.657a1 1 0 001.415 1.414l6.363-6.364zM.04 9h24V7h-24v2z" fill="#0D0E0E " className='dark:fill-white' /></svg>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto dark:text-white text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="none"><path d="M24.746 8.707a1 1 0 000-1.414L18.383.929a1 1 0 00-1.415 1.414L22.625 8l-5.657 5.657a1 1 0 001.415 1.414l6.363-6.364zM.04 9h24V7h-24v2z" fill="#0D0E0E " className='dark:fill-white' /></svg>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto dark:text-white text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="none"><path d="M24.746 8.707a1 1 0 000-1.414L18.383.929a1 1 0 00-1.415 1.414L22.625 8l-5.657 5.657a1 1 0 001.415 1.414l6.363-6.364zM.04 9h24V7h-24v2z" fill="#0D0E0E " className='dark:fill-white' /></svg>
                                {/* <Image src={futureSpotArrow} width={26} height={15} className='h-[15px] dark:fill-white'></Image> */}
                            </Link>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
}

export default FutureSpot