import React, { useState } from "react";
import DataTable from "../snippets/dataTable";
import Image from "next/image";

import Link from "next/link";
import ActiveCta from "../snippets/activeCta";
const Margin = ({ show, dataShow, tokenList,assetData,overview }) => {
  const [active, setActive] = useState(0);
  const headings = ['Coin', 'Available', 'On Order', 'USDT Value', 'Operation']

  return (
    <>
      <div>
        <div>
          <h4
            className="info-14 hover:!text-grey
                  "
          >
            Total assets in margin account
          </h4>
          <span className="section-secondary-heading font-noto">
            {show ? <span>{overview.trade}</span> : <span>****</span>} USDT{" "}
            <span className="info-12 ">
              ≈$ {show ? <span>{overview.trade}</span> : <span>****</span>}
            </span>
          </span>
        </div>
        <div className="mt-2">
          <ActiveCta
            data={["Cross margin", "Isolated margin"]}
            setActive={setActive}
            active={active}
            type="second"
          />
        </div>
        <div>
          {/* <h4
            className="info-14 hover:!text-grey
                  "
          >
            Cross margin assets
          </h4>
          <span className="info-14-24">
            {" "}
            {show ? <span>0.00000000</span> : <span>****</span>} BTC{" "}
          </span>
          <span className="info-12 ">
            ≈$ {show ? <span>0</span> : <span>****</span>}
          </span> */}
          {dataShow ? (
            <DataTable  heading={headings}
            data={tokenList}
             assetData={assetData}
            cta={true} trade ={true} convertPrice={overview.convertPrice}/>
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
      </div>
    </>
  );
};

export default Margin;
