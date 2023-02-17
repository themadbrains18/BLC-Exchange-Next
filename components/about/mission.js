import React, { useContext } from 'react';
import Image from 'next/image';

import AboutUsImg from "../../public/assets/images/banneraboutus.png";
import Context from '../contexts/context';
const Mission = () => {
    const { mode }=useContext(Context)
    return (
        <div>
            <section className=" pb-20 pt-[120px]"
            style={{
                backgroundColor:`${mode === "dark" ?"rgba(30,30,30,0.9)":'#f8f8f8'}`,
                backgroundImage:"url('/assets/icons/banner-bg-about.svg')",
                backgroundRepeat:'no-repeat',
                backgroundPosition:'100px top',
                backgroundSize: '100% 100%'

            }}>
                <div className="container ">
                    <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5  md:text-left'>
                        <div className='max-w-full md:max-w-[48%] w-full'>
                            <h1 className='hero-heading text-4xl font-semibold md:text-[56px] font-noto mb-6 dark:text-grey'>BLC-Exchange's Mission</h1>
                            <p className='info-14-20 text-base md:text-xl  mb-7 md:mb-12 dark:text-grey'>As one of the world's leading cryptocurrency exchanges, BLC-Exchange is on a
                                mission to inspire individuals to embrace crypto and connect with the
                                future.
                            </p>
                            <p className='info-14-20 text-base md:text-xl mt-6 md:mt-10 dark:text-grey'>To accomplish this, BLC-Exchange aims to be the portal that transcends Web2 and
                                Web3, connects CeFi and DeFi, and bridges the vast web of crypto.

                            </p>
                        </div>
                        <div className='max-w-[80%] md:max-w-[48%] w-full'>
                            <Image src={AboutUsImg} alt="hero-img" width="450px" height="400px" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mission
