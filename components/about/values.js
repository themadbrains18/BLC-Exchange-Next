import React from 'react'
import Transparency from '../../public/assets/images/transparency.png'
import Collab from '../../public/assets/images/collaboration.png'
import Focused from '../../public/assets/images/focused.png'
import Image from 'next/image'
const Values = () => {
  return (
    <section className='bg-white dark:bg-black-v-5 py-[80px] md:py-[120px]  '>
            <div className="container ">
                <h1 className='dark:text-white text-4xl leading-10 font-bold'>Our Values</h1>
                <div className='flex justify-around items-center mt-14'>
                    <div className='flex flex-col items-center'>
                        <Image src='/assets/images/transparency.png' width={120} height={120} alt='error'></Image>
                        <p className='info-14-24 mt-8'>Transparency</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src='/assets/images/collaboration.png' width={120} height={120} alt='error'></Image>
                        <p className='info-14-24 mt-8'>Collaboration</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src='/assets/images/focused.png' width={120} height={120} alt='error'></Image>
                        <p className='info-14-24 mt-8'>Customer-oriented</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Values
