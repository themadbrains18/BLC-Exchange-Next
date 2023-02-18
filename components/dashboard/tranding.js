import React, { useState } from 'react'
import Image from "next/image";
import Coin1 from "../../public/assets/icons/start.svg";
import Graph from "../../public/assets/images/graph.png";

const Tranding = () => {
    const [show, setShow] = useState(1);




    return (
        <section className='px-8 py-20'>
            <div className="max-w-full grow  w-full">
                <div className='flex justify-between  mb-[40px]'>

                    <div className={`flex items-end gap-14 w-full`}>
                        <button
                            className={` section-secondary-heading text-grey ${show === 1 ? "!text-black" : "!text-grey"
                                }`}
                            onClick={() => {
                                setShow(1);
                            }}
                        >
                            Favorites

                        </button>
                        <button
                            className={` section-secondary-heading text-grey ${show === 2 ? "!text-black" : "!text-grey"
                                }`}
                            onClick={() => {
                                setShow(2);
                            }}
                        >
                            Trendings
                        </button>
                        <button
                            className={` section-secondary-heading text-grey ${show === 3 ? "!text-black" : "!text-grey"
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
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>

                        </>
                    )}

                    {show === 2 && (
                        <>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>
                            <div className="p-[1px] rounded-lg hover:bg-border-clr cursor-pointer flex items-center ">
                                <div className="grid max-w-[80%] w-full grid-cols-2 md:grid-cols-4 items-center p-[14px] sm:p-[24px] dark:bg-black-v-4 rounded-lg hover:bg-border-clr ">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={Coin1}
                                            alt=""
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <div className="flex items-end gap-2 flex-wrap	">
                                            <p className="info-14-24">PSI</p>
                                            <p className="info-14-16 !text-grey">USDT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 flex-wrap	">
                                        <p className="info-14-24">₮ 6.8954</p>
                                        <p className="info-14-16 !text-grey">$ 6.90</p>
                                    </div>
                                    <p className="info-14-16 !text-primary">+25%</p>
                                    <div>
                                        <Image src={Graph} alt="" width={150} height={30} />
                                    </div>
                                </div>
                                {/* <button className='text-primary border border-primary rounded-md'>Trade</button> */}
                                <div className='max-w-[20%] w-full text-center'>
                                    <button className='cta  inline-block '>Trade</button>
                                </div>
                            </div>

                        </>
                    )}
            </div>
        </section>
    )
}

export default Tranding
