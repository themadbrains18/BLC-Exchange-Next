import Layout from "/components/layout/layout";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { getProviders, getSession } from "next-auth/react";
import SearchDropdown from "/components/snippets/search-dropdown";
import Context from "/components/contexts/context";
import SelectMenu from "/components/snippets/selectMenu";
import AdImage from "/components/snippets/adImage";

const Withdraw = ({ assets }) => {
  const { mode } = useContext(Context);
  let network = ["BTC", "Bsc "];
  const [show, setShow] = useState(1);
  const [rotate, setRotate] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [coin, setCoin] = useState("USD");
  const [coinImg, setCoinImg] = useState("bnb.png");
  const selectCoin = async (item) => {
    setCoin(item.name);
    setCoinImg(item.image);
    setRotate(false);
  };
  return (
    <>
      <Layout data={assets} name="Withdraw">
        <div className="grow p-4 md:p-8 font-noto">
         <div className="grid lg:grid-cols-2 gap-8">
          <div>
          <div className={`flex items-end gap-5 mb-10`}>
            <button
              className={`section-secondary-heading font-noto ${
                show === 2 && "text-disable-clr"
              }`}
              onClick={() => {
                setShow(1);
              }}
            >
              Trending
            </button>
            <button
              className={`section-secondary-heading font-noto ${
                show === 1 && "text-disable-clr"
              }`}
              onClick={() => {
                setShow(2);
              }}
            >
              Innovation
            </button>
          </div>
          <div>
            <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
              Coin
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
                    className={` ${rotate && "rotate-90"} duration-300 w-6 h-6`}
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
          {show === 1 && (
            <div>
              <div className="mt-4">
                <h6 className="info-12 dark:hover:text-white dark:text-white">
                  Networks
                </h6>
                <div className="font-bold mt-2 border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr">
                  <SelectMenu selectMenu={network} />
                </div>
              </div>
              <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                <div>
                <h4 className="">Withdrawal address</h4>

                </div>
                <div className=" mt-4  ">
                  <input
                    type="text"
                    className="caret-primary w-full bg-transparent  outline-none"
                    placeholder="Enter Withdrawl Addresss"
                  />
                </div>
              </div>
              <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                <h4 className="">Amount</h4>
                <div className="flex  mt-4 items-end ">
                  <input
                    type="number"
                    className="caret-primary w-full bg-transparent  outline-none"
                    placeholder="Enter Withdrawl Amount"
                  />

                  <span className="text-primary">All</span>
                </div>
              </div>

              <div className="info-14 mt-2 flex justify-between hover:!text-grey dark:hover:!text-white dark:text-white">
                <span>Available: 0.00000000</span>
                <span className="text-primary">
                  Withdrawal Limit: - - Increase Limit
                </span>
              </div>
             
              <span className="info-14 mt-4  hover:!text-grey dark:hover:!text-white dark:text-white block" >Fee Free</span>
              <span  className="info-14 mt-2 hover:!text-grey dark:hover:!text-white dark:text-white block"  >To Receive - - BTC</span>

         
              <div className="mt-8">

              <button className="cta w-full">Submit</button>
              </div>
            </div>
          )}
          </div>
          <AdImage/>
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
export default Withdraw;
