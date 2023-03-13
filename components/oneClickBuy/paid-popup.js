import Context from "/components/contexts/context";
import React, { useContext } from "react";

const PaidPopup = ({setOrderPopup,setSubmitAppeal}) => {
    const { mode, setClick } = useContext(Context);

    return(
        <div className="rounded-md fixed top-[50%]  duration-300 z-[20] left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%]  dark:bg-black-v-4 bg-white p-3 sm:p-6 border border-grey max-w-[480px]  mx-auto">
            <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); setOrderPopup(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                    <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
            </div>
            <div className="mt-[20px]">
                <p className="section-secondary-heading text-center mb-[25px]">Paid</p>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Payment Amount :</p>
                    <p className='info-14-20 font-bold !text-primary flex grow justify-end'>50001 <span>&nbsp;INR</span></p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Payment Method</p>
                    <p className="info-14-20 ">Google Pay</p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Seller Name</p>
                    <p className="info-14-20 ">Arti</p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Phone Number</p>
                    <p className="info-14-20 ">7300887915</p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Email Id</p>
                    <p className="info-14-20 ">7300887915</p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Bank Account Number</p>
                    <p className="info-14-20 ">7300887915</p>
                </div>
                <div className='flex items-center justify-between gap-[15px] mb-[15px]'>
                    <p className="info-14-20 ">Card Number</p>
                    <p className="info-14-20 ">7300887915</p>
                </div>
                <p className="info-14-16 p-[12px] rounded-md bg-[#8ed0d9] dark:!text-black">Please confirm you have paid the seller.Malicious operation will cause the account to be frozen.</p>
                <div className="mt-[30px] flex items-center gap-[20px]">
                    <button className="cta2 w-full" onClick={() => { setClick(false); setOrderPopup(false) }}>Not paid</button>
                    <button className="cta w-full" onClick={() => { setClick(false); setOrderPopup(false);setSubmitAppeal(true); }}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default PaidPopup; 