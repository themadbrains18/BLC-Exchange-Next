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
                            <h3 className='font-noto text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <Image src={futureSpotArrow} width={26} height={15} className='h-[15px]' ></Image>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <Image src={futureSpotArrow} width={26} height={15} className='h-[15px]' ></Image>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <Image src={futureSpotArrow} width={26} height={15} className='h-[15px]' ></Image>
                            </Link>
                        </div>
                        <div className=' p-6 border-[1px] rounded-xl'>
                            <Image src={futureSpot1} width={72} height={72} className='mb-6' ></Image>
                            <h3 className='font-noto text-2xl mb-6'>Futures grid</h3>
                            <ul className='list-disc pl-4 mb-10'>
                                <li className='info-14 font-medium'>Leverage your capital</li>
                                <li className='info-14 font-medium'>Automate your trades even when prices fluctuate</li>
                                <li className='info-14 font-medium'>Profit from sideways markets with grid bots</li>
                            </ul>
                            <Link href={"#"} className="text-xl font-medium text-black  dark:text-primary flex items-center gap-2">
                                Create
                                <Image src={futureSpotArrow} width={26} height={15} className='h-[15px]' ></Image>
                            </Link>
                        </div>


                    </div>
                </div>

            </section>
        </>
    )
}

export default FutureSpot