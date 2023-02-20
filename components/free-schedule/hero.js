import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import schedualHero from '../../public/assets/images/free-schedual-hero.png';
const Hero = () => {
  return (
    <section className='py-[80px] dark:bg-black '>
        <div className='container'>
            <div className="flex items-center gap-4 flex-col-reverse  md:flex-row ">
                <div className="max-w-full md:max-w-[50%] w-full">
                    <h3 className='section-secondary-heading mb-7'>Free Schedule</h3>
                    <p className='info-14-20 mb-4'>Use BGB to deduct fees <Link href="/login" className="text-primary">Login</Link></p>
                    <p className="info-14-16">Enjoy larger discounts and more privileges <Link href="#" className="text-primary block md:inline">VIP Privileges</Link> </p>
                </div>
                <div className="max-w-full md:max-w-[50%] w-full">
                    <Image src={schedualHero} alt="" width={500} height={250} className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;