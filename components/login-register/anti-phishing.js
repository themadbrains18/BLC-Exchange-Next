import React from 'react';
import Link from 'next/link';

const AntiFishing = () => {
  return (
    <div className="bg-[#0d0e0e78] py-[80px] h-full flex fixed top-[50%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="container !p-0">
            <div className="bg-white dark:bg-black-v-5 max-w-full md:max-w-[480px] w-full p-3 sm:p-6 border border-grey m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
              <h4 className='section-secondary-heading mb-1 '>Anti-phishing Verification</h4>
              <p classname="info-12"> Please make sure your web browser shows one of the correct SSL URLs</p>
              <p className='info-14 !text-primary bg-[#f3f7fe] text-center p-[12px] mt-3'>https://blcexchange.net</p>
              <Link href="/" className='cta mt-5 block w-full text-center'>Confirm</Link>
            </div>
        </div>
    </div>
  )
}

export default AntiFishing;