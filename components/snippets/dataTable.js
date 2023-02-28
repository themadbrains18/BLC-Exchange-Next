import React from 'react'

const DataTable = ({ heading, data, assetData, cta }) => {
 

  return (
    <>
      <div className='overflow-x-auto table_box'>

        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          {
            heading &&
            <div
              className={`head_row bg-table-bg grid ${`grid-cols-${heading.length} `} gap-4  border-b border-border-clr dark:bg-black-v-4 `}
            >

              {heading.map((e, i) => {
                return (
                  <div key={i} className="head_col p-3 info-12 text-base dark:text-white">{e}</div>
                )
              })
              }
            </div>

          }
          {
            data &&
            <div className={`row grid bg-white ${`grid-cols-${heading.length} `} gap-4 justify-between border-b border-border-clr dark:bg-black-v-1 `}>

              {!cta ?
                data.length &&
                data.map((elem) => {
                  let balance = 0.00;
                  assetData!==undefined && assetData.length>0 && assetData.filter((e) => {
                    if(e.token_id === elem.id){
                      balance = e.balance
                    }
                  })
                  return (
                    <>

                      <div className="col info-14-16 max-w-[130px] flex gap-2 p-3 text-black">
                        <img src={elem.image} alt='token' className='w-6 h-6'></img>
                        {elem.symbol}
                      </div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white"> 
                      {balance}
                      </div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white"> 0.000000</div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white">0.000000</div>
                     <div className="col info-14-16 max-w-[130px] flex justify-between gap-5 p-3">  
                     <button className='info-12 text-primary'>Transfer</button>
                    <button className='info-12 text-primary'>Deposit</button>
                      <button className='info-12 text-primary'>Withdraw</button>
                     </div>
                      
                    </>
                  )
                }) :
                data.length &&
                data.map((elem) => {
                  let balance = 0.00;
                  assetData!==undefined && assetData.length>0 && assetData.filter((e) => {
                    if(e.token_id === elem.id){
                      balance = e.balance
                    }
                  })
                  return (
                    <>

                      <div className="col info-14-16 max-w-[130px] flex gap-2 p-3 text-black dark:text-white">
                        <img src={elem.image} alt='token' className='w-6 h-6'></img>
                        {elem.symbol}
                      </div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white">{balance}</div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white"> 0.000000</div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white">0.000000</div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black dark:text-white">0.000000</div>
                      <div className="col info-14-16 max-w-[130px] p-3 text-black">0.000000</div>
                      <div className="col info-14-16 max-w-[130px] flex justify-between dark:text-white gap-5 p-3 text-black">
                        <button className='info-12 text-primary'>Transfer</button>
                        <button className='info-12 text-primary'>Deposit</button>
                        <button className='info-12 text-primary'>Withdraw</button>

                      </div>
                    </>
                  )
                })
              }



            </div>
          }

        </div>
      </div>
    </>
  )
}

export default DataTable


