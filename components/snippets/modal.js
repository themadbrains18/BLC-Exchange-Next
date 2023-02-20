import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Context from '../contexts/context'

const Modal = ({ setShow }) => {
    const { click, setClick } = useContext(Context)
    const [step, setStep] = useState(1)
    return (
        <div className='h-[100vh] w-full grid place-items-center absolute top-0 right-0 rounded-2xl'>
            <div className={`bg-white  ${click && 'z-20'} rounded-lg md:rounded-2xl grow`}>
                <div className={`md:min-w-[500px] md:w-full min-w-[300px] h-[600px] flex flex-col justify-between`} >
                    <div>
                        <div className='flex justify-between p-4 '>
                            <button className={`${step !== 1 ? 'block' : 'hidden'}`} onClick={() => setStep(step - 1)}>
                                <img src='/assets/icons/back-arrow.svg'></img>
                            </button>
                            <button className='ml-auto' onClick={(() => {
                                setShow(false)
                                setClick(false)
                            })}>

                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                                </svg>
                            </button>
                        </div>

                        <div>
                            {step === 1 &&

                                <div className='flex flex-col mt-8 p-4 '>
                                    <p className='section-secondary-heading self-center'>Verify your identity</p>
                                    <p className='info-14-16 self-center'>It should take a few minutes</p>
                                    <p className=' info-14-16 mt-4 self-center'>Use your webcam or phone to photograph:</p>
                                    <p className=' info-14-16 self-center'>your identity document</p>
                                    <p className=' info-14-16 mt-4 self-center'>your face</p>
                                </div>
                            }
                            {step === 2 &&

                                <div className='flex flex-col mt-8 p-4 '>
                                    <p className='section-secondary-heading self-center'>Submit identity card (front)</p>
                                    <p className='info-14-16 self-center'>Take a photo with your phone</p>
                                    <div className='my-14 bg-border-clr p-8 self-center rounded-[50%]'>
                                        <Image src='/assets/icons/take-photo.svg' alt='error' width={72} height={72}></Image>
                                    </div>


                                </div>
                            }
                            {step === 3 &&

                                <div className='flex flex-col mt-8 p-4 '>
                                    <p className='section-secondary-heading self-center'>Submit identity card (back)</p>
                                    <p className='info-14-16 self-center'>Take a photo with your phone</p>
                                    <div className='my-14 bg-border-clr p-8 self-center rounded-[50%]'>
                                        <Image src='/assets/icons/take-photo.svg' alt='error' width={72} height={72}></Image>
                                    </div>


                                </div>
                            }
                            {step === 4 &&

                                <div className='flex flex-col mt-8 p-4 '>
                                    <p className='section-secondary-heading self-center'>Continue on your phone</p>
                                    <p className='info-14-16 self-center'>Here’s how to do it:</p>
                                    <div className='flex flex-col gap-4 justify-center mt-6'>

                                        <div className='flex gap-4'>
                                            <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                <Image src='/assets/icons/step1kyc.svg' alt='error' width={48} height={48}></Image>
                                            </span>
                                            <p className='self-center info-14-16'>Send a secure link to your phone</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                <Image src='/assets/icons/srep2kyc.svg' alt='error' width={48} height={48}></Image>
                                            </span>
                                            <p className='self-center info-14-16'>Open the link and complete the tasks</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                <Image src='/assets/icons/step3kyc.svg' alt='error' width={48} height={48}></Image>
                                            </span>
                                            <p className='self-center info-14-16'>Check back here to finish the submission</p>
                                        </div>
                                    </div>


                                </div>
                            }
                            {step === 5 &&

                                <div className='flex flex-col mt-8 p-4 justify-center items-center'>
                                    <p className='section-secondary-heading self-center'>Get your secure link</p>
                                    <p className='info-14-16 self-center'>Scan the QR code with your phone</p>
                                    <Image src='/assets/images/qr.png' alt='error' width={120} height={80} className='mt-5 '></Image>
                                    <div className='flex gap-2  mt-6'>
                                        <Image src='/assets/icons/questionmark.svg' alt='error' width={20} height={20}></Image>
                                        <p className='underline info-14 text-black'>How to scan a QR code</p>
                                    </div>
                                    <p className='info-14 mt-6'>Choose an alternative method</p>
                                    <div className='flex gap-4 mt-9'>
                                        <div className='flex'>
                                            <Image src='/assets/icons/message.svg' alt='error' width={20} height={20}></Image>
                                            <p className='underline info-14 text-black'>Get link via SMS</p>
                                        </div>
                                        <div className='flex'>
                                            <Image src='/assets/icons/link.svg' alt='error' width={20} height={20}></Image>
                                            <p className='underline info-14 text-black'>Copy link</p>
                                        </div>

                                    </div>

                                </div>
                            }

                            {step === 6 &&

                                <div className='flex flex-col mt-8 p-4 '>
                                    <p className='section-secondary-heading self-center'>One final step</p>
                                    <p className='info-14-16 self-center'>Here’s everything you’ve uploaded:</p>
                                    <div className='flex flex-col mx-auto gap-7 my-12'>
                                        <div className='flex gap-3'>
                                            <Image src='/assets/icons/tick.svg' alt='error' width={20} height={20}></Image>
                                            <p>Document</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <Image src='/assets/icons/tick.svg' alt='error' width={20} height={20}></Image>
                                            <p>Selfie</p>
                                        </div>
                                    </div>


                                </div>

                            }
                        </div>
                    </div>

                    <div className='my-7 flex justify-center flex-col'>
                        <button className='cta self-center' onClick={() => {
                             if(step!==6){

                                 setStep(step + 1) 
                             }
                             else{
                                setShow(false)
                             }
                             
                             }} >{step === 1 ? 'Choose Document' : step===2 ? 'Continue on Phone': step===3 ? 'Continue on Phone':step===4 ? 'Get Secure Link':step===5 ? 'Get Secure Link':'Submit Documents'}</button>
                        
                        <div className={`mx-auto mt-3 ${step===2  ? 'block': step===3  ? 'block': 'hidden'}`}>
                        <input id="fileUpload" type='file' placeholder='or upload photo' className='hidden'></input>
                        <label htmlFor='fileUpload' className='underline '>or Choose file </label>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
