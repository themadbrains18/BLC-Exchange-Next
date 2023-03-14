import React, { useContext, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Context from "../contexts/context";

function Banner() {
    const { mode } = useContext(Context);
    return (
        <section className='copy_Trade_Banner dark:bg-black md:pb-[50px] pb-[30px] pt-5'>
            <div className='container'>
                <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                    <div className='max-w-full md:max-w-[55%] w-full'>
                        <h1 className='section-heading-32-48'>Star Trader Recruitment Program</h1>
                        <p className='info-14-16 md:mt-[17px] mt-[10px] md:mb-[33px] mb-[22px]'>
                            Earn alongside industry leading traders and share your strategies with over 2,000,000 users on BLC Exchange to earn lucrative profits and exclusive privileges
                        </p>

                        <div className='flex gap-4 items-center flex-wrap justify-center md:justify-start'>
                            <Link href="/" className='cta block rounded-[8px] border-2 border-[#1da2b4] max-w-[192px] w-full text-center '>Join as a Trader</Link>
                            <Link href="/" className='cta2 block rounded-[8px] border-2' >Try following a Trader</Link>
                            <Link href="/" className='block border-[0.5px] rounded-[4px] p-[8px] border-[#b6bfc7]'>
                                <Image src="/assets/icons/share.png" alt="img" className='block' width={28} height={28} />
                            </Link>
                        </div>
                    </div>
                    <div className='max-w-[75%] md:max-w-[45%] w-full  '>
                        <Image src="/assets/images/copyTradeBanner.svg" alt="img" className='my-0 mx-[auto]' width={530} height={480} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner