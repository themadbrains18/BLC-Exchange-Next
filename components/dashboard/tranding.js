import React, { useState } from 'react'
import Image from "next/image";
import Coin1 from "../../public/assets/icons/start.svg";
import Graph from "../../public/assets/images/graph.png";
import Referral from './referral';
import { useRouter } from 'next/router';

const Tranding = ({coins}) => {
    console.log("==============coin", coins)
    const [show, setShow] = useState(1);
    const router = useRouter()

    return (
        <section className=' py-10'>
            <div className="max-w-full grow  w-full">
                <div className='flex justify-between  mb-[40px]'>

                    <div className={`flex items-end gap-5 md:gap-14 w-full`}>
                        <button
                            className={` section-secondary-heading text-grey ${show === 1 ? "!text-black dark:!text-white" : "!text-grey"
                                }`}
                            onClick={() => {
                                setShow(1);
                            }}
                        >
                            Favorites

                        </button>
                        <button
                            className={` section-secondary-heading text-grey ${show === 2 ? "!text-black dark:!text-white" : "!text-grey"
                                }`}
                            onClick={() => {
                                setShow(2);
                            }}
                        >
                            Trendings
                        </button>
                        <button
                            className={` section-secondary-heading text-grey ${show === 3 ? "!text-black dark:!text-white" : "!text-grey"
                                }`}
                            onClick={() => {
                                setShow(3);
                            }}
                        >
                            New
                        </button>
                    </div>
              
                    <div className='info-14-16 text-grey self-end px-2'>More</div>
                </div>
                    {show === 1 && (
                        <>
                        {coins.map((item,index) => {
                           return <div  key={index} onClick={() => { router.push('/chart/' + item.SYMBOL) }} className="p-[1px] rounded-lg dark:hover:bg-black-v-4  hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-full w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:hover:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center  gap-3">
                                        <Image
                                            src={item.TOKENLOGOURL}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">{item.SYMBOL}</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ {item.PRICE}</p>
                                        <p className="info-14-16 !text-grey">$ {item.CHANGE24HOUR}</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">{item.VOLUME24HOUR}</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block ' onClick={() => { router.push('/chart/' + item.SYMBOL) }}>Trade</button>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                            </div>
                        })}
                            
                           
                  

                        </>
                    )}

                    {show === 2 && (
                        <>
                            {coins.map((item,index) => {
                           return <div  key={index} onClick={() => { router.push('/chart/' + item.SYMBOL) }} className="p-[1px] rounded-lg dark:hover:bg-black-v-4  hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-full w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:hover:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center  gap-3">
                                        <Image
                                            src={item.TOKENLOGOURL}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">{item.SYMBOL}</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ {item.PRICE}</p>
                                        <p className="info-14-16 !text-grey">$ {item.CHANGE24HOUR}</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">{item.VOLUME24HOUR}</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block ' onClick={() => { router.push('/chart/' + item.SYMBOL) }}>Trade</button>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                            </div>
                        })}

                        </>
                    )}
                    {show === 3 && (
                        <>
                            {coins.map((item,index) => {
                           return <div  key={index} onClick={() => { router.push('/chart/' + item.SYMBOL) }} className="p-[1px] rounded-lg dark:hover:bg-black-v-4  hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-full w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:hover:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center  gap-3">
                                        <Image
                                            src={item.TOKENLOGOURL}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">{item.SYMBOL}</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ {item.PRICE}</p>
                                        <p className="info-14-16 !text-grey">$ {item.CHANGE24HOUR}</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">{item.VOLUME24HOUR}</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block ' onClick={() => { router.push('/chart/' + item.SYMBOL) }}>Trade</button>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                            </div>
                        })}

                        </>
                    )}
            </div>
            
        </section>
    )
}

export default Tranding
