import Image from 'next/image';
import React, { useState } from 'react'
import SearchDropdown from '../snippets/search-dropdown';
import Step1 from './step1';

const VerificationType = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [active, setActive] = useState(1)
    const [step, setStep] = useState(0)
    return (
        <section className=' dark:bg-black-v-3 '>
           
                <div className='flex gap-4 items-center'>
                    <p className='section-secondary-heading'>ID Verification</p>
                    <p className='info-12 bg-border-clr  rounded-sm'>Unverified</p>
                </div>
                {step == 0 ?
                <>
                <div className='mt-11'>
                    <span>
                        <p className='info-14'>Country / Region</p>
                        <span className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-lg w-full flex items-center gap-2 justify-between mt-4' onClick={(e) => { setShowDropdown(!showDropdown) }}>
                            <span className="text-black dark:text-white" id="countryName">Botswana</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                            {
                                showDropdown != false &&
                                <SearchDropdown setShowDropdown={setShowDropdown} country={true} />
                            }
                        </span>
                    </span>

                </div>
                <div className='flex flex-col lg:flex-row mt-5 gap-7'>
                    <div className={`p-6  border-2 box-border border-primary rounded-lg flex gap-2 ${active === 1 ? 'border-2 ' : 'border-none'} `} onClick={() => { setActive(1) }}>
                        <div>
                            <input type='checkbox' checked={active === 1 ? 'checked' : ''} />
                        </div>
                        <div>
                            <p className='info-14-24'>Individual Verification</p>
                            <div className='flex flex-col md:flex-row gap-6 mt-4'>
                                <div className='flex flex-col gap-4'>
                                    <p className='info-14'>Benefits</p>
                                    <p className='info-14 text-black'>200 BTC Daily withdrawal limit</p>
                                    <p className='info-14 text-black'>Fiat currency trading</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='info-14'>Requirements</p>
                                    <span className='flex gap-2'>
                                        <Image src='/assets/icons/id-card.svg' width={14} height={14} alt='error'></Image>
                                        <p className='info-14 text-black'>ID Card</p>
                                    </span>
                                    <span className='flex gap-2'>
                                        <Image src='/assets/icons/selfie.svg' width={14} height={14} alt='error'></Image>
                                        <p className='info-14 text-black'>Your photo</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`p-6  border-2 box-border border-primary rounded-lg flex gap-2 ${active === 2 ? 'border-2 ' : 'border-none'} `} onClick={() => { setActive(2) }}>
                        <div>
                            <input type='checkbox' checked={active === 2 ? 'checked' : ''} />
                        </div>
                        <div>
                            <p className='info-14-24'>Institution Verification</p>
                            <div className='flex flex-col md:flex-row gap-6 mt-4'>
                                <div className='flex flex-col gap-4'>
                                    <p className='info-14'>Benefits</p>
                                    <p className='info-14 text-black'>200 BTC Daily withdrawal limit</p>
                                    <p className='info-14 text-black'>Fiat currency trading</p>
                                    <p className='info-14 text-black'>One-on-one service</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='info-14'>Requirements</p>
                                    <span className='flex gap-2'>
                                        <Image src='/assets/icons/license.svg' width={14} height={14} alt='error'></Image>
                                        <p className='info-14 text-black'>License</p>
                                    </span>
                                    <span className='flex gap-2'>
                                        <Image src='/assets/icons/certificate.svg' width={14} height={14} alt='error'></Image>
                                        <p className='info-14 text-black'>Business certificate</p>
                                    </span>
                                    <span className='flex gap-2'>
                                        <Image src='/assets/icons/corporate-id.svg' width={14} height={14} alt='error'></Image>
                                        <p className='info-14 text-black'>Corporate ID</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className='cta mt-6' onClick={()=>{ setStep(1)}}>Verify Now</button>
                </>
                :
                <div>

                    <Step1 />
                </div>
            }
            
        </section>
    )
}

export default VerificationType
