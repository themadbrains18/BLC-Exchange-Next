import { useState, useEffect, useContext, useRef } from 'react';
import Context from "/components/contexts/context";
import PaidPopup from './paid-popup';
import CancleOrder from './cancle-order-popup';
import ChatBox from './chat-box';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { io } from "socket.io-client"

const SellerOrderSec = ({order}) => {

  const { mode, setClick } = useContext(Context);

  const [OrderPopup, setOrderPopup] = useState(false);
  const [cancleOrderPopup, setCancleOrderPopup] = useState(false);
  const [submitAppeal, setSubmitAppeal] = useState(false);

  // cta timer
  const Ref = useRef(null);

  // const [order, setOrderDetail] = useState(null)
  const [timeLeft, setTimer] = useState();


  useEffect(() => {

    let deadline = new Date(order?.createdAt);
    deadline.setMinutes(deadline.getMinutes() + 15);
    deadline.setSeconds(deadline.getSeconds() + 5);
    let currentTime = new Date();
    if (currentTime < deadline && order?.isReleased === 0) {
      if (Ref.current) clearInterval(Ref.current);
      const timer = setInterval(() => {
        calculateTimeLeft(deadline);
      }, 1000);
      Ref.current = timer;
    }

  }, []);


  const calculateTimeLeft = (e) => {
    let { total, minutes, seconds }
      = getTimeRemaining(e);

    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
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
      <ToastContainer />
      <section className='dark:bg-black-v-3 py-10 md:py-20 '>
        <div className="container">
          <div className='flex items-start justify-between flex-col-reverse md:flex-row gap-5 text-center md:text-left'>
            <div className='max-w-full md:max-w-[48%] w-full'>
              <div className="pb-[30px] border-b border-grey">
                {order?.inProcess === 1 &&
                  <>
                    <h2 className='section-secondary-heading mb-[30px]'>Buyer is paying</h2>
                    <div className='flex items-center gap-[20px]'>
                      <p className='info-14 max-w-[50%] w-full hover:!text-grey'>buyer will complete payment in <span className='font-bold text-primary'>{timeLeft}</span> minutes </p>
                      <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                        <p className='info-14-24 font-bold !text-primary flex grow justify-end'>{order != undefined && order?.spend_amount} <span>&nbsp;INR</span></p>
                      </div>
                    </div>
                  </>

                }
                {order?.isComplete === 1 &&
                  <>
                    <h2 className='section-secondary-heading mb-[30px]'>Pending release</h2>
                    <div className='flex items-center gap-[20px]'>
                      <p className='info-14 max-w-[50%] w-full hover:!text-grey'>Please release the asset within <span className='font-bold text-primary'>{timeLeft}</span> minutes.</p>
                      <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                        <p className='info-14-24 font-bold !text-primary flex grow justify-end'>{order != undefined && order?.spend_amount} <span>&nbsp;INR</span></p>
                      </div>
                    </div>
                  </>

                }
                {order?.isReleased === 1 &&
                  <>
                    <h2 className='section-secondary-heading mb-[30px]'>Payment to be made</h2>
                    <div className='flex items-center gap-[20px]'>
                      <p className='info-14 max-w-[50%] w-full hover:!text-grey'>Please pay the seller within <span className='font-bold text-primary'>{timeLeft}</span> minutes and mark it as "paid".</p>
                      <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                        <p className='info-14-24 font-bold !text-primary flex grow justify-end'>{order != undefined && order?.spend_amount} <span>&nbsp;INR</span></p>
                      </div>
                    </div>
                  </>

                }
                {order?.isCanceled === 1 &&
                  <>
                    <h2 className='section-secondary-heading mb-[30px]'>Cancelled</h2>
                    <div className='flex items-center gap-[20px]'>
                      <p className='info-14 max-w-[50%] w-full hover:!text-grey'>Order is cancelled. Please donot make any payment.</p>
                      <div className='flex items-center gap-[20px] grow max-w-[50%] w-full '>
                        <p className='info-14-24 font-bold !text-primary flex grow justify-end'>{order != undefined && order?.spend_amount} <span>&nbsp;INR</span></p>
                      </div>
                    </div>
                  </>
                }
              </div>
              {order?.isCanceled === 0 &&
                <>
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
                </>

              }

              {/* if order is calcelled this should be showen */}
              {order?.isCanceled === 1 &&
                <div className="mt-[30px] pb-[30px]">

                  <div className="p-[20px] rounded-lg dark:bg-grey bg-[#cccccc4f] border border-[#cccccc7d] min-h-[150px] flex">
                    <div className="m-auto">
                      <div className="max-w-[34px] mb-[15px] w-full mx-auto cursor-pointer " onClick={() => { setClick(false); setCancleOrderPopup(false) }}>
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill={mode === "dark" ? "white" : "#000"} d="M61 34.73C56.9896 29.8627 52.1564 25.7368 46.72 22.54L49.14 20.12C49.2555 20.0044 49.3472 19.8672 49.4098 19.7163C49.4723 19.5653 49.5045 19.4034 49.5045 19.24C49.5045 19.0766 49.4723 18.9147 49.4098 18.7637C49.3472 18.6128 49.2555 18.4756 49.14 18.36C49.0244 18.2444 48.8872 18.1528 48.7362 18.0902C48.5852 18.0277 48.4234 17.9955 48.26 17.9955C48.0965 17.9955 47.9347 18.0277 47.7837 18.0902C47.6327 18.1528 47.4955 18.2444 47.38 18.36L44.38 21.36C40.9 19.6278 37.1093 18.6079 33.23 18.36V12.5C33.23 12.1685 33.0983 11.8505 32.8639 11.6161C32.6294 11.3817 32.3115 11.25 31.98 11.25C31.6485 11.25 31.3305 11.3817 31.0961 11.6161C30.8617 11.8505 30.73 12.1685 30.73 12.5V18.3C28.6038 18.4173 26.4991 18.7866 24.46 19.4C24.1417 19.4955 23.8744 19.7135 23.7169 20.006C23.5594 20.2986 23.5245 20.6417 23.62 20.96C23.7155 21.2783 23.9335 21.5456 24.226 21.7031C24.5186 21.8606 24.8617 21.8955 25.18 21.8C27.3891 21.1155 29.6873 20.7616 32 20.75C36.2308 20.8587 40.3749 21.9727 44.09 24C49.5008 26.9463 54.3378 30.8417 58.37 35.5C55.5264 38.7808 52.2963 41.7054 48.75 44.21C48.6094 44.305 48.4895 44.4274 48.3974 44.5698C48.3052 44.7123 48.2428 44.8718 48.2139 45.039C48.1849 45.2062 48.19 45.3774 48.2289 45.5426C48.2677 45.7077 48.3395 45.8633 48.44 46C48.5554 46.1585 48.7055 46.2887 48.8787 46.3805C49.052 46.4724 49.244 46.5235 49.44 46.53C49.6984 46.5322 49.9507 46.4516 50.16 46.3C54.2106 43.4626 57.8572 40.0885 61 36.27C61.1753 36.0516 61.2708 35.78 61.2708 35.5C61.2708 35.22 61.1753 34.9484 61 34.73V34.73Z" />
                          <path fill={mode === "dark" ? "white" : "#000"} d="M39.84 36.9999H40C40.3054 36.9997 40.6001 36.8877 40.8286 36.685C41.057 36.4823 41.2034 36.2031 41.24 35.8999C41.25 35.7668 41.25 35.6331 41.24 35.4999C41.2374 33.0492 40.2634 30.6995 38.5314 28.9656C36.7994 27.2318 34.4507 26.2552 32 26.2499C31.8669 26.2399 31.7332 26.2399 31.6 26.2499C31.4403 26.2685 31.2858 26.3185 31.1454 26.397C31.0051 26.4755 30.8816 26.581 30.7822 26.7074C30.6827 26.8338 30.6093 26.9786 30.566 27.1335C30.5227 27.2884 30.5105 27.4503 30.53 27.6099C30.5678 27.9362 30.7306 28.2352 30.9842 28.4441C31.2378 28.6529 31.5625 28.7554 31.89 28.7299H32C33.7894 28.7325 35.5048 29.4446 36.7701 30.7099C38.0354 31.9752 38.7474 33.6905 38.75 35.4799V35.5799C38.7262 35.745 38.7356 35.9132 38.7778 36.0746C38.82 36.2361 38.894 36.3874 38.9956 36.5197C39.0972 36.6521 39.2243 36.7627 39.3693 36.8452C39.5143 36.9277 39.6744 36.9803 39.84 36.9999V36.9999Z" />
                          <path fill={mode === "dark" ? "white" : "#000"} d="M10.8801 13.1199C10.6467 12.8865 10.3301 12.7554 10.0001 12.7554C9.67002 12.7554 9.35347 12.8865 9.12008 13.1199C8.88669 13.3533 8.75557 13.6698 8.75557 13.9999C8.75557 14.3299 8.88669 14.6465 9.12008 14.8799L17.0001 22.7299C11.6813 25.8996 6.94596 29.9585 3.00008 34.7299C2.82479 34.9482 2.72925 35.2199 2.72925 35.4999C2.72925 35.7799 2.82479 36.0515 3.00008 36.2699C3.52008 36.9399 16.0901 52.7499 32.0001 52.7499C36.1863 52.6787 40.3049 51.6815 44.0601 49.8299L49.1201 54.8799C49.2346 54.9972 49.3715 55.0904 49.5226 55.1541C49.6738 55.2177 49.8361 55.2505 50.0001 55.2505C50.1641 55.2505 50.3264 55.2177 50.4775 55.1541C50.6286 55.0904 50.7655 54.9972 50.8801 54.8799C50.9962 54.7646 51.0883 54.6275 51.1512 54.4765C51.2141 54.3255 51.2465 54.1635 51.2465 53.9999C51.2465 53.8363 51.2141 53.6743 51.1512 53.5233C51.0883 53.3722 50.9962 53.2351 50.8801 53.1199L10.8801 13.1199ZM26.2301 31.9999L35.5001 41.2599C34.4784 41.8868 33.3079 42.2296 32.1094 42.2526C30.9109 42.2756 29.728 41.9781 28.683 41.3909C27.638 40.8037 26.7688 39.948 26.1653 38.9123C25.5618 37.8766 25.2458 36.6986 25.2501 35.4999C25.2546 34.2661 25.5933 33.0566 26.2301 31.9999V31.9999ZM32.0001 50.2499C19.2501 50.2499 8.34008 38.6299 5.63008 35.4999C9.39369 31.1617 13.8426 27.4695 18.8001 24.5699L24.4301 30.1999C23.1793 31.9776 22.596 34.1396 22.783 36.3052C22.97 38.4707 23.9152 40.5008 25.4522 42.0377C26.9892 43.5747 29.0193 44.52 31.1848 44.7069C33.3504 44.8939 35.5124 44.3106 37.2901 43.0599L42.1901 47.9999C38.9866 49.4496 35.5162 50.2159 32.0001 50.2499V50.2499Z" />
                        </svg>
                      </div>
                      <p className="info-14-16 text-center ">You can not check payment message after order is cancelled!</p>
                    </div>
                  </div>
                </div>
              }

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
              {order?.inProcess === 1 &&
                <>
                  <button className="cta w-full mt-[24px]">Paying <span></span></button>
                </>

              }
              {order?.isComplete === 1 &&
                <>
                  <button className="cta w-full mt-[24px]" >Confirm and Release <span></span></button>
                  <div className="flex items-center justify-between gap-[15px] flex-col sm:flex-row mt-[30px]">
                    <p className='info-14 max-w-full sm:max-w-[48%] !text-start w-full hover:!text-grey'>Did not recive payment? File and appeal and wait for the customer support to intervene.</p>
                    <p className='info-14 max-w-full sm:max-w-[48%] !text-start sm:!text-end w-full hover:!text-grey'>Submit appeal<span className='font-bold text-primary'></span></p>
                  </div>
                </>

              }
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
        <PaidPopup setOrderPopup={setOrderPopup} setSubmitAppeal={setSubmitAppeal} order={order} makePayment={makePayment} />
      }
    </>
  )
}

export default SellerOrderSec;