import {useState} from 'react'
import Image from 'next/image';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import ResetPassSuccess from './reset-pass-success';

const ResetPassword = () => {
  const [show,setShow]  = useState(1);
  const showPass = (e) =>{
    if(!e.currentTarget.classList.contains("hidden")){
        e.currentTarget.classList.toggle("hidden");
        e.currentTarget.previousSibling.classList.toggle("hidden");    
        let pass_input = e.currentTarget.previousSibling.previousSibling;
        pass_input.setAttribute("type","text");
    }
}
const hidePass = (e) =>{
    if(!e.currentTarget.classList.contains("hidden")){
        e.currentTarget.classList.toggle("hidden");
        e.currentTarget.nextSibling.classList.toggle("hidden");    
        let pass_input = e.currentTarget.previousSibling;
        pass_input.setAttribute("type","password");
    }
}
  return (
    <>
      {
          show === 1 &&
          <section className="dark:bg-black-v-5 py-[80px] !pt-[120px] lg:!pt-[204px]">
              <div className="container">
                  <div className="max-w-full md:max-w-[480px] w-full p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto" >
                    <h4 className='section-secondary-heading mb-1'>Enter a new password</h4>
                    <p className='info-14 text-black dark:!text-white hover:!text-white'>Once you reset your password, any withdrawals and P2P sales will be put on a temporary hold for 24 hours.</p>

                    <form>
                      <div className='mt-5'>
                        <div className="relative mb-3">
                            <input type="password" id="pass_input" placeholder="Set password"  className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                            <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                            <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                        </div>
                        <div className="relative">
                            <input type="password" id="pass_input" placeholder="Password confirmation"  className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                            <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                            <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                        </div>
                        {/* <span className='info-12 mt-1 block !text-[#f7647e]'>Please enter Account</span> */}
                      </div>
                      <button className='cta mt-5  w-full' onClick={()=>{setShow(2)}}>Next</button>
                    </form>
                  </div> 
              </div>
          </section>
      }
      {
        show === 2 &&
        <ResetPassSuccess />
      }
    </>
  )
}

export default ResetPassword;