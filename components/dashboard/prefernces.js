import React from 'react'
import { useContext, useState } from 'react'
import Layout from '@/components/layout/layout'
import Context from '@/components/contexts/context';
import Link from 'next/link';
import VerificationCode from './../../components/login-register/verification-code';
import Image from 'next/image';

const Prefernces = () => {
    const { mode, setClick } = useContext(Context);
    const [showSafteyV, setShowSafteyV] = useState(0);
    const [SetState, showSetState] = useState(0);
    return (
        <div className="w-full px-[24px] ">
            <div className="mb-[20px]">
                <h3 className="section-secondary-heading mb-6"> Settings</h3>
                <div className="divide-y px-[24px] shadow-lg dark:shadow-[#1da2b41c] rounded-lg	">
                    <div className="py-[20px]">
                        <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Profile</p>
                    </div>
                    <div>
                        <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5 ">
                            <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                                <div className='sm:text-start text-center'>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Avatar</p>
                                    <p className="info-12 ">Customize your avatar</p>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <Image src='/assets/images/avatar-default.jpg' width={30} height={30} className='rounded-3xl'></Image>
                                <Link className='cta' href="bindmobile">Change</Link>
                            </div>
                        </div>

                        <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5">
                            <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                                <div className='sm:text-start text-center'>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Username</p>
                                    <p className="info-12 ">Set your own username</p>
                                </div>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <p className='info-14'>BGUSER-NVQPH393</p>
                                <button className='cta' onClick={() => { setClick(true); setShowSafteyV(1) }}> Change</button>
                            </div>
                        </div>

                        <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5">
                            <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                                <div className='sm:text-start text-center'>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Time of registration</p>
                                    <p className="info-12 ">The time you register for the Bitget account</p>
                                </div>
                            </div>
                            <p className='info-14'>2023-02-16 13:28:29</p>
                        </div>

                        <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5 ">
                            <div className="flex gap-[18px] grow flex-col sm:flex-row  items-center">
                                <div className='sm:text-start text-center'>
                                    <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Country/region of residence</p>
                                    <p className="info-12 ">The country you select when registering.</p>
                                </div>
                            </div>
                            <p className='info-14'>India</p>
                        </div>
                    </div>




                </div>
            </div>

            <div className="divide-y px-[24px] shadow-lg dark:shadow-[#1da2b41c] rounded-lg">

                <div className="py-[20px]">
                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Notifications</p>
                </div>

                <div>
                    <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5">
                        <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                            <div className='sm:text-start text-center'>
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

                    <div className="flex items-center flex-col sm:flex-row  justify-between py-[20px] gap-5">
                        <div className="flex gap-[18px] flex-col sm:flex-row  grow items-center">
                            <div className='sm:text-start text-center'>
                                <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Promotional Emails</p>
                                <p className="info-12 ">Turn on to receive promotional notifications from Bitget</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <button  >
                                <label
                                    className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                                >
                                    {" "}
                                    <input
                                        type="checkbox"
                                        defaultValue=""
                                        className="sr-only peer"
                                        defaultChecked=""
                                    />
                                    <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                                </label></button>
                        </div>
                    </div>


                </div>




            </div>
            <div className="divide-y px-[24px] mt-4 shadow-lg dark:shadow-[#1da2b41c] rounded-lg	">

                <div className="py-[20px]">
                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures Trading Settings</p>
                </div>

                <div className='max-w-max'>
                    <div className="flex items-center flex-row pt-[20px] pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of limit order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of flash order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trigger order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of TP and SL</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures transaction notifications</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures transaction notification sound</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot transaction notifications</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot transaction notification sound</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Whether to include pending orders</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trailing stop</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures Unit Setting</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>
                    </div>

                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures price alert</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>

                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Futures price alert sound</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>


                </div>



            </div>
            <div className="divide-y px-[24px] mt-4 shadow-lg dark:shadow-[#1da2b41c] rounded-lg ">
                <div className=" grow  py-[20px]">

                    <p className="info-14-20 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot Trading Settings</p>

                </div>

                <div className='max-w-max'>
                    <div className="flex items-center flex-row pt-[20px] pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of limit order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of market order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Second confirmation of trigger order</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot price alert</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>
                    <div className="flex items-center  flex-row  pb-6 gap-5 justify-between">
                        <p className="info-14 dark:text-white text-black hover:!text-black dark:hover:!text-white ">Spot price alert sound</p>
                        <button className='leading-[0]' >
                            <label
                                className={`relative inline-flex  items-center  cursor-pointer duration-500`}
                            >
                                {" "}
                                <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                    defaultChecked=""
                                />
                                <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full leading-[0]   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                            </label></button>

                    </div>




                </div>



            </div>

        </div>
    )
}

export default Prefernces
