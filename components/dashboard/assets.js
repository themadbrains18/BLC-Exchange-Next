import Image from 'next/image'
import React from 'react'
import Welfare from './welfare'

const Assets = () => {
    return (
        <section className=' px-8 py-3 md:py-5'>

             <div className='my-10 p-4 border rounded-md border-clr-2 gap-7 flex justify-between items-center'>
                <div>
                <p className='info-14-16 mb-2'>Verification</p>
                <p className='info-14-16'>Once verification is completed, you will have a higher withdrawal limit.</p>
                </div>
                <button className='text-primary border border-primary rounded-lg px-3 py-2'>Verify</button>
            </div>
            <div className='xl:hidden'>
                <Welfare/>
            </div>
            <div className='mt-5 xl:mt-0 flex justify-between flex-wrap'>
                <div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-5 items-center' >
                            <p className='section-secondary-heading'>Total assets</p>
                            <img src='/assets/images/download-right-arrow.png' alt='error' className='mt-2'></img>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='section-secondary-heading'>0.00000000</p>
                            <p className='self-end info-14-16'>BTC</p>
                            <p className='self-end info-14-16'>≈$ 0</p>
                            <Image src='/assets/icons/pass-show.svg' width={16} height={16}></Image>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 md:mt-0 items-end gap-4'>
                    <button className='border border-primary info-14-16 !text-white px-2 py-1 w-max md:w-full bg-primary rounded hover:!text-white'>Buy Crypto</button>
                    <button className='border border-primary info-14-16 px-2 py-1 rounded text-primary'>Deposit</button>
                    <button className='border border-primary info-14-16 px-2 py-1 rounded text-primary'>Withdraw</button>

                </div>
            </div>
        </section>
    )
}

export default Assets
