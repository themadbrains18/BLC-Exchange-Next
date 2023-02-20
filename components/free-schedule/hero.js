import React from 'react';
import Image from 'next/image';
import schedualHero from '../../public/assets/images/free-schedual-hero.png';
const Hero = () => {
  return (
    <section className='py-[80px] dark:bg-black '>
        <div className='container'>
            <div className="flex items-center gap-4 flex-col-reverse  md:flex-row ">
                <div className="max-w-full md:max-w-[50%] w-full">
                    <h3 className='section-secondary-heading mb-7'>Free Schedule</h3>
                    <p className='info-14-20 mb-4'>Use BGB to deduct fees <a href={"/login"} className="text-primary">Login</a></p>
                    <p className="info-14-16">Enjoy larger discounts and more privileges <a href={"#"} className="text-primary block md:inline">VIP Privileges</a> </p>
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