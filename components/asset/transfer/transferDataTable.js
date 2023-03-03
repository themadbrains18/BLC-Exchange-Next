import React from "react";
import Image from "next/image";
import moment from 'moment';

const TransferDataTable = ({data}) => {
  return (
    <>
      <div className="overflow-x-auto duration-300 table_box  ">
        <div className="table mt-8 w-max md:w-full border border-border-clr rounded-sm ">
          <div
            className={`head_row bg-table-bg grid grid-cols-5 gap-4  border-b border-border-clr dark:bg-black-v-4 `}
          >
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              Time{" "}
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              Coin
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              Amount
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              From
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              To
            </h4>
          </div>
          {data && data.length > 0 ? (
            <div>
              {data.map((item)=>{
                return <div className="row grid bg-white grid-cols-5 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a') }
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  {item.symbol}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  {item.balance}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                 {item.from}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  {item.to}
                </h4>
              </div>
              })}
              
              
            </div>
          ) : (
            <div className="xl:grid xl:place-content-center w-full p-4">
              <div className="inline-grid">
                <Image
                  src={"/assets/icons/noData.svg"}
                  alt="No Data"
                  className=""
                  height={200}
                  width={200}
                />
                <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                  No Data
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TransferDataTable