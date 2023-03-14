import React, { useState ,useContext} from 'react'
import BuySell from '../oneClickBuy/buySell';
import Advantages from '@/components/oneClickBuy/advantages'
import Faq from '@/components/oneClickBuy/faq'
import Dropdown from './dropdown';
import VerificationPopup from "./verification-popup";
import Link from 'next/link';
import Context from "components/contexts/context";


const SubHeader = ({sessions}) => {

  const { login } = useContext(Context);
  // const [login2, setLogin2] = useState(login)

  console.log(login + "  login ============");
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
  const [popup, showPopup] = useState(false);
  return (
    <>

      <section className='py-10  px-5 sm:px-10 dark:bg-black-v-3'>
        <div className='container flex flex-row justify-between gap-4 lg:gap-8 flex-wrap	xl:flex-nowrap !p-0'>
          <div className='flex flex-wrap sm:flex-nowrap  gap-4 sm:gap-8 '>
            <div className='flex flex-wrap sm:flex-nowrap  gap-4 sm:gap-8 '>
              <Link href="/p2p-trade/quick" className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1 !border-primary !text-primary`}>Quick Buy/ Express</Link>
              <Link href="/p2p-trade/trade" className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1 `}>P2P Trading</Link>
            </div>
          </div>

          


          <div
            className={`relative  group  hover:pb-8 hover:-mb-8 `}
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
        <BuySell sessions={sessions}/>
        <Advantages />
        <Faq />
      </>

    </>
  )
}


export default SubHeader
