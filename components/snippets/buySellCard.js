import React, { useContext } from "react";
import Link from "next/link";
import SelectMenu from "../snippets/selectMenu";
import ActiveCta from "./activeCta";
import { useState } from "react";
import Context from "../contexts/context";
const BuySellCard = ({ active, menu, sell, show, setShow }) => {
  const [activeCta, setActiveCta] = useState(0);
  const [color, setColor] = useState(0);
  let ctas = ["Limits", "Trigger Orders"];
  const { mode, setClick } = useContext(Context);
  return (
    <>
      <div
        className={`fixed -bottom-[100%] z-[4] md:z-0  bg-white dark:bg-black-v-3 p-4  duration-300 lg:static w-full py-4 ${
          show && "!bottom-[0%]"
        }`}
      >
        <div className="lg:hidden">
          <button
            className="block ml-auto mr-0 mb-4"
            onClick={() => {
              setShow(false);
              setClick(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={mode === "dark" ? "white" : "currentcolor"}
              className="w-6 h-6 mr-0 ml-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <button
                className={`cta w-full ${color === 1 && "bg-deep-blue"}`}
                onClick={() => {
                  setColor(true);
                }}
              >
                Buy
              </button>
              <button
                className={`cta w-full bg-deep-blue ${
                  color === 1 && "bg-red-600 hover:bg-red-600"
                }`}
                onClick={() => {
                  setColor(1);
                }}
              >
                Sell
              </button>
            </div>
            <ActiveCta
              type="second"
              data={ctas}
              active={activeCta}
              setActive={setActiveCta}
            />
          </div>
        </div>

        <div className="flex justify-between gap-3 items-center">
          <span className="info-14-20">
            Available 0.00000000 {sell || color === 1 ? "DOGE" : "USDT"}
          </span>
          <div className="flex gap-2">
            <Link
              href={""}
              className="transparent-cta border border-primary leading-none !text-primary"
            >
              Buy
            </Link>
            <Link
              href={""}
              className="transparent-cta border border-primary leading-none !text-primary"
            >
              Deposit
            </Link>
            <Link
              href={""}
              className="transparent-cta border border-primary leading-none !text-primary"
            >
              Transfer
            </Link>
          </div>
        </div>
        <div className="flex gap-2 items-center  mt-4 ">
          <div className="flex border border-deep-blue p-2 justify-between gap-2 w-full">
            <div>
              <span className="text-disable-clr ">Price</span>
              <span className="info-14-16 ml-2">0.0824650245</span>
            </div>
            <span className="text-disable-clr ">USDT</span>
          </div>
          <div className="border border-deep-blue">
            <SelectMenu selectMenu={menu} />
          </div>
        </div>
        <div className="flex  mt-4 items-center border border-deep-blue info-14 hover:!text-grey dark:hover:!text-white dark:text-white px-4">
          <h4 className="">Amount</h4>
          <input
            type="number"
            className="caret-primary w-full bg-transparent  outline-none p-2"
            placeholder=""
          />
          <span className="text-disable-clr ">DOGE</span>
        </div>
        {active === 0 && (
          <>
            <div className="my-8">

            <div className="mx-auto">
              <div className="bg-gray-200 dark:bg-deep-blue h-1 flex items-center justify-between">
                <div className="w-1/3 bg-primary h-1 flex items-center">
                  <div className="bg-primary h-6 w-6 rounded-full shadow flex items-center justify-center">
                    <img
                      src="/assets/icons/trueTick.svg"
                      alt="check"
                    />
                  </div>
                </div>
                <div className="w-1/3 flex justify-between bg-primary h-1 items-center relative">
                  <div className="absolute right-0 -mr-2">
                   
                  </div>
                  <div className="bg-primary h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                    <img
                       src="/assets/icons/trueTick.svg"
                      alt="check"
                    />
                  </div>
                  <div className="bg-deep-blue dark:bg-deep-blue h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                    <div className="h-3 w-3 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="w-1/3 flex justify-end">
                  <div className="bg-deep-blue dark:bg-deep-blue h-6 w-6 rounded-full shadow" />
                </div>
              </div>
            </div>
            </div>

            <div className="flex gap-2">
              <div className="flex items-center mr-4 mb-4 whitespace-nowrap ">
                <input
                  id="radio1"
                  type="radio"
                  name="radio"
                  className="hidden"
                  defaultChecked=""
                />
                <label
                  htmlFor="radio1"
                  className="flex items-center cursor-pointer "
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey " />
                  <h4 className="info-14 border-b border-disable-clr border-dotted">
                    GTC
                  </h4>
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4 whitespace-nowrap">
                <input
                  id="radio2"
                  type="radio"
                  name="radio"
                  className="hidden"
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey" />
                  <h4 className="info-14 border-b border-disable-clr border-dotted">
                    Post Only
                  </h4>
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4 whitespace-nowrap">
                <input
                  id="radio3"
                  type="radio"
                  name="radio"
                  className="hidden"
                />
                <label
                  htmlFor="radio3"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey" />
                  <h4 className="info-14 border-b border-disable-clr border-dotted">
                    IOC
                  </h4>
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4 whitespace-nowrap">
                <input
                  id="radio4"
                  type="radio"
                  name="radio"
                  className="hidden"
                />
                <label
                  htmlFor="radio4"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey" />
                  <h4 className="info-14 border-b border-disable-clr border-dotted">
                    FOK
                  </h4>
                </label>
              </div>
            </div>
          </>
        )}
        <div className="mt-4 flex gap-2">
          <span className="info-14-20 text-disable-clr">Total</span>
          <span className="info-14-20 text-disable-clr">0.000000 USDT</span>
        </div>
        <div className="flex gap-3 mt-4">
          <button
            className={`cta w-full leading-[3.5] rounded-lg ${
              sell && "bg-red-600 hover:bg-red-500"
            } ${color === 1 && "bg-red-600 hover:bg-red-500"}`}
          >
            {color === 1 ? "Sell" : "Buy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BuySellCard;
