import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function FollowerBenefits() {
  return (
    <section className='startTraderPrivilege dark:bg-black md:pt-[80px] pt-[40px]'>
        <div className='container'>
            <div className='text-center mb-5 md:mb-12'>
                <h2 className='heading-28-40 font-semibold capitalize '>Follower Benefits</h2>
                <p className='info-14-16'>Copy traders and start earning with a peace of mind</p>
            </div>
            <ul className='flex gap-4 md:flex-row flex-wrap' >
                <li className='md:max-w-[385px] w-full p-[30px] bg-[#f9f9f9] rounded-sm flex flex-col'>
                    <Image src="/assets/images/followers1.svg" alt="img" className='block m-auto' width={250} height={290} />
                    <div>
                        <h3 className='info-16-28 font-medium md:mt-[62px] mt-[30px] md:mb-4 mb-2'>Profit easily</h3>
                        <p className='info-14-16 text-[#929899]'>Browse through our thousands of BLC Exchange traders and follow them seamlessly</p>
                    </div>
                </li>
                <li className='md:max-w-[385px] p-[30px] bg-[#f9f9f9] rounded-sm flex md:flex-col-reverse flex-col'>
                    <Image src="/assets/images/followers2.svg" alt="img" className='block m-auto md:mt-[62px] mt-[30px]' width={250} height={290} />
                    <div>
                        <h3 className='info-16-28 font-medium md:mb-4 mb-2'>Safe and reliable</h3>
                        <p className='info-14-16 text-[#929899] '>Ensure a strong performance with accessible and transparent trader records from multiple dimensions.</p>
                    </div>
                </li>
                <li className='md:max-w-[385px] p-[30px] bg-[#f9f9f9] rounded-sm flex flex-col'>
                    <Image src="/assets/images/followers3.svg" alt="img" className='block m-auto' width={250} height={290} />
                    <div>
                        <h3 className='info-16-28 font-medium md:mt-[62px] mt-[30px] md:mb-4 mb-2'>Operate flexibly</h3>
                        <p className='info-14-16 text-[#929899]' >You can modify your margin, stop copying or close your positions to lock in profits at any time.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
export default FollowerBenefits