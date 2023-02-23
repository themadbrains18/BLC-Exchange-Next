import {useState} from 'react'
import Image  from 'next/image';
const SecurityHistoryTable = () => {
    const [data, setData] = useState(true);
    return (
            <div className="overflow-x-auto table_box mt-2">
                <div className="table mt-4 w-max sm:w-full border border-border-clr rounded-sm ">
                    <div className={`head_row bg-table-bg dark:bg-black-v-4 grid grid-cols-5 gap-4  border-b border-border-clr `} >
                        <div className="head_col p-3 info-12 !text-base dark:!text-white">Time</div>
                        <div className="head_col p-3 info-12 !text-base dark:!text-white">Actions</div>
                        <div className="head_col p-3 info-12 !text-base dark:!text-white">Login Location</div>
                        <div className="head_col p-3 info-12 !text-base dark:!text-white">IP Address</div>
                        <div className="head_col p-3 info-12 !text-base dark:!text-white">Device</div>
                    </div>
                    {data ? (
                        <div className="row grid bg-white dark:bg-black-v-1  grid-cols-5 gap-4 justify-between border-b border-border-clr ">
                            <div className="col info-12  p-3 text-black dark:!text-white">2023-02-23 14:13:26</div>
                            <div className="col info-12  p-3 text-black dark:!text-white"> Setting / Changing of anti-phishing code</div>
                            <div className="col info-12  p-3 text-black dark:!text-white"> India-Punjab-Mansa</div>
                            <div className="col info-12  p-3 text-black dark:!text-white"> 103.183.34.68</div>
                            <div className="col info-12  p-3 text-black dark:!text-white flex items-center gap-[10px]">Chrome 11 110.0.0.0(Windows 10) </div>
                        </div>
                    ) :
                    (
                    <div className="grid place-content-center w-full h-96 ">
                        <Image
                            src={"/assets/icons/noData.svg"}
                            alt="No Data"
                            height={50}
                            width={50}
                        />
                        <h4 className="info-14 text-disable-clr text-center">
                            No Data
                        </h4>
                    </div>
                )}
            </div>
            </div>
            )
    }

export default SecurityHistoryTable;