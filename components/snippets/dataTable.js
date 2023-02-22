import React from 'react'

const DataTable = ({ heading, data, cta }) => {
  return (
    <>
      <div className='overflow-x-auto table_box'>

        <div className="table mt-4 w-max md:w-full border border-border-clr rounded-sm ">
          {
            heading &&
            <div className={`head_row bg-table-bg grid ${cta ? 'grid-cols-3 ': 'grid-cols-5 ' } gap-4  border-b border-border-clr `}>
              {heading.map((e, i) => {
                return (
                  <>
                    <div className="head_col p-3 info-12 max-w-[130px]">{e}</div>
                  </>

                  // <div className="head_col p-3 info-12 max-w-[130px]">sdfdrf</div>
                  // <div className="head_col p-3 info-12 max-w-[130px]">sdfdrb</div>
                  // <div className="head_col p-3 info-12 max-w-[130px]">sdfdrf</div>
                  // <div className="head_col p-3 info-12 max-w-[130px]">sdfdsfcsdggp  bfdgfdj cgh  vhf vszh sfs hf sg wasgrf</div>
                )
                })
              }
            </div>

          }
          {
            data &&
            <div className="row grid bg-white grid-cols-5 gap-4 justify-between border-b border-border-clr ">
              <div className="col info-12 max-w-[130px] p-3 text-black"> dfdssg</div>
              <div className="col info-12 max-w-[130px] p-3 text-black"> dfd hfdug</div>
              <div className="col info-12 max-w-[130px] p-3 text-black"> dfdssg</div>
              <div className="col info-12 max-w-[130px] p-3 text-black"> dfdssg</div>
              <div className="col info-12 max-w-[130px] p-3 text-black"> dfdssg</div>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default DataTable



