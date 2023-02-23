import {  useContext ,useState} from 'react'
import Context from '../contexts/context';
import Link from "next/link";
import DeleteAccountConfirm from './delete-account-confirm';
const DeleteAccount = ({SetActivePopup}) => {
const { mode,setClick } = useContext(Context);
const [active,setActive] = useState(1)
  return (
    <>
    {
        active === 1 &&
   
        <div className="z-[20] fixed top-[50%] left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%]">
            <div className="dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto" >
                <div className="max-w-[24px] w-full ml-auto cursor-pointer" onClick={()=>{setClick(false);SetActivePopup(false)}}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                        <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                            c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                            l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                            l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                            C61.42,57.647,61.42,54.687,59.595,52.861z" />
                    </svg>
                </div>
                <h4 className='section-secondary-heading mb-1'>Delete account</h4>
                <p className='info-14 text-black dark:!text-white dark:hover:!text-white hover:!text-black'>After you log out, you will lose this account forever, and the mobile phone/email number bound to this account will no longer be able to be used on this platform; All features of this account (including API keys) will be disabled or deleted. Please ensure that you have withdrawn all account assets, and have completed deposits, withdrawals, and all transaction processes. Our customer service staff will assist in checking and reviewing your account closure. We appreciate your patience.</p>
                <div className="relative my-5 inline-block">
                    <input id="checkbox" type="checkbox" className="hidden agree_cta" />
                    <label htmlFor="checkbox" className="relative info-14 hover:!text-grey pl-[25px] after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-[16px] after:h-[16px] cursor-pointer">I agree to the <Link href="#" className="text-primary">Terms of Use</Link></label>
                </div>
                <div className="flex items-center gap-[20px]">
                    <button className="cta w-full" onClick={()=>{ ;setClick(false);SetActivePopup(false)}} >Cancel</button>
                    <button className="cta w-full" onClick={()=>{ setActive(2)}}>Confirm</button>
                </div>
            </div>
        </div>
         }
        {
            active === 2 &&
            <DeleteAccountConfirm SetActivePopup={SetActivePopup } />
        }
    </>
  )
}

export default DeleteAccount;