import React, { useContext, useRef, useState } from "react";
import Context from "/components/contexts/context";
import Image from "next/image";
import SearchDropdown from "/components/snippets/search-dropdown";
import SelectMenu from "/components/snippets/selectMenu";
const Hall = () => {

  const [showDropdown,setShowDropdown] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const { mode } = useContext(Context);
  const [coinImg, setCoinImg] = useState("");
  // const [coinImg2, setCoinImg2] = useState("bnb.png");
  const [coin, setCoin] = useState("USD");
  // const [coin2, setCoin2] = useState("USD");
  let [bankList, setBankList] = useState();
  let [bankImg, setBankImg] = useState("bcp.png");
  let [bankname, setBankName] = useState("Money");
  // let tradingPair = ["BTC/USDT", "ETH/USDT", "BTC/USDT", "BTC/USDT"];
  // const [Switch, setSwitch] = useState(false);
  let coinDataList = ["USD", "BGB", "BTC", "EUR", "TRY", "JPY", "ARS"];
  const selectCoin = async (item) => {
    setCoin(item.symbol);
    setCoinImg(item.image);
    setRotate(false);
  };
  const selectBank = async (item) => {
    setBankName(item.name);
    setBankImg(item.image);
    setRotate2(false);
  };

  return (
    <section className="py-[80px] dark:bg-black-v-3">
        <div className="container">
        <div className="flex justify-between md:hidden ml-[auto] mb-[20px]" onClick={()=>{setShowDropdown(true)}}>
          <p className="info-14 !text-[18px] !text-primary ">Filter</p>
            <svg className="max-w-[32px] w-full " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.68 210.68" style={{enableBackground: 'new 0 0 210.68 210.68'}} xmlSpace="preserve">
                <path d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0
                  C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23
                  c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863
                  c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767
                  C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926
                  c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62
                  c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486
                  c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938
                  C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z" />
            </svg>
          </div>
          {/* p2p trading filter secton */}

          <div className={`${showDropdown === true ? 'block' : 'hidden md:flex'} fixed left-0 bg-[#fff] w-full min-h-screen h-full overflow-y-auto  top-[0px] z-[99] p-[15px] md:p-0 md:overflow-visible	 md:bg-transparent md:min-h-[0] md:z-[1] md:static flex flex-col	 md:flex-row  items-center gap-[15px] flex-wrap	xl:flex-nowrap`}>
            <svg onClick={()=>{setShowDropdown(false)}} className="md:hidden max-w-[24px] w-full ml-[auto]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{enableBackground: 'new 0 0 60.963 60.842'}} xmlSpace="preserve">
              <path style={{fill: '#231F20'}} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                C61.42,57.647,61.42,54.687,59.595,52.861z" />
            </svg>
            {/* buy sell cta's */}
              <div className="flex items-center gap-[15px] bg-[#cccccc7d] dark:bg-[#3d3636] p-[5px] w-full rounded">
                <button className={`cta w-full`}>Buy</button>
                <button className={`cta w-full`}>Sell</button>
              </div>
              {/* Prime Merchants */}
              <div className="flex items-center gap-[15px] max-w-full md:max-w-[180px] w-full">
                <label>Prime Merchants </label>
                <label className="relative inline-flex  items-center cursor-pointer duration-500">
                    <input type="checkbox" className="sr-only peer" value="" />
                    <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                </label> 
              </div>
              {/* Search dropdown */}
              <div className="border max-w-full md:max-w-[190px] w-full rounded-md border-border-clr">
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
                        src={`${coinImg}`}
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
              <div className="max-w-full w-full border rounded-md border-border-clr relative flex items-start">
                <div className="max-w-full md:max-w-[calc(100%-80px)] w-full">
                  <input placeholder="Enter amount" className="h-[43px] px-[10px] max-w-full outline-none rounded-md dark:bg-transparent bg-transparent dark:text-white" type="number" />
                </div>
                <div className="max-w-full md:max-w-[80px] w-full" >
                  <SelectMenu selectMenu={coinDataList} />
                </div>
              </div>

              {/* Search dropdown */}
              <div className="border max-w-full md:max-w-[230px] w-full rounded-md border-border-clr">
              <div className="relative">
                <div
                  className="flex cursor-pointer justify-between w-full rounded p-2"
                  onClick={() => {
                    setDropDown2(!dropDown2);
                    setRotate2(!rotate2);
                  }}
                >
                  <div className="flex gap-3 ">
                    <Image
                      className="self-start"
                      height={24}
                      width={24}
                      alt="Coin Image"
                      src={`/assets/images/${bankImg}`}
                    ></Image>
                    <p className="info-14-16 font-bold">{bankname}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className={`mt-[2px] ${
                      rotate2 && "rotate-90"
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
                    selectBank={selectBank}
                    bank={true}
                    
                  />
                )}

              </div>
              </div>
                
              {/* price alert */}
              <div className="max-w-[100px] w-full">
                  <p className="cursor-pointer info-14 !text-primary">Price Alert</p>
              </div>
          </div> 

          {/* p2p trading filter secton */}
        </div>
    </section>
  )
}

export default Hall;