import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <section className='bg-white dark:bg-black-v-3 py-10 md:py-5'>
            <div className='flex px-5 justify-between'>
                <div className='cursor-pointer'>
                    <Image src='/assets/images/avatar-default.jpg' width={80} height={80} alt='error' className='rounded-full'></Image>
                    <p className='info-12 mt-3 text-primary'>Sub account</p>
                </div>
                <div className='pl-8'>
                    <div className='flex'>
                        <p className='info-14-24'>BGUSER-NVQPH393</p>
                        <img src='/assets/icons/edit.svg' alt='error' className='pl-1 cursor-pointer'></img>
                    </div>
                    <div className='mt-1 mb-4 flex gap-2 items-center'>
                        <div className='flex items-center'>
                            <Image src='/assets/icons/viip.svg' alt='error' width={18} height={22}></Image>
                            <p className='info-12 bg-border-clr-2 px-1'>VIP 0</p>
                        </div>
                        <p className='info-12 bg-border-clr-2 px-1'>Not Verified</p>
                        <img src='/assets/icons/noraml-user.svg'></img>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <p className='info-14'>Emaill</p>
                            <p className='info-14 text-black'>sakshi****@gmail.com</p>
                        </div>
                        <div>
                            <p className='info-14'>Phone</p>
                            <div className='flex cursor-pointer items-center'>
                                <p className='info-14 text-black'>SetUp</p>
                                <img src='/assets/icons/navigate.svg'></img>
                            </div>
                        </div>
                        <div>
                            <p className='info-14'>User Login</p>
                            <p className='info-14 text-black'>1222295006</p>
                        </div>
                        <div>
                            <p className='info-14'>Last Login</p>
                            <p className='info-14 text-black'>2023-02-17 14:59:25 (India-Punjab-Bathinda)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='my-12 px-4 border-clr-2'>


            </div>
        </section>
    )
}

export default Profile
