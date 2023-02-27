import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import { getProviders, getSession } from "next-auth/react";
import Layout from "/components/layout/layout";
import SelectMenu from "/components/snippets/selectMenu";
import Image from "next/image";
import Context from "/components/contexts/context";

import SearchDropdown from "/components/snippets/search-dropdown";
import TransferDataTable from "/components/asset/transfer/transferDataTable";
import AdImage from "/components/snippets/adImage";

const Transfer = ({ assets }) => {
  let dateFilter = ["Last 7 Days", "Last 30 Days"];
  let coinData = ["All", "BGB", "BTC"];
  const [data, setData] = useState(true);
  let fromMenu = ["isolated"];
  let toMenu = ["USDT-Ⓜ"];
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
    <>
      <Layout data={assets} name="Transfer">
        <div className="grow p-4 md:p-8">
          <div className="grid lg:grid-cols-2  gap-10">
            <div>
              <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
                Transfer
              </h3>
              <div className="bg-[#f9faff] dark:bg-black-v-4 p-2 flex items-center w-fit gap-4">
                <div className="p-4">
                  <div className="bg-primary w-1 h-1 rounded-xl"></div>
                  <div className="bg-border-clr w-[1px] h-10 m-auto"></div>
                  <div className="bg-primary w-1 h-1 rounded-xl"></div>
                </div>
                <div className="">
                  <div className="border-b border-border-clr flex gap-4 items-center w-max">
                    <span className="info-12">From</span>

                    <div className={`${Switch ? "hidden" : "block"}`}>
                      <SelectMenu selectMenu={toMenu} />
                    </div>
                    <div className={`${!Switch ? "hidden" : "block"}`}>
                      <SelectMenu selectMenu={fromMenu} />
                    </div>
                  </div>
                  <div className=" flex gap-4 items-center justify-between">
                    <span className="info-12">To</span>
                    <div className={`  ${!Switch ? "hidden" : "block"}`}>
                      <SelectMenu selectMenu={toMenu} />
                    </div>
                    <div className={`${Switch ? "hidden" : "block"}`}>
                      <SelectMenu selectMenu={fromMenu} />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSwitch(!Switch);
                  }}
                >
                  <Image
                    src={"/assets/icons/switch.svg"}
                    height={24}
                    width={24}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <div className="mt-8">
                  <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                    Trading Pair
                  </h4>
                  <div className="border-b border-border-clr">
                    <div className="relative">
                      <div
                        className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
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
                          className={` ${
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
                </div>
                <div className="mt-8 ">
                  <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                    Coin
                  </h4>
                  <div className="border-b border-border-clr ">
                    <div className="relative">
                      <div
                        className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
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
                            src={`/assets/images/${coinImg2}`}
                          ></Image>
                          <p className="info-14-16 font-bold">{coin2}</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className={` ${
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
                          coin={true}
                          selectCoin={selectCoin2}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  <h4 className="">Transfer Amount</h4>
                  <div className="flex  mt-4 items-end ">
                    <input
                      type="text"
                      className="caret-primary w-full bg-transparent  outline-none"
                    />
                    <span className="text-black dark:text-white">USDC</span>
                    <span className="text-primary ml-2">All</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  <span>Available USDC USDT: 0.00000000 </span>
                  <span>Available Trading Bonus: 0 USDC</span>
                </div>
              </div>
              <p className="mt-4 text-orange-300 font-noto">
                <Image
                  className="inline"
                  src={"/assets/icons/warning.svg"}
                  height={24}
                  width={24}
                  alt=""
                />{" "}
                After transferring, all existing trading bonuses will become
                invalid, and your account equity will be reduced accordingly. Be
                aware the changes in risk if you have any open positions.{" "}
              </p>
              <p className="mt-4 text-orange-300 font-noto">
                <Image
                  className="inline"
                  src={"/assets/icons/warning.svg"}
                  height={24}
                  width={24}
                  alt=""
                />{" "}
                You will lose your trading bonuses if they are applied after
                transferring any assets, which may affect your positions and
                open orders. Your positions may be reduced (or liquidated), and
                open orders will not be kept. Carefully consider this before
                proceeding with any further transfers.{" "}
              </p>
              <button className="cta mt-8 w-full rounded-xl">Confirm</button>
            </div>
<AdImage/>
          </div>
          <div className="grow p-4 md:p-8">
            <div className="flex gap-3 justify-between items-center">
              <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
                Transfer History
              </h3>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="">
                <h4 className="info-14 hover:text-grey dark:text-white dark:hover:text-white">
                  Coin
                </h4>
                <div className="border border-border-clr ">
                  <SelectMenu selectMenu={coinData} />
                </div>
              </div>
              <div className="">
                <h4 className="info-14 hover:text-grey dark:text-white dark:hover:text-white">
                  Time
                </h4>
                <div className="border border-border-clr">
                  <SelectMenu selectMenu={dateFilter} />
                </div>
              </div>

              <div className="flex gap-3 h-[40px] self-end px-1 border border-border-clr dark:bg-black-v-4">
                <input
                  type="date"
                  className="focus:outline-none bg-transparent  dark:text-white"
                />
                <input
                  type="date"
                  className="focus:outline-none bg-transparent dark:text-white "
                />
              </div>
            </div>
            {/* dataTable */}
            <TransferDataTable data={data} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
    let menu = await data.json();
    return {
      props: {
        assets: menu.specialNav.assets,
      }, // will be passed to the page component as props
    };
  }
  // return {
  //     props: {
  //         providers,
  //     },
  // }
  return {
    redirect: { destination: "/" },
  };
}
export default Transfer;
