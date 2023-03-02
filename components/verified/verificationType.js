import Image from 'next/image';
import React, { useState, useRef, useEffect, useContext } from 'react'
import SearchDropdown from '../snippets/search-dropdown';
import Step1 from './step1';
import Context from '../contexts/context';

const VerificationType = ({session}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [active, setActive] = useState(1)
    const [countryName, setCountryName] = useState('Botswana')
    const [step, setStep] = useState(0)
    const dropdown = useRef(null);
    const { mode } = useContext(Context)
    useEffect(() => {
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [])
    return (
        <section className=' dark:bg-black-v-5 '>

            <div className='flex gap-4 items-center'>
                <button className={`${(step === 1 && session?.kycstatus === false) ? 'block' : 'hidden'}`} onClick={() => setStep(step - 1)}>
                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z" fillRule="evenodd" />
                                </svg>
                </button>
                <p className='section-secondary-heading'>ID Verification</p>
                <p className='info-12 bg-border-clr  rounded-sm'>Unverified</p>
            </div>
            {session?.kycstatus === false || session?.kycstatus === null ?
                step == 0 ?
                    <>
                        <div className='mt-11'>
                            <div className=' max-w-lg'>
                                <p className='info-14'>Country / Region</p>
                                {/* <div className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-lg w-full flex items-center gap-2 justify-between mt-4' onClick={(e) => { setShowDropdown(!showDropdown) }} ref={dropdown}>
                                    <span className="text-black dark:text-white" id="countryName">{countryName}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    {
                                        showDropdown != false &&
                                        <SearchDropdown setShowDropdown={setShowDropdown} country={true} setCountryName={setCountryName} />
                                    }
                                </div> */}
                                <div className="my-8 relative" ref={dropdown}>
                                    <div className='info-14 hover:!text-grey inline-flex items-center gap-3 cursor-pointer border-b-2 border-border-clr hover:border-primary w-full' onClick={(e) => { setShowDropdown(!showDropdown) }} >
                                        <div className="flex items-center gap-2 justify-between w-full">
                                            <p className="text-black dark:text-white text-end" id="countryName">{countryName}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={mode === "dark" ? "white" : "#121313"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                        </div>
                                    </div>
                                    {
                                        showDropdown != false &&
                                        <SearchDropdown setShowDropdown={setShowDropdown} country={true} setCountryName={setCountryName} />
                                    }
                                </div>
                            </div>

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
                        <button className='cta mt-6' onClick={() => { setStep(1) }}>Verify Now</button>
                    </>
                    :
                    <div>

                        <Step1 countryName={countryName} />
                    </div>
                :
                <>
                    <div className='max-w-full sm:max-w-max mt-6'>
                        <div className='w-full border  border-border-clr px-8 rounded flex gap-4 flex-col md:flex-row justify-center md:items-center  py-3'>
                            <div className='flex  items-center gap-4'>
                                <img src='/assets/icons/account.svg' alt='eror' className='w-20'></img>
                                <h4 className='info-14-16 md:hidden font-bold '>Account Details</h4>
                            </div>
                            <div className='mt-4 '>
                                <h4 className='info-14-16 hidden md:block mb-4'>Account Details</h4>
                                <div className='flex flex-col md:flex-row gap-4'>
                                    <div className=' flex justify-between md:flex-col'>
                                        <p className='info-14'>Nationality</p>
                                        <p className='info-14'>-</p>
                                    </div>
                                    <div className=' flex justify-between md:flex-col'>
                                        <p className='info-14'>Name</p>
                                        <p className='info-14'>-</p>
                                    </div>
                                    <div className=' flex justify-between md:flex-col'>
                                        <p className='info-14'>Identity no.</p>
                                        <p className='info-14'>-</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='max-w-lg w-full bg-table-bg rounded-xl mt-7 info-14'>
                        <p className='py-10 px-7 ' >

                            Your identification information has been submitted. We will inform you as soon as the review is completed.
                        </p>
                    </div>
                </>

            }

        </section>
    )
}

export default VerificationType
