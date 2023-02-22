
import Layout from "/components/layout/Layout";
import ActiveCta from "/components/snippets/activeCta";
import Link from "next/link";
import React, { useState } from "react";
import Spot from "/components/asset/spot";
import Margin from "/components/asset/margin";
import P2P from "/components/asset/p2p";
import Earn from "/components/asset/earn";
import { getProviders, getSession } from "next-auth/react"

const Asset = ({ assets }) => {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [dataShow, setDataShow] = useState(true);
  let obj = [
    { name: "Deposit", link: "" },
    { name: "Buy Crypto", link: "" },
    { name: "Withdraw", link: "" },
    { name: "Transfer", link: "" },
    { name: "MegaSwap", link: "" },
  ];
  let activeCta = ["Spot", "Margin", "P2P", "Earn", "Coupons", "Merge Swap"];
  return (
    <>
      <Layout data={assets} name="asset">
        <div className="grow p-4 ">
          <div className="hidden md:flex gap-2 items-center mb-4">
            <h3 className="section-secondary-heading font-noto">Assets</h3>
            <button
              className="eyeIcon"
              onClick={() => {
                setShow(!show);
              }}
              s
            >
              {show ? (
                //   open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                // close eye
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="box bg-primary p-3 rounded-xl ">
            <div className="flex items-center gap-2">
              <h4 className="info-14 hover:!text-white !text-white ">
                Total Equality
              </h4>

              <button
                className="eyeIcon md:hidden"
                onClick={() => {
                  setShow(!show);
                }}
                
              >
                {show ? (
                  //   open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    fill="transparent"
                    // className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // close eye
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    fill="transparent"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="info-16-22 !text-white mt-2">
              <div className="flex gap-2">
                {show ? <span>0</span> : <span>****</span>}{" "}
                <h4 className="font-bold ">BTC </h4>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <h4 className="mt-2">
                $ {show ? <span>0</span> : <span>****</span>}
              </h4>
            </div>
          </div>

          <div className={`cta_box mt-4 flex gap-4 overflow-x-auto table_box`}>
            {obj.map((e, i) => {
              return (
                <Link
                  key={i}
                  href={e.link}
                  className={`w-max text-center py-2 px-4 font-noto text-sm whitespace-nowrap rounded-lg dark:text-white ${
                    index === i
                      ? "bg-primary text-white"
                      : " border border-border-clr"
                  }`}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
          <p className="bg-table-bg p-2 mt-3 rounded-lg">
            You currently have no assets.{" "}
            <Link href="" className="text-primary">
              {" "}
              Deposit
            </Link>{" "}
            or{" "}
            <Link href="" className="text-primary">
              {" "}
              Buy Crypto
            </Link>{" "}
            To fill your wallet and start trading.
          </p>
          <div className="mt-3   overflow-x-auto table_box border-b border-border-clr">
            <ActiveCta data={activeCta} active={active} setActive={setActive} />
          </div>
          <div className="mt-3">
             
          {active === 0 && (
            <Spot setDataShow={setDataShow} show={show} dataShow={dataShow}/>
          )}
          {active === 1 && (
            <Margin setDataShow={setDataShow} show={show} dataShow={dataShow}/>
          )}
          {active === 2 && (
            <P2P setDataShow={setDataShow} show={show} dataShow={dataShow}/>
          )}
          {active === 3 && (
            <Earn setDataShow={setDataShow} show={show} dataShow={dataShow}/>
          )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {

  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders()
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

export default Asset;
