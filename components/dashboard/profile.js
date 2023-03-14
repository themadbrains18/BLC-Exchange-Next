import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useContext } from 'react'
import NavAccordian from '../snippets/navAccordian'
import Context from '../contexts/context';

const Profile = ({ sessions, lastLogin }) => {
    const [show, setShow] = useState(false)
    const { mode } = useContext(Context)

    const cardData = [
        {
            "heading": 'Email',
            "desc": 'SetUp'
        }, {
            "heading": 'Phone',
            "desc": 'SetUp'
        },
        {
            "heading": 'UserID',
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
        <section className=' pt-5 pb-3 md:py-8 dashboardProfileqwe relative' >
            <div className='flex  gap-2 justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <div className='cursor-pointer'>
                        <Image src='/assets/images/avatar-default.jpg' width={80} height={80} alt='error' className='md:max-w-[80px] max-w-[56px] w-full rounded-full'></Image>
                        <p className='info-12 mt-3 text-primary absolute top-[-20px] right-[0]'>Sub account</p>
                    </div>
                    <div className='pl-0 md:pl-8 relative'>
                        <div className='flex'>
                            <p className='info-14-24'>BLCUSER-{sessions !== undefined && sessions.own_code}</p>
                            {/* <img src='/assets/icons/edit.svg' alt='error' className='pl-1 cursor-pointer'></img> */}
                        </div>
                        <div className='mt-1  flex gap-2 items-center'>
                            <div className='flex items-center'>
                                <Image src='/assets/icons/viip.svg' alt='error' width={18} height={22}></Image>
                                <p className='info-12 bg-border-clr px-1'>VIP 0</p>
                            </div>
                            <p className='info-12 bg-border-clr px-1'>{sessions.kycstatus === 'success'? 'Verified':' Not Verified'}</p>
                            <img src='/assets/icons/noraml-user.svg' alt='error'></img>
                        </div>
                        <div className='hidden flex-wrap md:flex justify-between xl:justify-self-auto xl:flex-nowrap gap-9 xl:gap-10'>
                            <div>
                                <p className='info-14'>Email</p>
                                <p className='info-14 text-black'>
                                    <Link href={sessions !== undefined && sessions?.email == '' ? 'dashboard/bindemail' : ''}>
                                        {sessions !== undefined && sessions?.email !== '' ? sessions.email : 'SetUp'}
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <p className='info-14'>Phone</p>
                                <div className='flex cursor-pointer items-center'>
                                    <p className='info-14 text-black'>
                                        <Link href={sessions !== undefined && sessions?.number == '' ? 'dashboard/bindmobile' : ''}>{sessions !== undefined && sessions?.number !== '' ? sessions.number : 'SetUp'}
                                        </Link>
                                    </p>
                                    <img src='/assets/icons/navigate.svg' alt='error'></img>
                                </div>
                            </div>
                            <div>
                                <p className='info-14'>User ID</p>
                                <p className='info-14 text-black'>{sessions?.UID}</p>
                            </div>
                            <div>
                                <p className='info-14'>Last Login</p>
                                <p className='info-14 text-black'>
                                    {lastLogin}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden' onClick={() => { setShow(!show) }}>
                    <img src='/assets/icons/arrow-down-grey.png' alt='err'></img>
                </div>
            </div>
            <div>
                <NavAccordian data={cardData} showAccordian={true} lastLogin={lastLogin} sessions={sessions} ></NavAccordian>
            </div>
        </section>
    )
}

export default Profile


{/* <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" fill= {mode === "dark" ? "white" : "currentcolor"} width="20"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg> */ }
