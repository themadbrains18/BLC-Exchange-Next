import React, { useEffect, useState } from "react";
import DataTable from "../snippets/dataTable";
import Image from "next/image";

import Link from "next/link";

const Spot = ({ show, dataShow, setDataShow, tokenList, assetList }) => {
  const headings = ['Coin', 'Available', 'On Order', 'BTC Value', 'Operation']


  return (
    <>
      <div >
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div>
              <h4
                className="info-14 hover:!text-grey
                  "
              >
                Estimated Spot Balance
              </h4>
              <span className="section-secondary-heading font-noto">
                {show ? <span>0.00000000</span> : <span>****</span>} BTC <span className="info-12 ">
                  ≈$ {show ? <span>0</span> : <span>****</span>}
                </span>
              </span>
            </div>
          </div>
          <div>
            <Link href={""}>
              <h4 className="info-14 hover:!text-grey ">Today is PNL </h4>
            </Link>
            <span className="section-secondary-heading font-noto">
              {show ? <span>0</span> : <span>****</span>} BTC
            </span>
            <span className="info-12 ">
              ≈$ {show ? <span>0</span> : <span>****</span>}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4 md:items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-max py-3 px-4 md:p-2 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-primary"
          />
          <button
            onClick={() => {
              setDataShow(!dataShow);
            }}
            className="text-left leading-[0]"
          >
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-0 focus:ring-0 accent-primary"
              />

              <span className="ml-2 info-12 text-black">Hide</span>
            </label>
          </button>
          <span className='info-12'>0 Balances</span>
          <Link href={""} className='info-12'>Convert Small Balances into BGB</Link>
        </div>
        <div className="flex items-center gap-2 justify-between border-b border-border-clr py-3">
          <span className=" info-12 text-primary ">BGB fee Discount-20%</span>
          <label
            className={`relative inline-flex  items-center mr-5 cursor-pointer duration-500`}
          >
            {" "}
            <input
              type="checkbox"
              defaultValue=""
              className="sr-only peer"
              defaultChecked=""
            />
            <div className="-z-[1] duration-500 w-9 h-5 bg-gray-200 rounded-full   dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
          </label>
        </div>
      </div>
      <div className="">
      
     
        {dataShow ? (
          <>
            <DataTable heading={headings} data={tokenList} assetList={assetList} cta={false}/>
            {/* {tokenList.length && 
              tokenList.map((elem)=>{
                console.log("elem.fullName",elem.fullName)
                return (
                  <DataTable  data={[elem.fullName]} cta={false}/>
                  )
              })
            } */}
          </>
        ) : (
          <div className="grid place-content-center w-full h-96 ">
            <Image
              src={"/assets/icons/noData.svg"}
              alt="No Data"
              height={50}
              width={50}
            />
            <h4 className="info-14 text-disable-clr text-center">No Data</h4>
          </div>
        )}


      </div>
    </>
  );
};

export default Spot;
