import React from 'react'
import Image from 'next/image';

import apple from '../../public/assets/icons/apple-os.svg';
import android from '../../public/assets/icons/android-os.svg';
import playStore from '../../public/assets/icons/play-store.svg';
import api from '../../public/assets/icons/api-svg.svg';





const Download = () => {
  return (
    <section className='py-20 dark:bg-[#131414] '>
      <div className="container  justify-between flex flex-col items-center lg:flex-row">
        <div className=''>
          <div className='hero-heading mb-6'>Trade anytime, anywhere</div>
          <p className='info-14-24 mb-6'> Download our app to stay connected 24/7.</p>

          <div className='flex border border-primary rounded-lg items-center p-6 mb-7'>
            <div >
              <Image src='/assets/images/downloadScan.png' height={100} width={100} alt='error'></Image>
            </div>
              <div className='ml-10'>
                <p className='info-14-16'> Scan to Download</p>
                <p className='section-secondary-heading'>iOS & Android</p>
              </div>
          </div>



          <div className='flex gap-1 justify-between max-w-lg'>
            <div className='flex flex-col justify-center items-center '>       
              <Image src={apple} alt="error" height={32} width={32} className='rounded-xl mb-7 ' />
              <p className='info-14-16'>App Store</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <Image src={playStore} alt="error"  height={32} width={32} className='rounded-xl mb-7' />
              <p className='info-14-16'>Google Play</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <Image src={android} alt="error" height={32} width={32} className='rounded-xl mb-7' />
              <p className='info-14-16'>Android APK</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <Image src={api} alt="error" height={32} width={32} className='rounded-xl mb-7' />
              <p className='info-14-16'>API</p>
            </div>
          </div>
        </div>
        <div className='items-center mt-8 lg:mt-0 lg:ml-24 lg:mb-12 '>
          <img src='/assets/images/downloadPcDark.png' alt='error' className='w-[587px]'></img>
        </div>
      </div>
    </section>
  )
}

export default Download
