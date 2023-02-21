import Image from 'next/image'
import React,{useState} from 'react'
import Welfare from './welfare'
import Link from 'next/link'

const Assets = () => {
    const [show, setShow] = useState(true);
    return (
        <section className=' px-8 py-3 md:py-5'>

             <div className='my-10 p-4 border rounded-md border-clr-2 gap-7 flex justify-between items-center'>
                <div>
                <p className='info-14-16 mb-2'>Verification</p>
                <p className='info-14-16'>Once verification is completed, you will have a higher withdrawal limit.</p>
                </div>
                <Link href="/dashboard/verified" className='text-primary border border-primary rounded-lg px-3 py-2'>Verify</Link>
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
                            <p className='section-secondary-heading'>{show ? <span>000.00000</span> : <span>****</span>}{" "}</p>
                            <p className='self-end info-14-16'>BTC</p>
                            <p className='self-end info-14-16'>≈$ {show ? <span>0</span> : <span>***</span>}{" "}</p>
                            <button
                className="eyeIcon"
                onClick={() => {
                  setShow(!show);
                }}
                
              >
                {show ? (
                  //   open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    fill="transparent"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // close eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    fill="transparent"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
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
