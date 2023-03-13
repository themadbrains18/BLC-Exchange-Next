import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "components/snippets/dropdown";
import VerificationPopup from "components/snippets/verification-popup";
import { getProviders, getSession } from 'next-auth/react'
import P2PBuySell from "components/oneClickBuy/p2pbuysell";

const Trade = ({ paymentods, sessions }) => {

  const [popup, showPopup] = useState(false);

  let dropDownItems = [
    {
      linkText: "Payment Methods",
      svgType: "card",
      linkUrl: "manage",
    },
    {
      linkText: "P2P management",
      svgType: "p2p",
      linkUrl: "manage"
    },
    {
      linkText: "Find order by code",
      svgType: "overview",
      linkUrl: "manage"
    },
    {
      linkText: "Post ad",
      svgType: "ad",
      linkUrl: "manage",
      compName: "VerificationPopup"
    },
    {
      linkText: "My ads",
      svgType: "myad",
      linkUrl: "manage"
    },
  ];


  return (
    <>
      <section className='py-10  px-5 sm:px-10 dark:bg-black-v-3'>
        <div className='container flex flex-row justify-between gap-4 lg:gap-8 flex-wrap	xl:flex-nowrap !p-0'>
          <div className='flex flex-wrap sm:flex-nowrap  gap-4 sm:gap-8 '>
            <Link href="/p2p-trade/quick" className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1 `}>Quick Buy/ Express</Link>
            <Link href="/p2p-trade/trade" className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1 !border-primary !text-primary`}>P2P Trading</Link>
          </div>

          <div
            className={`relative   group  hover:pb-8 hover:-mb-8 `}
          >
            <div className='border border-grey rounded-full flex gap-2 items-center'>
              <button className='info-14 h-[42.55px]  hover:!text-grey dark:hover:!text-white border-b-2 border-transparent pb-1 px-3 dark:text-white' >. . .</button>

            </div>
            <div>
              <Dropdown subMenu={dropDownItems} right={true} showPopup={showPopup} />
            </div>
          </div>
          <VerificationPopup popupData={{ popup, showPopup }} />
        </div>
      </section>
      <>
        <P2PBuySell paymentods={paymentods} session={sessions.user}/>
      </>

    </>
  )
}

export async function getServerSideProps(context) {

  let session = await getSession(context)

  const paymentods = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`)
    .then(res => res.json())



  if (session != null) {

    let tokenBalnces = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/post/balances/${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())
    let getPaymet = []

    getPaymet = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/payment/get-method/${session.user.id}`)
      .then(res => res.json())
    // selected menu return value
    return {
      props: {
        paymentods: paymentods, // will be passed to the page component as props
        userpaymentods: getPaymet,
        //tokenBalnces: tokenBalnces,
        sessions: session
      }
    }
  }
  else {
    return {
      props: {
        paymentods: paymentods, // will be passed to the page component as props
        userpaymentods: [],
        // tokenBalnces: [],
        sessions: {}
      }
    }
  }

}

export default Trade;