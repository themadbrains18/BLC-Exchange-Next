import React from 'react'
import Image from "next/image";
const ChartDataTable = ({data}) => {
  return (
    <>
    <div className="overflow-x-auto table_box">
        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          <div
            className={`head_row bg-table-bg grid grid-cols-8 gap-4  border-b border-border-clr dark:bg-black-v-4 `}
          >
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              Date{" "}
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Direction
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Source
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Price (USDT)
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Amount (DOGE)
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Total (USDT)
            </h4>   <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Executed
            </h4>   <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Unexecuted
            </h4> 
          </div>
          {data ? (
            <div>
              <div className="row grid bg-white grid-cols-8 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data{" "}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data{" "}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data{" "}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data{" "}
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
              </div>
              <div className="row grid bg-white grid-cols-5 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
                <h4 className="col info-12  p-3 text-black dark:text-white">
                  {" "}
                  no data
                </h4>
              </div>
            </div>
          ) : (
            <div className="xl:grid xl:place-content-center w-full p-4">
              <div className="inline-grid">
                <Image
                  src={"/assets/icons/noData.svg"}
                  alt="No Data"
                  className=""
                  height={60}
                  width={60}
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
  )
}

export default ChartDataTable