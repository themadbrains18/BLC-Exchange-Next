import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavAccordian from '../snippets/navAccordian'

const Profile = ({ sessions }) => {
    const [show, setShow] = useState(false)

    const cardData = [
        {
            "heading": 'Email',
            "desc": 'SetUp'
        }, {
            "heading": 'Phone',
            "desc": 'SetUp'
        },
        {
            "heading": 'User Login',
            "desc": '1222295006'
        }, {
            "heading": 'Last Login',
            "desc": '2023-02-17 14:59:25 (India-Punjab-Bathinda)'
        }
    ]
    useEffect(() => {
        document.querySelector(".dashboardProfileqwe .openAccordian").click();
    }, [show])

    return (
        <section className=' px-8 pt-5 pb-3 md:py-8 dashboardProfileqwe' >
            <div className='flex px-5 gap-2 justify-between'>
                <div className='flex gap-4'>
                    <div className='cursor-pointer'>
                        <Image src='/assets/images/avatar-default.jpg' width={80} height={80} alt='error' className='rounded-full'></Image>
                        <p className='info-12 mt-3 text-primary'>Sub account</p>
                    </div>
                    <div className='pl-0 md:pl-8 relative'>
                        <div className='flex'>
                            <p className='info-14-24'>BGUSER-{sessions!==undefined && sessions.own_code}</p>
                            <img src='/assets/icons/edit.svg' alt='error' className='pl-1 cursor-pointer'></img>
                        </div>
                        <div className='mt-1 mb-4 flex gap-2 items-center'>
                            <div className='flex items-center'>
                                <Image src='/assets/icons/viip.svg' alt='error' width={18} height={22}></Image>
                                <p className='info-12 bg-border-clr px-1'>VIP 0</p>
                            </div>
                            <p className='info-12 bg-border-clr px-1'>Not Verified</p>
                            <img src='/assets/icons/noraml-user.svg'></img>
                        </div>
                        <div className='hidden flex-wrap md:flex justify-between xl:justify-self-auto xl:flex-nowrap gap-9 xl:gap-10'>
                            <div>
                                <p className='info-14'>Email</p>
                                <p className='info-14 text-black'>{sessions!==undefined && sessions?.email !=='' ? sessions.email : 'SetUp'}</p>
                            </div>
                            <div>
                                <p className='info-14'>Phone</p>
                                <div className='flex cursor-pointer items-center'>
                                    <p className='info-14 text-black'><Link href={sessions!==undefined && sessions?.number==''? 'dashboard/bindmobile':''}>{sessions!==undefined && sessions?.number !=='' ? sessions.number : 'SetUp'}</Link></p>
                                    <img src='/assets/icons/navigate.svg'></img>
                                </div>
                            </div>
                            <div>
                                <p className='info-14'>User ID</p>
                                <p className='info-14 text-black'>1222295006</p>
                            </div>
                            <div>
                                <p className='info-14'>Last Login</p>
                                <p className='info-14 text-black'>2023-02-17 14:59:25 (India-Punjab-Bathinda)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden' onClick={() => { setShow(!show) }}>
                    <img src='/assets/icons/arrow-down-grey.png' alt='err'></img>
                </div>
            </div>
            <div>
                <NavAccordian data={cardData} showAccordian={true} ></NavAccordian>
            </div>
        </section>
    )
}

export default Profile
