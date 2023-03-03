import React from "react";
import DataTable from "../snippets/dataTable";
import Image from "next/image";
import Link from "next/link";

const P2P = ({ show, dataShow, tokenList, assetData, overview }) => {
  const headings = ['Coin', 'Available', 'On Order', 'USDT Value', 'Operation']
  return (
    <>
   
      <div>
        <h4
          className="info-14 hover:!text-grey
                  "
        >
          Funding Asset Valuation
        </h4>
        <div className="flex justify-between ">

        <span className="section-secondary-heading font-noto">
          {show ? <span>{overview.funding}</span> : <span>****</span>} USDT{" "}
          <span className="info-12 ">
            ≈$ {show ? <span>{overview.funding}</span> : <span>****</span>}
          </span>
        </span>
        <span>
            <Link href={""} className="info-14 text-primary">
            Transaction History
            </Link>
        </span>
        </div>
        {dataShow ? (
             <DataTable heading={headings} data={tokenList} assetData={assetData}  cta={false} convertPrice={overview.convertPrice} />
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

export default P2P;
