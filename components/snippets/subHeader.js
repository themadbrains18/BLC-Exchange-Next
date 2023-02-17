import React, { useState ,useContext} from 'react'
import BuySell from '../oneClickBuy/buySell';
import Advantages from '@/components/oneClickBuy/advantages'
import Faq from '@/components/oneClickBuy/faq'
import Context from "../contexts/context";
import Hall from '../oneClickBuy/hall';
const SubHeader = () => {
  const [show, setShow] = useState(1);
  const { mode } = useContext(Context);
  return (
    <>
    
      <section className='py-10  px-5 sm:px-10 pt-[120px] dark:bg-black-v-3'>
        <div className='container flex flex-col md:flex-row justify-between gap-4 lg:gap-8'>
          <div className='flex flex-wrap sm:flex-nowrap  gap-4 sm:gap-8 '>
            <button className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1  ${show === 1 ? " !border-primary !text-primary" : ""}`} onClick={() => { setShow(1) }}>Quick Buy/ Express</button>
            <button className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1  ${show === 2 ? " !border-primary  !text-primary " : ""}`} onClick={() => { setShow(2) }}>P2P Trading</button>
            <button className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1  ${show === 3 ? " !border-primary  !text-primary " : ""}`} onClick={() => { setShow(3) }}>Credit/Debit card</button>
            <button className={`info-14-20 border-b-2 border-transparent text-start whitespace-nowrap pb-1  ${show === 4 ? " !border-primary  !text-primary " : ""}`} onClick={() => { setShow(4) }}>Bank Deposit</button>
          </div>
          <div className='sm:flex hidden gap-2 items-center'>
            <button className='info-14 border-b-2 border-transparent pb-1 px-3 flex items-center gap-2 dark:text-white hover:!text-grey dark:hover:!text-white' >
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x={0} y={0} version="1.1" fill={mode === "dark" ? "white" : "currentColor"} viewBox="0 0 29 29" width="16px" height="16px" xmlSpace="preserve">
                <path d="M17 21.5H4a2 2 0 01-2-2v-10a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2zM21 11.5v6l4.445 2.964A1 1 0 0027 19.631V9.369a1 1 0 00-1.555-.832L21 11.5z" />
              </svg>
                Video Guide
            </button>
            <a href="#" className='info-14 border-b-2 border-transparent px-3 dark:text-white hover:!text-grey dark:hover:!text-white' >Merchant Application</a>
            <a href="#" className='info-14 border-b-2 border-transparent px-3 dark:text-white hover:!text-grey dark:hover:!text-white' >Orders</a>
            <button className='info-14  hover:!text-grey dark:hover:!text-white border-b-2 border-transparent pb-1 px-3 dark:text-white' >. . .</button>
          </div>
        </div>
      </section>
      {show===1 &&
        <>
          <BuySell />
          <Advantages />
          <Faq />
        </>
      }
      {show===2 &&
        <Hall />
      }
    </>
  )
}

export default SubHeader
