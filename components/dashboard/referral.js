import React, {useRef} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useSession } from "next-auth/react"

const Referral = ({sessions}) => {
  const ref = useRef(null);
  return (
    <>

    <ToastContainer />
    <section className='py-10 '>
        <div className=" border border-blue-gradient-active rounded-xl px-6 pt-8 bg-[url('/assets/icons/referral-bg.svg')] bg-no-repeat bg-right-bottom	">
            <p className='info-14-20'>Get up to 3000 USDT when you invite friends</p>
            <div className='mt-7 mb-16'>
                <p className='info-14'>Refferal</p>
                <span className='info-14-16'>0</span>
            </div>
            <div className='bg-light-hover rounded px-3 flex mb-4 text-center justify-between items-center'>
                <div ref={ref} className='text-ellipsis break-words whitespace-nowrap overflow-hidden pr-2 py-2'>{`https://www.blcexchange.in/en/referral/register?clacCode=${sessions!==undefined && sessions.own_code}`}
                </div>
                <div>

                  <button className='bg-primary text-white py-1 px-3 rounded' onClick={() => {
                          navigator.clipboard.writeText(ref.current.innerText);
                          toast.success("Copied to Clipboard", {
                            autoClose: 1000,
                          });
                        }}> Copy</button>  
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Referral
