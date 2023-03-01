import React, { useContext } from 'react'
import Context from '../contexts/context'
import Image from 'next/image'
const PopUpSnippet = ({setPopUp}) => {
    let {mode,setClick}= useContext(Context)
  return (
    <>
       <div className="z-[20] fixed top-[50%] left-[50%] translate-y-[-50%]  w-[calc(100%-20px)] sm:w-full translate-x-[-50%]">
                <div className="dark:bg-black-v-5 bg-white p-3 sm:p-6 border rounded border-grey max-w-[480px] w-full mx-auto">
                  <div className="flex items-center gap-4 justify-between">
                  <Image
            src="/assets/images/BLC-Exchange.png"
            width={50}
            height={50}
            alt="Company Logo"
          />
                    <button onClick={() => {
                      setClick(false)
                      setPopUp(false)
                    }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={mode === "dark" ? "white" : "currentcolor"}
                        className="w-6 h-6 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4">
                 <p className='info-14-20'>Invite Friends and Earn Up to2,802 USDT</p>
                 <Image src='/assets/images/qr.png' alt='error' width={430} height={80} className='mt-4'></Image>
                    {/* 
                    <Icons type="card" />
                  <h4>Credit/Debit card</h4>
                      <p></p> */}
                  </div>
                </div>
              </div>
    </>
  )
}

export default PopUpSnippet