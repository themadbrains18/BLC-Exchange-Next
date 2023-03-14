import Context from "/components/contexts/context";
import React, { useContext } from "react";
import Link from "next/link" ;

const SecurityVerificationPopup = ({setCancleOrderPopup}) => {
    const { mode, setClick } = useContext(Context);

    return(
        <div className="rounded-md fixed top-[50%]  duration-300 z-[20] left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%]  dark:bg-black-v-4 bg-white p-3 sm:p-6 border border-grey max-w-[400px]  mx-auto">
            <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); setCancleOrderPopup(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                    <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
            </div>
            <div className="mt-[20px]">
                <p className="section-secondary-heading text-center mb-[25px]">Security Verification</p>
                <div className="flex items-center justify-between gap-[10px] mb-[10px]">
                    <p className='info-12'> Fund Code</p>
                    <Link href="/dashboard/reset-fund-code" className='info-12 !text-primary'>Forgot your fund code?</Link>
                </div>
                <input type="text" placeholder="Please enter the Fund password" className="block  border border-[#cccccc7d] px-4 max-w-full w-full font-noto bg-transparent  rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                <div className="mt-[30px] flex items-center gap-[20px]">
                    <button className="cta2 w-full" onClick={() => { setClick(false); setCancleOrderPopup(false) }}>Cancel</button>
                    <button className="cta w-full" onClick={() => { setClick(false); setCancleOrderPopup(false) }}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default SecurityVerificationPopup; 