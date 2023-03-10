import React, { useContext, useEffect } from "react";
import Context from "../contexts/context"; 
const DeleteModal = ({del_request_popup,setDel_Request_Popup,title,deleteItem}) => {
  const { mode } = useContext(Context);
  return (
    <>
      {/* delete confrim popup */}
      <div className={`${del_request_popup
          ? 'opacity-1 visible fixed top-[50%]'
          : 'opacity-0 invisible top-[55%]'
        }  duration-300 z-[20] fixed  left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%] dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto`}
      >
        <div
          className="max-w-[10px] w-full ml-auto cursor-pointer"
          onClick={() => setDel_Request_Popup(false)}
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60.963 60.842"
            style={{ enableBackground: 'new 0 0 60.963 60.842' }}
            xmlSpace="preserve"
          >
            <path
              fill={mode === 'dark' ? 'white' : '#231F20'}
              d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                                        c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                                        l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        C61.42,57.647,61.42,54.687,59.595,52.861z"
            />
          </svg>
        </div>

        <p className="info-16-22 dark:!text-white !text-black mt-[15px] text-center text-lg">
          {title}
        </p>
        <div className="flex justify-center space-x-3 mt-24">
          <button className='text-white border border-[#fff] py-2 px-6 rounded-lg ' onClick={() => setDel_Request_Popup(false)}>Cancel</button>
          <button className='text-white border border-[#fff] py-2 px-6 rounded-lg bg-[#1da2b4]' onClick={()=>deleteItem()}>Confirm</button>
        </div>
      </div>


      {/* delete confrim popup end */}
    </>
  )
}

export default DeleteModal;