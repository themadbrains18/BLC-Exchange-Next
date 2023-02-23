import React from 'react'
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import {  useContext,useState } from 'react'
import Image from 'next/image';
import Context from '../contexts/context';
import VerificationCode from '../login-register/verification-code';
const DeleteAccountConfirm = ({SetActivePopup }) => {
  const { mode,setClick } = useContext(Context);
  const [active,setActive] = useState(1);
  const showPass = (e) => {
  if (!e.currentTarget.classList.contains("hidden")) {
      e.currentTarget.classList.toggle("hidden");
      e.currentTarget.previousSibling.classList.toggle("hidden");
      let pass_input = document.querySelector("#pass_input");
      pass_input.setAttribute("type", "text");
  }
  }
  const hidePass = (e) => {
      if (!e.currentTarget.classList.contains("hidden")) {
          e.currentTarget.classList.toggle("hidden");
          e.currentTarget.nextSibling.classList.toggle("hidden");
          let pass_input = document.querySelector("#pass_input");
          pass_input.setAttribute("type", "password");
      }
  }

  return (
    <>
    
    
    
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
            <div className="relative my-[40px]">
                <input type="password" placeholder="Enter your password" id="pass_input" className="block  px-4 max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="password"  />
                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
            </div>
            <button className="cta w-full" >Next</button>
        </div>
      </div>
      
      {/* {
        active === 2 &&
        <VerificationCode CloseCta={true} fixed={true} />
      } */}
    </>
  )
}

export default DeleteAccountConfirm;