import React, { useContext, useRef, useState } from "react";
import Context from "../contexts/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import PopUpSnippet from "./popUpSnippet";
import { useSession } from "next-auth/react";

const ReferCard = () => {
  let { mode, setClick} = useContext(Context);
  let ref=useRef(null)
  let ref2=useRef(null)
  const [popUp, setPopUp]=useState(false)

  const {data:session}= useSession()
  const code = session?.user?.own_code
  const referLink = `http://localhost:3000/register?referal=${code}`
  return (

    <>
    <ToastContainer />
      <section className="py-8 md:py-16 dark:bg-black-v-2 ">
        <div className="container">
          <div className="card px-8 md:px-16 py-8 md:py-12 border border-border-clr rounded-lg">
            <h4 className="section-secondary-heading font-noto">
              Invite Friends Now
            </h4>
            <div className="border border-border-clr rounded-md mt-4 md:mt-8 flex items-center justify-between gap-2 p-2">
              <span className="info-14 hover:!text-grey">Referral Code</span>
              <div className="flex items-center gap-2 ">
                <span ref={ref} className="info-14 hover:!text-grey">{code}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(ref.current.innerText);
                    toast.success("Copied to Clipboard", {
                      autoClose: 1000,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={mode === "dark" ? "white" : "currentColor"}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="border border-border-clr rounded-md p-2 mt-2 md:mt-5 flex items-center justify-between gap-2">
             <span className="info-14 hover:!text-grey">Referral Link</span>
              <div className="inline-flex items-center gap-2">
                <span className="info-14 hover:!text-grey truncate max-w-[70px] md:max-w-[150px]" ref={ref2}>{referLink}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(ref2.current.innerText);
                    toast.success("Copied to Clipboard", {
                      autoClose: 1000,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={mode === "dark" ? "white" : "currentColor"}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-8 flex gap-4">

            <button className="cta relative  w-56 h-full rounded-lg ">Invite Friends
            <Image src={"/assets/icons/giftBoxColor.svg"} height={60} width={80} alt="" className="absolute -left-[10%] bottom-0"/>
            </button>
            <button className="p-1 bg-secondary rounded-xl"  onClick={(()=>{
                setPopUp(true)
                setClick(true)
            })}>
            <Image src={"/assets/icons/qrSymbol.svg"} height={40} width={40} alt="" />
           
            </button>
            {
                popUp && <PopUpSnippet setPopUp={setPopUp}/>
            }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferCard;
