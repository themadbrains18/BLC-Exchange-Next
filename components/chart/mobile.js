import React, { useContext, useState } from "react";
import Context from "../contexts/context";
import BuySellCard from "../snippets/buySellCard";

import DetailBox from "./detailBox";

const Mobile = () => {
    const[show,setShow]=useState(false)
    const[active,setActive]=useState(0)
    const{setClick}= useContext(Context)
  return (
    <>
      <div className="w-full">
        <DetailBox mobile={true} />
   
      <div className="flex gap-3 fixed bottom-0 right-0 w-full bg-white dark:bg-black-v-2 z-[3] p-3">

        <button
          className={`cta w-full leading-[3.5] rounded-md`}
          onClick={()=>{
            setShow(true)
            setClick(true)
          }}
        >
          Buy
        </button>{" "}
        <button
          className={`cta w-full leading-[3.5] rounded-md 
            bg-red-600 hover:bg-red-500
          `}
          onClick={()=>{
            setShow(true)
            setClick(true)
          }}
        >
          Sell 
        </button>
      </div>
 
      
      <BuySellCard show={show} setShow={setShow} active={active}/>
    
      </div>
    </>
  );
};

export default Mobile;
