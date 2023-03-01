import React, { useContext } from "react";
import Context from "/components/contexts/context";

const Banner = () => {
    let {mode} =useContext(Context)
    return (
    <section className="py-10 md:py-20 bg-secondary dark:bg-black-v-5">
    <div className="container">
      <div className="text-center">
        <h4 className="section-primary-heading">
          BLC-Exchange Referral Program
        </h4>
        <p className="info-14-20 mt-4">
          Refer & earn 50% of trading fee paid by your friends as reward. Be
          your own Boss!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 items-center">
          <div>
            <div className="rounded-full  m-auto border-4 w-28 grid place-items-center  border-primary-hover h-28 ">
              <span className="section-secondary-heading font-noto">50%</span>
            </div>
            <span className=" max-w-[200px] m-auto block w-full info-14-16 mt-4 ">
              Earn 50% as reward of every trading fee
            </span>
          </div>
          <div >
            <div className="rounded-full m-auto border-4 w-28 grid place-items-center  border-primary-hover h-28 ">
              {/* speedometer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={48}
                viewBox="0 96 960 960"
                width={48}
                fill={mode==="dark" ? "white": "black"}
              >
                <path d="M407 731q23 23 66.5 21.5T537 720l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716 339l-52 37q-45-30-96.5-44.5T477.978 317q-140.472 0-239.225 100.215Q140 517.431 140 659.983 140 705 152.5 751q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758 478l39-52q38 56 57 112.5T875 652q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134 863q-26-48-40-97.5T80 660q0-83 31.5-156.5t85.5-128Q251 321 323.68 289T478 257Zm-9 331Z" />
              </svg>
            </div>
            <span className="max-w-[200px] m-auto block w-full info-14-16 mt-4">
            Payout every 24 hours!
            </span>
          </div>
          <div >
            <div className="rounded-full  m-auto border-4 w-28 grid place-items-center  border-primary-hover h-28 ">
              {/* bitcoin  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={48}
                viewBox="0 96 960 960"
                width={48}
                fill={mode==="dark" ? "white": "black"}
              >
                <path d="M370 936v-90H240v-60h90V366h-90v-60h130v-90h60v90h110v-90h60v93q54 11 87 53t33 94q0 28-11 55.5T677 561q39 20 61 56.5t22 78.5q0 62-43.5 106T610 846h-10v90h-60v-90H430v90h-60Zm20-390h180q38 0 64-26.5t26-63.5q0-38-26-64t-64-26H390v180Zm0 240h220q38 0 64-26.5t26-63.5q0-38-26-64t-64-26H390v180Z" />
              </svg>
            </div>
            <span className="m-auto mt-4 block max-w-[200px] w-full info-14-16 ">
            Unlimited referrals
            </span>
          </div>
          <div className="">
            <div className="rounded-full m-auto border-4 w-28 grid place-items-center  border-primary-hover h-28 ">
              {/* flash  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={48}
                viewBox="0 96 960 960"
                width={48}
                fill={mode==="dark" ? "white": "black"}
              >
                <path d="m393 891 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400 976h-80Zm153-395Z" />
              </svg>
            </div>
            <span className="m-auto mt-4 max-w-[200px] block w-full info-14-16">
            Unlimited rewards
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner