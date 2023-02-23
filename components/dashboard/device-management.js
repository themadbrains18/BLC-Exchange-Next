import {useState,useContext} from 'react';
import Image  from 'next/image';
import Link  from 'next/link';
import Context from '/components/contexts/context';
const DeviceManagement = () => {
const { mode } = useContext(Context);
const [data, setData] = useState(true);
  return (
    <div className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-[40px] px-[20px] py-10">
        <h4 className='section-secondary-heading flex items-center gap-4 flex-row-reverse justify-end mb-[30px]'>
            <span>Device Management</span>
            <Link href="setting">
                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"  fillRule="evenodd" />
                </svg>
            </Link>
        </h4>
        <div className="overflow-x-auto table_box mt-2">
            <div className="table mt-4 w-max sm:w-full border border-border-clr rounded-sm ">
                <div className={`head_row bg-table-bg dark:bg-black-v-4 grid grid-cols-5 gap-4  border-b border-border-clr `} >
                    <div className="head_col p-3 info-12 !text-base dark:!text-white ">Device</div>
                    <div className="head_col p-3 info-12 !text-base dark:!text-white ">Login Time</div>
                    <div className="head_col p-3 info-12 !text-base dark:!text-white ">Login Location</div>
                    <div className="head_col p-3 info-12 !text-base dark:!text-white ">IP</div>
                    <div className="head_col p-3 info-12 !text-base dark:!text-white ">Actions</div>
                </div>
                {data ? (
                    <div className="row grid bg-white dark:bg-black-v-1 grid-cols-5 gap-4 justify-between border-b border-border-clr ">
                        <div className="col info-12  p-3 text-black dark:!text-white">Chrome 11 110.0.0.0(Windows 10)</div>
                        <div className="col info-12  p-3 text-black dark:!text-white"> 2023-02-23 11:14:03</div>
                        <div className="col info-12  p-3 text-black dark:!text-white"> India-Punjab-Mansa</div>
                        <div className="col info-12  p-3 text-black dark:!text-white"> 103.183.34.68</div>
                        <div className="col info-12  p-3 text-black dark:!text-white flex items-center gap-[10px]">
                            <span className="info-12 !text-primary cursor-pointer">Delete</span>
                            <span className="info-12 !text-primary cursor-pointer"> Details</span>
                        </div>
                    
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
    </div>
  )
}

export default DeviceManagement;