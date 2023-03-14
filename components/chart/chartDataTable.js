import React from 'react'
import Image from "next/image";
const ChartDataTable = ({data}) => {
  return (
    <>
    <div className="overflow-x-auto table_box">
        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          <div
            className={`head_row bg-table-bg grid grid-cols-6 gap-4  border-b border-border-clr dark:bg-black-v-4 `}
          >
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
              Date{" "}
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Order Type
            </h4>
            {/* <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Source
            </h4> */}
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Price (USDT)
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Amount (DOGE)
            </h4>
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Total (USDT)
            </h4>  
             <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Status
            </h4>   
            {/* 
            <h4 className="head_col p-3 info-12 text-base dark:text-white">
            Unexecuted
            </h4>  */}
          </div>
          {data ?
           ( data.map((item, index)=>{
            return <div key={index}>
            <div className="row grid bg-white grid-cols-6 gap-4 justify-between border-b border-border-clr dark:bg-black-v-1">
              <h4 className="col info-12  p-3 text-black dark:text-white">
             {item.createdAt}
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
              {item.order_type}
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
                {item.limit_usdt}
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
                {item.token_amount}
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
                {item.volume_usdt}
                
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
               {item.status == '0'?'false':'true'}
              </h4>
              {/* <h4 className="col info-12  p-3 text-black dark:text-white">
                {" "}
                no data
              </h4>
              <h4 className="col info-12  p-3 text-black dark:text-white">
                {" "}
                no data
              </h4> */}
            </div>
           
          </div>
           })
           
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