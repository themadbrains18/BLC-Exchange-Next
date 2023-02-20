import {useState,useContext} from 'react'
import Image from 'next/image';
import Link from 'next/Link';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import Context from '@/components/contexts/context';
import VerificationCode from './../login-register/verification-code';
const ModifyPass = ()=>{
    const { mode , setClick} = useContext(Context);
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
    return(
        <>
            
                
                <section className="dark:bg-black-v-5">
                    <div className="container">
                        <div className="md:max-w-[480px] p-3 sm:p-6 max-w-[480px] w-full mx-auto" >
                        <h4 className='section-secondary-heading mb-1 flex items-center gap-4 flex-row-reverse justify-end'>
                            <span>Modify login password</span>
                            <Link href="/setting">
                                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"  fillRule="evenodd" />
                                </svg>
                            </Link>
                        </h4>
                        <p className='info-14 !text-[#ff7b1b]  hover:!text-[#ff7b1b] dark:hover:!text-[#ff7b1b]'>It won’t able to withdraw coins in 24 hours after modifying the password</p>

                        <form>
                            <div className='mt-5'>
                            <div className="relative mb-3">
                                <input type="password" id="pass_input1" placeholder="Current password"  className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                            </div>
                            <div className="relative mb-3">
                                <input type="password" id="pass_input2" placeholder="New password"  className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                            </div>
                            <p className="info-12 mt-[8px] mb-[15px] leading-[16px]">Please ensure the password consists of 8 to 32 characters, at least 1 number, 1 uppercase letter, and 1 special character</p>
                            <div className="relative">
                                <input type="password" id="pass_input3" placeholder="Confirm new password"  className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                            </div>
                            {/* <span className='info-12 mt-1 block !text-[#f7647e]'>Please enter Account</span> */}
                            </div>

                            <button className='relative cta mt-5  w-full' onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("hide_text");setTimeout((e)=>{setClick(true); setShow(2)},3000)}}>
                                <span>Next</span>
                                {/* spinner */}
                                    <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                {/* spinner */}
                            </button>

                        </form>
                        </div> 
                    </div>
                </section>
            
            {
                show === 2 &&
                <VerificationCode modifyPass={true} fixed={true} showState={show} showSetState={setShow} />
            }
        </>
    )
}
export default ModifyPass;