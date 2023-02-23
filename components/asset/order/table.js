import React from 'react'
import Image from "next/image";

const Table = ({data}) => {
  return (
    <>
     <div className="overflow-x-auto table_box mt-2 ">
            <div className="table mt-4 w-max border border-border-clr rounded-sm ">
              <div
                className={`head_row bg-table-bg grid grid-cols-10 gap-4  border-b border-border-clr `}
              >
                <div className="head_col p-3 info-12 ">Time</div>
                <div className="head_col p-3 info-12 ">Type Source</div>
                <div className="head_col p-3 info-12 ">Trading Pair</div>
                <div className="head_col p-3 info-12 ">Direction</div>
                <div className="head_col p-3 info-12 ">Price</div>
                <div className="head_col p-3 info-12 ">Amount</div>
                <div className="head_col p-3 info-12 ">Total</div>
                <div className="head_col p-3 info-12 ">
                  Executed | Unexecuted
                </div>
                <div className="head_col p-3 info-12 ">Progress | Status</div>
                <div className="head_col p-3 info-12 ">Actions</div>
              </div>
              {data ? (
                <div className="row grid bg-white grid-cols-10 gap-4 justify-between border-b border-border-clr ">
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
                  <div className="col info-12  p-3 text-black"> no data</div>
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
  )
}

export default Table