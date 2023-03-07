import React from 'react'
import Image from "next/image";

const AdTable = ({data}) => {
  return (
    <>
     <div className="overflow-x-auto table_box  ">
        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          <div
            className={`head_row bg-table-bg grid grid-cols-7 gap-4  border-b border-border-clr dark:bg-black-v-4 `}
          >
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Token</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Price</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Quantity </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Min Limit</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Max Limit</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Payment deadline</h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">Payment Method</h4>
          </div>
          {data && data.length>0 ? (
            <div>

            <div className="row grid bg-white grid-cols-7 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
              <h4 className="col info-12  p-3 text-black dark:text-white"> no data</h4>
            </div>
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

export default AdTable