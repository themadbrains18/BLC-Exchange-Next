import {useState,useContext} from 'react';
import Link from "next/link";
import Image from "next/image";
import Context from "/components/contexts/context";
import SearchDropdown from "/components/snippets/search-dropdown";
const P2PManagement = () => {
    const { mode } = useContext(Context);
    const [rotate, setRotate] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [coinImg, setCoinImg] = useState("");
    const [coin, setCoin] = useState("USD");

    const selectCoin = async (item) => {
        setCoin(item.symbol);
        setCoinImg(item.image);
        setRotate(false);
    };

    return(
        <section className="dark:bg-black-v-3 py-10 md:py-20 ">
            <div className="container">
                <div className="flex items-start">
                    <div className="max-w-[200px] w-full md:block hidden">
                        <ul>
                            <li><Link className="info-14-16 py-[10px] block " href="manage">P2P management</Link></li>
                            <li><Link className="info-14-16 py-[10px] block" href="orderlist">My order</Link></li>
                        </ul>
                    </div>
                    <div className="max-w-[100%-200px] w-full md:border-l border-grey md:pl-[20px]">
                        {/* about */}
                        <div className="flex md:items-center justify-between flex-col md:flex-row	gap-[20px]">
                            <div className="flex items-center gap-[18px]">
                                <div className="w-[48px] h-[48px] rounded-full bg-[#1da2b41a] flex">
                                    <span className="m-auto text-primary dark:text-primary info-16-22">S</span>
                                </div>
                                <div className="">
                                    <p className="info-16-22 !text-black hover:!text-black dark:!text-white">Surinder Kumar</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[50px] ">
                                <div>
                                    <p className="info-12 !text-[14px] mb-[10px]">Total trades:</p>
                                    <span >
                                        <span className="info-12 !text-[18px] mr-[10px] dark:!text-white !text-black">0</span> 
                                        <span className="info-12">
                                            Buy 0
                                            <span className="info-12 !text-[14px]">&nbsp;|&nbsp;</span>
                                            Sell 0
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <p className="info-12 !text-[14px] mb-[10px]">30-day trades:</p>
                                    <span >
                                        <span className="info-12 !text-[18px] mr-[10px] dark:!text-white !text-black">0</span> 
                                        {/* <span className="info-12">
                                            Buy 0
                                            <span className="info-12 !text-[14px]">&nbsp;|&nbsp;</span>
                                            Sell 0
                                        </span> */}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Payment methods */}

                        <div className="flex items-center justify-between  gap-[20px] mt-[50px]">
                            <p className="info-16-22 dark:!text-white !text-black">Payment methods</p>
                            <p className="info-14 cursor-pointer dark:!text-primary !text-primary">+ Add payment methods</p>
                        </div>
                        <div className="grid place-content-center w-full p-4 mt-[50px]">
                            <div className="inline-grid">
                                <Image
                                src={"/assets/icons/noData.svg"}
                                alt="No Data"
                                className=""
                                height={80}
                                width={80}
                                />
                                <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                                No Data
                                </h4>
                            </div>
                        </div>

                        {/* Other settings */}
                        <div className="mt-[30px]">
                            <p className="info-14-16 mb-[20px]">Other settings</p>
                            <div className="border border-grey p-[20px] rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-[18px]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-[#1da2b41a] flex">
                                        <span className="m-auto text-primary dark:text-primary info-16-22">$</span>
                                    </div>
                                    <div>
                                        <p className="info-16 !text-black hover:!text-black dark:!text-white">Fiat preferred</p>
                                        <p className="info-12 ">The default fiat when trading or binding the payment method, you can set it to the commonly used fiat</p>
                                    </div>
                                </div>
                                <div className="relative max-w-[180px] w-full">
                                    <div
                                        className="flex cursor-pointer justify-between w-full rounded p-2"
                                        onClick={() => {
                                        setDropDown(!dropDown);
                                        setRotate(!rotate);
                                        }}
                                    >
                                        <div className="flex gap-3 ">
                                        <Image
                                            className="self-start rounded-full"
                                            height={24}
                                            width={24}
                                            alt="Coin Image"
                                            src={`${coinImg}`}
                                        ></Image>
                                        <p className="info-14-16 font-bold">{coin}</p>
                                        </div>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className={`mt-[2px] ${
                                            rotate && "rotate-90"
                                        } duration-300 w-6 h-6`}
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke={mode === "dark" ? "white" : "currentColor"}
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                        />
                                        </svg>
                                    </div>
                                    {dropDown != false && (
                                        <SearchDropdown
                                        setShowDropdown={setDropDown}
                                        selectCoin={selectCoin}
                                        coin={true}
                                        />
                                    )}
                                    </div>
                            </div>
                           
                        </div>
                        {/* Message notificatoin */}
                        <div className="mt-[30px]">
                            <p className="info-14-16 mb-[20px]">Message notificatoin</p>
                            <div className="border border-grey p-[20px] rounded-lg flex items-center justify-between">
                                <div className="flex items-center gap-[18px]">
                                    <div className="w-[32px] h-[32px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                            <path stroke={mode === "dark" ? "white" : "currentColor"} d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="info-16 !text-black hover:!text-black dark:!text-white">Notification</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                    <input type="checkbox" className="sr-only peer" value="" />
                                    <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                                </label> 
                               
                            </div>
                           
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default P2PManagement;