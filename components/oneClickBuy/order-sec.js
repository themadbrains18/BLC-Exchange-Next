import {useState,useEffect,useContext,useRef} from 'react';
import Context from "/components/contexts/context";
import PaidPopup from './paid-popup';
import CancleOrder from './cancle-order-popup';
import ChatBox from './chat-box';
import Link from "next/link";

const OrderSec = (props) => {
    const {mode, setClick } = useContext(Context);

    const [OrderPopup,setOrderPopup] = useState(false);
    const [cancleOrderPopup,setCancleOrderPopup] = useState(false);
    const [submitAppeal,setSubmitAppeal] = useState(false);

    // cta timer
    const Ref = useRef(null);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(59);

    // top of the section timer
    const [minutes2, setMinutes2] = useState(12);
    const [seconds2, setSeconds2] = useState(59);

    const [order, setOrderDetail] = useState(null)
    const [timeLeft, setTimer] = useState();


    useEffect(() => {
        getOrderDetailById();
    }, []);



    const getOrderDetailById = async () => {

        let orderid = localStorage.getItem("orderid");
        let data = await fetch(
            `${process.env.NEXT_PUBLIC_BASEURL}/order/create?orderid=${orderid}`,
            {
                method: 'GET',
            },
        ).then((response) => response.json())

        if (data) {
            // console.log(typeof JSON.parse(data.data[0].p_method[0].pmObject) )
            data.data[0].p_method[0].pmObject = JSON.parse(data.data[0].p_method[0].pmObject);

            let deadline = new Date(data.data[0].createdAt);
            deadline.setMinutes(deadline.getMinutes() + 15);
            deadline.setSeconds(deadline.getSeconds() + 5);
            let currentTime = new Date();
            if (currentTime < deadline && data?.data[0]?.isReleased === 0) {
                if (Ref.current) clearInterval(Ref.current);
                const timer = setInterval(() => {
                    calculateTimeLeft(deadline);
                }, 1000);
                Ref.current = timer;
            }
            // else if (currentTime > deadline && buyOrder?.orderData.isComplete === false && buyOrder?.orderData.isCanceled === false) {
            //     cancelOrder();
            // }

            setOrderDetail(data.data[0])
        }

    }

    const calculateTimeLeft = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);

        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        else {
            if (Ref.current) clearInterval(Ref.current);
            //   cancelOrder();
        }
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }


    return (
        <>
            <section className='dark:bg-black-v-3 py-10 md:py-20 '>
                <div className="container">
                    <div className='flex items-start justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                        <div className='max-w-full md:max-w-[48%] w-full'>
                            <div className="pb-[30px] border-b border-grey">
                                <h2 className='section-secondary-heading mb-[30px]'>Payment to be made</h2>
                                <div className='flex items-center gap-[20px]'>
                                    <p className='info-14 max-w-[50%] w-full hover:!text-grey'>Please pay the seller within <span className='font-bold text-primary'>{timeLeft}</span> minutes and mark it as "paid".</p>
                                    <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                                        <p className='info-14-24 font-bold !text-primary flex grow justify-end'>{order != undefined && order?.spend_amount} <span>&nbsp;INR</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[30px] pb-[30px]">
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Payment Method</p>
                                    <p className="info-14-20 ">{order != undefined && order?.p_method !== undefined && order?.p_method[0].pm_name}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Seller Name</p>
                                    <p className="info-14-20 ">{order != undefined && order?.name} {order != undefined && order?.lname}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Phone Number</p>
                                    <p className="info-14-20 ">{order != undefined && order?.number}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Email Id</p>
                                    <p className="info-14-20 ">{order != undefined && order?.email}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Bank Account Number</p>
                                    <p className="info-14-20 ">{order != undefined && order?.p_method !== undefined && order?.p_method[0].pmObject.phonenumber}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 ">Card Number</p>
                                    <p className="info-14-20 ">7300887915</p>
                                </div>
                            </div>
                            <p className="info-14-16 p-[12px] rounded-md bg-[#8ed0d9] dark:!text-black">Please pay with a payment method enabled in your own name, seller can request a refund or cancle the order.</p>
                            <div className="mt-[30px] pb-[20px] border-b border-grey">
                                <p className="info-16-22 !text-black dark:!text-white mb-[20px]">Order Details</p>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 !text-grey">Price</p>
                                    <p className="info-14-20 !text-grey">{order != undefined && order?.price} INR</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 !text-grey">Amount</p>
                                    <p className="info-14-20 !text-grey">{order != undefined && order?.receive_amount} USDT</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 !text-grey">Amount</p>
                                    <p className="info-14-20 !text-grey">{order != undefined && order?.spend_amount} INR</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 !text-grey">Order Number</p>
                                    <p className="info-14-20 !text-grey">{order != undefined && order?.id}</p>
                                </div>
                                <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                                    <p className="info-14-20 !text-grey">Order Time </p>
                                    <p className="info-14-20 !text-grey"><span>{order != undefined && order?.createdAt}</span> </p>
                                </div>
                            </div>
                            <button className="cta w-full mt-[24px]">Paid <span>( {minutes === 0 && seconds === 0 ? "00 : 00" : <span> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>} )</span></button>
                            <div className="text-end">
                                <p className="info-14-16 !text-primary cursor-pointer mt-[10px]">Cancel Order</p>
                            </div>
                        </div>
                        <div className='max-w-full md:max-w-[48%] w-full'>
                            <div className='max-w-[450px] w-full mx-auto md:ml-[auto] md:mr-0 border border-[#cccccc7d] rounded-lg shadow-lg'>
                                <div className="flex items-center gap-[20px] grow-[1.6] p-[14px] border-b border-[#cccccc7d]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-[#e8f6f7] dark:bg-[#8ed0d9] flex">
                                        <span className="m-auto text-primary dark:text-white info-14-16">A</span>
                                    </div>
                                    <div className="">
                                        <p className="info-14 !text-start !text-black hover:!text-black dark:!text-white">Arti</p>
                                        <p className="info-12 !text-start">Total trades (buy <span>76</span> | sell <span>406</span>)&nbsp; &nbsp;<span className="info-12 block sm:inline !text-start">Average release <span>2</span></span></p>

                                        <p className="info-12 !text-start">Registration Time <span>22-10-06</span></p>
                                    </div>
                                </div>
                                <div className="p-[14px] max-h-[400px] h-full overflow-x-auto flex flex-col	gap-[10px]">
                                    <div className="left">
                                        <div className="w-[30px] h-[30px] rounded-full dark:bg-[#8ed0d9] bg-[#e8f6f7] flex">
                                            <span className="m-auto text-primary dark:text-white info-14">A</span>
                                        </div>
                                        <div className="mt-[4px] p-[10px] rounded-lg min-w-[60px] max-w-fit w-full dark:bg-[#8ed0d9] bg-[#cccccc4f]">
                                            <p className="info-12 dark:text-white text-black">hii</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="w-[30px] h-[30px] ml-[auto] rounded-full dark:bg-[#8ed0d9] bg-[#e8f6f7] flex">
                                            <span className="m-auto text-primary dark:text-white info-14">B</span>
                                        </div>
                                        <div className="mt-[4px] ml-[auto] p-[10px] rounded-lg min-w-[60px] max-w-fit w-full dark:bg-[#8ed0d9] bg-[#cccccc4f]">
                                            <p className="info-12 dark:text-white text-black">hii</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-[#cccccc7d] p-[14px] !py-[7px]">
                                    <div className="flex items-center gap-[15px]">
                                        <input type="text" className="border-0 w-full outline-none info-12 dark:!text-white bg-transparent !text-black" placeholder="input messsage..." />
                                        <button className="cta">Send</button>
                                    </div>
                                </div>
                            </div>

                            {/* if order is calcelled this should be hidden */}
                            <button className="cta w-full mt-[24px]" onClick={() => { setClick(true); setOrderPopup(true) }}>Paid <span>( {minutes === 0 && seconds === 0 ? "00 : 00" : <span> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>} )</span></button>



                            {
                                submitAppeal == true ?

                                    <div className="flex items-center justify-between gap-[15px] flex-col sm:flex-row mt-[30px]">
                                        <p className='info-14 max-w-full sm:max-w-[48%] !text-start w-full hover:!text-grey'>Did not recive payment? File and appeal and wait for the customer support to intervene.</p>
                                        <p className='info-14 max-w-full sm:max-w-[48%] !text-start sm:!text-end w-full hover:!text-grey'>Submit appeal<span className='font-bold text-primary'>{minutes3 === 0 && seconds3 === 0 ? "00 : 00" : <span> {minutes3 < 10 ? `0${minutes3}` : minutes3}:{seconds3 < 10 ? `0${seconds3}` : seconds3}</span>}</span></p>
                                    </div>
                                    :
                                    <div className="text-end">
                                        <p className="info-14-16 !text-primary cursor-pointer mt-[10px]" onClick={() => { setClick(true); setCancleOrderPopup(true) }}>Cancel Order</p>
                                    </div>
                            }

                            {/* if order is calcelled this should be hidden */}

                            {/* if order is calcelled this should be showen */}
                            {/* <Link href="/p2p-trade/trade" className="info-14-16 !text-primary block text-center cursor-pointer mt-[10px]" >Place another order</Link> */}
                            {/* if order is calcelled this should be showen */}

                        </div>

                        {/* chat box column */}
                        <div className='max-w-full md:max-w-[48%] w-full'>
                            <ChatBox />
                        </div>
                    </div>
                </div>
            </section>
            {
                OrderPopup &&
                <PaidPopup setOrderPopup={setOrderPopup} setSubmitAppeal={setSubmitAppeal} />
            }
            {
                cancleOrderPopup &&
                <CancleOrder setCancleOrderPopup={setCancleOrderPopup} />
            }
        </>
    )
}

export default OrderSec;