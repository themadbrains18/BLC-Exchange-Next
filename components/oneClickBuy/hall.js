import React, { useContext, useRef, useState } from "react";
import Context from "/components/contexts/context";
import Image from "next/image";
import SearchDropdown from "/components/snippets/search-dropdown";
import SelectMenu from "/components/snippets/selectMenu";
const Hall = () => {

  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const { mode } = useContext(Context);
  const [coinImg, setCoinImg] = useState("bnb.png");
  const [coinImg2, setCoinImg2] = useState("bnb.png");
  const [coin, setCoin] = useState("USD");
  const [coin2, setCoin2] = useState("USD");
  let tradingPair = ["BTC/USDT", "ETH/USDT", "BTC/USDT", "BTC/USDT"];
  const [Switch, setSwitch] = useState(false);
  let coinData = ["USD", "BGB", "BTC", "EUR", "TRY", "JPY", "ARS"];
  const selectCoin = async (item) => {
    setCoin(item.name);
    setCoinImg(item.image);
    setRotate(false);
  };
  const selectCoin2 = async (item) => {
    setCoin2(item.name);
    setCoinImg2(item.image);
    setRotate2(false);
  };

  return (
    <section className="py-[80px] dark:bg-black-v-3">
        <div className="container">
            <div className='flex items-center gap-[25px]'>
              {/* buy sell cta's */}
                <div className="flex items-center gap-[20px] bg-[#cccccc7d] dark:bg-[#3d3636] p-[5px] w-full rounded">
                  <button className={`cta w-full`}>Buy</button>
                  <button className={`cta w-full`}>Sell</button>
                </div>
                {/* Prime Merchants */}
                <div className="flex items-center gap-[20px]">
                  <label>Prime Merchants </label>
                  <label className="relative inline-flex  items-center mr-5 cursor-pointer duration-500">
                     <input type="checkbox" className="sr-only peer" value="" />
                      <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                  </label> 
                </div>
                {/* Search dropdown */}
                <div className="border max-w-[190px] w-full rounded-md border-border-clr">
                  <div className="relative">
                    <div
                      className="flex cursor-pointer justify-between w-full rounded p-2"
                      onClick={() => {
                        setDropDown(!dropDown);
                        setRotate(!rotate);
                      }}
                    >
                      <div className="flex gap-3 ">
                        <Image
                          className="self-start"
                          height={24}
                          width={24}
                          alt="Coin Image"
                          src={`/assets/images/${coinImg}`}
                        ></Image>
                        <p className="info-14-16 font-bold">{coin}</p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`mt-[2px] ${
                          rotate && "rotate-90"
                        } duration-300 w-6 h-6`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={mode === "dark" ? "white" : "currentColor"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    {dropDown != false && (
                      <SearchDropdown
                        setShowDropdown={setDropDown}
                        coin={true}
                        selectCoin={selectCoin}
                      />
                    )}
                  </div>
                </div>

                {/* Search dropdown wuthout Image */}
                <div className="border rounded-md border-border-clr relative flex items-start">
                  <div className="max-w-[calc(100%-80px)] w-full">
                    <input className="h-[43px] px-[10px] max-w-full outline-none rounded-md dark:bg-transparent dark:text-white" type="number" />
                  </div>
                  <div className="max-w-[80px] w-full" >
                    <SelectMenu selectMenu={coinData} />
                  </div>
                </div>

                  {/* Search dropdown */}
                  <div className="border max-w-[190px] w-full rounded-md border-border-clr">
                  <div className="relative">
                    <div
                      className="flex cursor-pointer justify-between w-full rounded p-2"
                      onClick={() => {
                        setDropDown2(!dropDown2);
                        setRotate(!rotate);
                      }}
                    >
                      <div className="flex gap-3 ">
                        <Image
                          className="self-start"
                          height={24}
                          width={24}
                          alt="Coin Image"
                          src={`/assets/images/${coinImg2}`}
                        ></Image>
                        <p className="info-14-16 font-bold">{coin2}</p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`mt-[2px] ${
                          rotate && "rotate-90"
                        } duration-300 w-6 h-6`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={mode === "dark" ? "white" : "currentColor"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    {dropDown2 != false && (
                      <SearchDropdown
                        setShowDropdown={setDropDown2}
                        coin={true}
                        selectCoin={selectCoin2}
                      />
                    )}
                  </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hall;