import SideBar from "@/components/asset/sideBar";
import AssetLayout from "@/components/layout/assetLayout";
import Link from "next/link";
import React, { useState } from "react";

const Asset = ({ assets }) => {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  let obj = [
    { name: "Deposit", link: "" },
    { name: "Buy Crypto", link: "" },
    { name: "Withdraw", link: "" },
    { name: "Transfer", link: "" },
    { name: "MegaSwap", link: "" },
  ];
  return (
    <>
      <AssetLayout assets={assets}>
        <div>
          <div className="hidden md:flex gap-2 items-center ">
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
          <div className="box bg-primary p-3 rounded-xl mt-4">
            <div className="flex items-center gap-2">
              <h4 className="info-14 text-white hover:text-white">
                Total Equality
              </h4>

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
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    fill="transparent"
                    className="w-4 h-4"
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
            <div className="info-16-22 text-white mt-2">
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
                  href={e.link}
                  className={`w-max text-center py-2 px-4 font-noto text-sm whitespace-nowrap rounded-lg ${
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
          You currently have no assets. Deposit or Buy Crypto To fill your wallet and start trading.
          </p>
        </div>
      </AssetLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/hello");

  let menu = await data.json();
  return {
    props: {
      assets: menu.specialNav.assets,
    }, // will be passed to the page component as props
  };
}

export default Asset;
