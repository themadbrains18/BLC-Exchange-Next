import React, { useContext, useState } from "react";
import Context from "../contexts/context";
import BuySellCard from "../snippets/buySellCard";

import DetailBox from "./detailBox";

const Mobile = ({symbol, assets, coins, orders}) => {

  const [show, setShow] = useState(false)
  const [active, setActive] = useState(0)
  const { setClick } = useContext(Context)
  const [isSell, setIsSell] = useState(false);

  let usdtAssets = [];
  let tokenAssets = [];
  if (assets !== undefined) {
    usdtAssets = assets.filter((item) => {
      return item.symbol === 'USDT' && item.walletType === "main_wallet"
    })

    tokenAssets = assets.filter((item) => {
      return item.symbol === symbol && item.walletType === "main_wallet"
    })
  }

  let coin = coins.filter((item)=>{
    return item.SYMBOL === symbol
  })


  return (
    <>
      <div className="w-full">
        <DetailBox mobile={true} orders={orders} coin={coin[0]} />

        <div className="flex gap-3 fixed bottom-0 right-0 w-full bg-white dark:bg-black-v-2 z-[3] p-3 ">

          <button
            className={`cta w-full leading-[3.5] rounded-md aass`}
            onClick={() => {
              setShow(true)
              setClick(true)
            }}
          >
            Buy
          </button>{" "}
          <button
            className={`cta w-full leading-[3.5] rounded-md 
            bg-red-600 hover:bg-red-500 asdasd
          `}
            onClick={() => {
              setShow(true)
              setClick(true)
              setIsSell(true)
            }}
          >
            Sell
          </button>
        </div>


        <BuySellCard show={show} setShow={setShow} active={active} symbol={symbol} sell={isSell}
        usdtBal={usdtAssets.length >0 ? usdtAssets [0].balance : 0} 
        tokenBal={tokenAssets.length >0 ? tokenAssets[0].balance : 0} token={ coin[0] }/>

      </div>
    </>
  );
};

export default Mobile;
