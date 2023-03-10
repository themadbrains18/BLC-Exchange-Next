import React from 'react'
import { useContext, useState } from 'react'
import Layout from 'components/layout/Layout'
import Context from 'components/contexts/context';
import Link from 'next/link';
import VerificationCode from './../../components/login-register/verification-code';
import Image from 'next/image';

const Prefernces = ({sessions, lastLogin}) => {
    const { mode, setClick } = useContext(Context);
    const [showSafteyV, setShowSafteyV] = useState(0);
    const [SetState, showSetState] = useState(0);
    return (
        <section className="w-full  ">
            <div className="mb-[20px]">
                <h3 className="section-secondary-heading mb-6"> Settings</h3>
                <div className="divide-y px-0 sm:px-[24px] shadow-lg dark:shadow-[#1da2b41c] rounded-lg	">
                    <div className="py-[20px]">
                        <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Profile</p>
                    </div>
                    <div>
                        <div className="flex items-center flex-row  justify-between py-[20px] gap-5 ">
                            <div className="flex gap-[18px] flex-row grow md:items-center">
                                <div className='text-start'>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Avatar</p>
                                    <p className="info-12 ">Customize your avatar</p>
                                </div>
                            </div>
                            <div className='flex gap-3 md:gap-6 items-center'>
                                <Image src='/assets/images/avatar-default.jpg' width={30} height={30} className='rounded-3xl'></Image>
                                <button type='file' className='cta' href="">Change</button>
                            </div>
                        </div>

                        <div className="flex items-center flex-row  justify-between py-[20px] gap-5">
                            <div className="flex gap-[18px] flex-row  grow items-center">
                                <div className='text-start '>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Username</p>
                                    <p className="info-12 ">Set your own username</p>
                                </div>
                            </div>
                            <div className='flex gap-3 md:gap-6 items-center'>
                                <p className='info-14'>BLCUSER-{sessions !== undefined && sessions.own_code}</p>
                                {/* <button className='cta' onClick={() => { setClick(true); setShowSafteyV(1) }}> Change</button> */}
                            </div>
                        </div>

                        <div className="flex items-center flex-row  justify-between py-[20px] gap-5">
                            <div className="flex gap-[18px] flex-row  grow items-center">
                                <div className='text-start '>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Time of registration</p>
                                    <p className="info-12 ">The time you register for the BLC-Exchange account</p>
                                </div>
                            </div>
                            <p className='info-14'> {lastLogin}</p>
                        </div>

                        <div className="flex items-center flex-row  justify-between py-[20px] gap-5 ">
                            <div className="flex gap-[18px] grow flex-row  items-center">
                                <div className='text-start '>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Country/region of residence</p>
                                    <p className="info-12 ">The country you select when registering.</p>
                                </div>
                            </div>
                            <p className='info-14'>India</p>
                        </div>
                    </div>




                </div>
            </div>

            <div className="divide-y shadow-lg dark:shadow-[#1da2b41c] rounded-lg px-0 md:px-4">

                <div className="py-[20px]">
                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Notifications</p>
                </div>

                <div>
                    <div className="flex items-center flex-row  justify-between py-[20px] gap-5">
                        <div className="flex gap-[18px] flex-row  grow items-center">
                            <div className='text-start'>
                                <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Notification Type</p>
                                <p className="info-12 ">Due to SMS having restrictions in certain regions, email notifications will be turned on by default.</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-3 h-3 border-0 focus:ring-0 accent-primary"
                                    />
                                    <span className="ml-2 info-12 text-black">All</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-3 h-3 border-0 focus:ring-0 accent-primary"
                                    />
                                    <span className="ml-2 info-12 text-black">Receive emails only</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center   justify-between py-[20px] gap-5">
                        <div className="flex gap-[18px]  grow items-center">
                            <div className='text-start '>
                                <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Promotional Emails</p>
                                <p className="info-12 ">Turn on to receive promotional notifications from BLC-Exchange</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <button  >
                                <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                    <input type="checkbox" className="sr-only peer" value="" />
                                    <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                                </label>
                            </button>
                        </div>
                    </div>


                </div>




            </div>
            <div className="divide-y  mt-4 shadow-lg dark:shadow-[#1da2b41c] rounded-lg px-0 md:px-4	">

                <div className="py-[20px]">
                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures Trading Settings</p>
                </div>

                <div className='max-w-max'>
                    <div className="flex items-center flex-row pt-[20px] pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of limit order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label>
                        </button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of flash order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trigger order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of TP and SL</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures transaction notifications</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures transaction notification sound</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot transaction notifications</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot transaction notification sound</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Whether to include pending orders</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trailing stop</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures Unit Setting</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>
                    </div>

                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures price alert</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>

                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures price alert sound</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>


                </div>



            </div>
            <div className="divide-y mt-4 shadow-lg dark:shadow-[#1da2b41c] rounded-lg ">
                <div className=" grow  py-[20px]">

                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot Trading Settings</p>

                </div>

                <div className='max-w-max'>
                    <div className="flex items-center flex-row pt-[20px] pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of limit order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of market order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trigger order</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot price alert</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot price alert sound</p>
                        <button className='leading-[0]' >
                            <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                <input type="checkbox" className="sr-only peer" value="" />
                                <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                            </label> </button>

                    </div>




                </div>



            </div>

        </section>
    )
}

export default Prefernces
