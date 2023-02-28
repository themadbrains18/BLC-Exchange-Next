import React from "react";
import DataTable from "../snippets/dataTable";
import Image from "next/image";
import Link from "next/link";

const P2P = ({ show, dataShow, tokenList, assetData }) => {
  const headings = ['Coin','Available','On Order','BTC Value','Operation']
  return (
    <>
   
      <div>
        <h4
          className="info-14 hover:!text-grey
                  "
        >
          P2P Asset Valuation
        </h4>
        <div className="flex justify-between ">

        <span className="section-secondary-heading font-noto">
          {show ? <span>0</span> : <span>****</span>} BTC{" "}
          <span className="info-12 ">
            ≈$ {show ? <span>0</span> : <span>****</span>}
          </span>
        </span>
        <span>
            <Link href={""} className="info-14 text-primary">
            Transaction History
            </Link>
        </span>
        </div>
        {dataShow ? (
             <DataTable heading={headings} data={tokenList} assetData={assetData}  cta={false}/>
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
