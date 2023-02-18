import Image from 'next/image'
import React from 'react'
import Welfare from './welfare'

const Assets = () => {
    return (
        <section className='bg-white dark:bg-black-v-5 px-8 py-10 md:py-5'>

             <div className='my-10 p-4 border rounded-md border-clr-2 gap-7 flex justify-between items-center'>
                <div>
                <p className='info-14-26 mb-2'>Verification</p>
                <p>Once verification is completed, you will have a higher withdrawal limit.</p>
                </div>
                <button className='text-primary border border-primary rounded-lg px-3 py-2'>Verify</button>
            </div>
            <div className='xl:hidden'>
                <Welfare/>
            </div>
            <div className='flex justify-between flex-wrap'>
                <div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex gap-5 items-center' >
                            <p className='section-secondary-heading'>Total assets</p>
                            <img src='/assets/images/download-right-arrow.png' alt='error' className='mt-2'></img>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='section-secondary-heading'>0.00000000</p>
                            <p className='self-end'>BTC</p>
                            <p className='self-end'>≈$ 0</p>
                            <Image src='/assets/icons/pass-show.svg' width={16} height={16} className='mt-4'></Image>
                        </div>
                    </div>
                </div>
                <div className='flex items-end gap-4'>
                    <button className='border border-primary info-14 text-white px-2 py-1 bg-primary rounded hover:!text-white'>Buy Crypto</button>
                    <button className='border border-primary info-14 px-2 py-1 rounded text-primary'>Deposit</button>
                    <button className='border border-primary info-14 px-2 py-1 rounded text-primary'>Withdraw</button>

                </div>
            </div>
        </section>
    )
}

export default Assets
