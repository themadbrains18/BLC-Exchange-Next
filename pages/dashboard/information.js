import React from 'react'

function Information() {
  return (
    <section className='mt-12 ml-[33px]' > 
      <h2 className='mb-5'>Institutional Verification</h2>
      <span className='block py-[14px] px-[18px] bg-[#f9f9f9]'>
        Before starting the institution verification, please prepare the following documents in advance.
      </span>
      <ul  className='ml-[30px] mt-6 mb-12 '>
        <li className='flex items-center gap-2 mb-4'>
          <span className='w-[7px] h-[7px] bg-[#1da2b4] block' ></span>
          <span className='block info-14 text-black'>Certificate of Incorporation</span>
        </li>
      </ul>

    </section>
  )
}

export default Information