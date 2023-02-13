import React from 'react';
import Image from 'next/image';

import heroImg from "../../public/assets/images/hero-img.png";
import Signup from '../snippets/signup';
const Hero = () => {
  return (
    <section className='dark:bg-black py-20'>
      <div className="container">
        <div className='flex items-center justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
          <div className='max-w-full md:max-w-[48%] w-full'>
            <h1 className='hero-heading'>AI Asset Carnival,<br />4 BTC Prizes Await</h1>
            <p className='info-14-20 mt-6 md:mt-10'>February 7, 2023, 16:00 - February 10, 2023, 20:00</p>
            {/* signup form */}
            <Signup />
          </div>
          <div className='max-w-[80%] md:max-w-[48%] w-full'>
            <Image src={heroImg} alt="hero-img" width="450px" height="400px" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;