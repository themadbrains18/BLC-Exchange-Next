import {useState,useEffect} from 'react';

const OrderSec = (props) => {
    // cta timer
    const {initialMinute = 0,initialSeconds = 59} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    // top of the section timer
    const {initialMinute2 = 12,initialSeconds2 = 59} = props;
    const [ minutes2, setMinutes2 ] = useState(initialMinute2);
    const [seconds2, setSeconds2 ] =  useState(initialSeconds2);
    
    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0 || seconds2 > 0) {
                    setSeconds(seconds - 1);
                    setSeconds2(seconds2 - 1);
                }
                if (seconds === 0 || seconds2 === 0) {
                    if (minutes === 0 || minutes2 === 0) {
                        clearInterval(myInterval);
                    } else {
                        setMinutes(minutes - 1);
                        setMinutes2(minutes2 - 1);
                        setSeconds(59);
                        setSeconds2(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
        });

    

  return (
    <section className='dark:bg-black-v-3 py-10 md:py-20 '>
        <div className="container">
            <div className='flex items-start justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
                <div className='max-w-full md:max-w-[48%] w-full'>
                    <div className="pb-[30px] border-b border-grey">
                        <h2 className='section-secondary-heading mb-[30px]'>Payment to be made</h2>
                        <div className='flex items-center gap-[20px]'>
                            <p className='info-14 max-w-[50%] w-full hover:!text-grey'>Please pay the seller within <span className='font-bold text-primary'>{ minutes2 === 0 && seconds2 === 0 ? "00 : 00" : <span> {minutes2 < 10 ? `0${minutes2}` : minutes2}:{seconds2 < 10 ?  `0${seconds2}` : seconds2}</span>  }</span> minutes and mark it as "paid".</p>
                            <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                                <p className='info-14-24 font-bold !text-primary flex grow justify-end'>50001 <span>&nbsp;INR</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px] pb-[30px]">
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 ">Payment Method</p>
                            <p className="info-14-20 ">Google Pay</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 ">Seller Name</p>
                            <p className="info-14-20 ">Arti</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 ">Phone Number</p>
                            <p className="info-14-20 ">7300887915</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 ">Email Id</p>
                            <p className="info-14-20 ">7300887915</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 ">Bank Account Number</p>
                            <p className="info-14-20 ">7300887915</p>
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
                            <p className="info-14-20 !text-grey">90 INR</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 !text-grey">Amount</p>
                            <p className="info-14-20 !text-grey">55.556665656 USDT</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 !text-grey">Amount</p>
                            <p className="info-14-20 !text-grey">5,0001 INR</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 !text-grey">Order Number</p>
                            <p className="info-14-20 !text-grey">11198217987232893791</p>
                        </div>
                        <div className='flex items-center justify-between gap-[15px] mb-[20px]'>
                            <p className="info-14-20 !text-grey">Order Time </p>
                            <p className="info-14-20 !text-grey"><span>2023-03-10</span> &nbsp; <span>15:04:28</span></p>
                        </div>
                    </div>
                    <button className="cta w-full mt-[24px]">Paid <span>( { minutes === 0 && seconds === 0 ? "00 : 00" : <span> {minutes < 10 ? `0${minutes}`: minutes }:{seconds < 10 ?  `0${seconds}` : seconds}</span>  } )</span></button>
                    <div className="text-end">
                        <p className="info-14-16 !text-primary cursor-pointer mt-[10px]">Cancel Order</p>
                    </div>
                </div>
                <div className='max-w-full md:max-w-[48%] w-full'>
                    <div className='max-w-[450px] w-full mx-auto md:ml-[auto] md:mr-0 border border-[#cccccc7d] rounded-lg shadow-lg'>
                        {/* about user */}
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
                        {/* chat component */}
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
                        {/* send messsage */}
                        <div className="border-t border-[#cccccc7d] p-[14px] !py-[7px]">
                            <div className="flex items-center gap-[15px]">
                                <input type="text" className="border-0 w-full outline-none info-12 dark:!text-white bg-transparent !text-black"  placeholder="input messsage..." />
                                <button className="cta">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default OrderSec;