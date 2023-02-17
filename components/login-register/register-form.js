import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import qrImage from "../../public/assets/images/qr.png";
import LeftSide from './left-side';
import SearchDropdown from '../snippets/search-dropdown';
import VerificationCode from './verification-code';
import WelcomePopup from './welcome-popup';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';

const RegisterForm = () => {
  const[show,setShow] = useState(1);
  const[showForm,setShowForm] = useState(1);
  const[active,setActive] = useState(false);
  const[showDropdown,setShowDropdown] = useState(false);
  const[DropdownPhone,setDropdownPhone] = useState(false);

    const showPass = (e) =>{
        if(!e.currentTarget.classList.contains("hidden")){
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.previousSibling.classList.toggle("hidden");    
            let pass_input = document.querySelector("#pass_input");
            pass_input.setAttribute("type","text");
        }
    }
    const hidePass = (e) =>{
        if(!e.currentTarget.classList.contains("hidden")){
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.nextSibling.classList.toggle("hidden");    
            let pass_input = document.querySelector("#pass_input");
            pass_input.setAttribute("type","password");
        }
    }



  return (
    <section className='dark:bg-black-v-5 py-[80px] !pt-[120px] lg:!pt-[204px]' >
        <div className='container'>
            <div className="flex flex-col md:flex-row items-start gap-10">
                {/* section left side */}
                <LeftSide />
                {/* register part */}
                {
                    showForm === 1 &&

                    <div className="max-w-full md:max-w-[50%] w-full p-3 sm:p-6 border border-grey mx-auto">
                        <h4 className='section-secondary-heading mb-5'>Welcome back</h4>
                        <div className="my-8 relative">
                            <p className='info-14 hover:!text-grey inline-flex items-center gap-3 cursor-pointer' onClick={(e)=>{setShowDropdown( !showDropdown)}}>
                                <span>Country / Region:</span>
                                <span className="flex items-center gap-2 ">
                                    <span className="text-black dark:text-white" id="countryName">Botswana</span>
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                </span>
                            </p>
                            {
                                showDropdown != false &&
                                <SearchDropdown setShowDropdown={setShowDropdown} country={true} />
                            }
                        </div>
                        <div className='flex gap-8 mb-8'> 
                            <button className={`info-14 border-b-2 border-transparent pb-1  ${show === 1 ? " !border-primary !text-primary"   : ""}`} onClick={()=>{setShow(1)}}>Email</button>
                            <button className={`info-14 border-b-2 border-transparent pb-1  ${show === 2 ? " !border-primary  !text-primary " : ""}`} onClick={()=>{setShow(2)}}>Mobile number</button>
                        </div>

                        {/* form */}
                            <form>
                            {
                                show === 1 &&
                                <input type="email" placeholder="Email" className="block  mb-4 px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                            }
                            {
                                show === 2 &&
                                
                                <div className="border border-black dark:border-white rounded min-h-[46px] mb-4 px-4 flex items-center relative">
                                    <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={()=>{setDropdownPhone(!DropdownPhone)}}>
                                        <span className="text-black dark:text-white" id="counteryCode">+ <span>91</span> </span>
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    </div>
                                    <input type="tel" placeholder="Mobile number" className=" block  px-4 max-w-full w-full bg-transparent  text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary" name="email" />
                                    {
                                        DropdownPhone != false && 
                                        <SearchDropdown setDropdownPhone={setDropdownPhone}  code={true} />
                                    }
                                </div>
                            }
                            <div className="relative">
                                <input type="password" placeholder="Set password"  id="pass_input" className="block  px-4 max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="password" />
                                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e)=>{hidePass(e)}} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]"  onClick={(e)=>{showPass(e)}} />
                            </div>
                                <div className="mt-5">
                                    <label className="inline-flex items-center gap-3 info-14 hover:!text-grey mb-3 cursor-pointer" onClick={()=>{setActive(!active)}}>
                                        <span>Referral Code (Optional)</span>
                                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                        </label>
                                    {
                                        active != false &&
                                        <input type="tel" placeholder="Referral Code (Optional)" className="block px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="referelCode" />
                                    }
                                    </div>
                                
                                <button className='cta my-5  w-full' onClick={()=>{setShowForm(2)}}>Create Account</button>
                                <div className="relative mb-5 inline-block">
                                    <input id="checkbox" type="checkbox" className="hidden agree_cta" />
                                    <label htmlFor="checkbox" className="relative info-14 hover:!text-grey pl-[25px] after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-[16px] after:h-[16px] cursor-pointer">I agree to the <Link href="#" className="text-primary">Terms of Use</Link></label>
                                </div>
                        </form>
                    

                        <div className='bg-grey w-full h-[1px] my-5'></div>
                        <div className='text-center mt-[-33px] mb-[20px]'>
                            <p className='mt-[-33px] text-grey bg-white dark:bg-black-v-5 inline-block px-3 -translate-y-35'>Or login with</p>
                        </div>
                        <div className='flex gap-3 mt-8 justify-between sm:justify-start mb-5'>
                            <Link href="#" className='p-3 bg-black-v-4 block   w-full rounded'> 
                                <svg width={20} height={21} className="mx-auto" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_610_15204)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6 11.2254C19.6 10.5163 19.5364 9.83448 19.4182 9.17993H10V13.0481H15.3818C15.15 14.2981 14.4455 15.3572 13.3864 16.0663V18.5754H16.6182C18.5091 16.8345 19.6 14.2708 19.6 11.2254Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 20.9979C12.6998 20.9979 14.9635 20.1025 16.618 18.5752L13.3862 16.0661C12.4907 16.6661 11.3453 17.0207 9.99984 17.0207C7.39529 17.0207 5.19075 15.2616 4.40439 12.8979H1.06348V15.4889C2.70893 18.757 6.09075 20.9979 9.99984 20.9979Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.40455 12.898C4.20455 12.298 4.09091 11.6571 4.09091 10.998C4.09091 10.3389 4.20455 9.69799 4.40455 9.09799V6.50708H1.06364C0.386364 7.85708 0 9.38435 0 10.998C0 12.6116 0.386364 14.1389 1.06364 15.4889L4.40455 12.898Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99984 4.97532C11.468 4.97532 12.7862 5.47987 13.8226 6.47077L16.6907 3.60259C14.9589 1.98896 12.6953 0.998047 9.99984 0.998047C6.09075 0.998047 2.70893 3.23896 1.06348 6.50714L4.40439 9.09805C5.19075 6.73441 7.39529 4.97532 9.99984 4.97532Z" fill="white" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_610_15204">
                                        <rect y="0.998047" width={20} height={20} rx={6} fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href="#" className='p-3 bg-black-v-4  w-full  block  rounded'>
                                <svg width={20} className="mx-auto" height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_610_15206)">
                                    <path d="M18.1437 16.5841C17.8385 17.2829 17.4772 17.9261 17.0586 18.5174C16.4881 19.3235 16.0209 19.8815 15.6609 20.1914C15.1027 20.7 14.5048 20.9605 13.8644 20.9753C13.4047 20.9753 12.8504 20.8457 12.205 20.5828C11.5576 20.321 10.9626 20.1914 10.4186 20.1914C9.84801 20.1914 9.23608 20.321 8.58155 20.5828C7.92602 20.8457 7.39793 20.9828 6.99417 20.9963C6.38012 21.0223 5.76806 20.7544 5.15713 20.1914C4.7672 19.8544 4.27947 19.2766 3.6952 18.4581C3.06832 17.5841 2.55294 16.5705 2.14918 15.415C1.71677 14.1669 1.5 12.9583 1.5 11.7882C1.5 10.4479 1.79226 9.29187 2.37766 8.32314C2.83773 7.54501 3.44978 6.9312 4.21581 6.4806C4.98185 6.03 5.80955 5.80037 6.70091 5.78568C7.18863 5.78568 7.82822 5.93518 8.62303 6.229C9.4156 6.52381 9.92451 6.67331 10.1476 6.67331C10.3144 6.67331 10.8798 6.4985 11.8382 6.14999C12.7445 5.82679 13.5094 5.69297 14.136 5.74568C15.834 5.88148 17.1097 6.54479 17.9581 7.73982C16.4395 8.65164 15.6883 9.92877 15.7032 11.5671C15.7169 12.8432 16.1841 13.9052 17.1022 14.7484C17.5183 15.1397 17.983 15.4422 18.5 15.657C18.3879 15.9792 18.2695 16.2878 18.1437 16.5841ZM14.2494 1.39816C14.2494 2.39839 13.8806 3.3323 13.1456 4.19672C12.2586 5.22434 11.1857 5.81815 10.0223 5.72445C10.0075 5.60445 9.99888 5.47816 9.99888 5.34545C9.99888 4.38523 10.4207 3.35761 11.1698 2.51739C11.5438 2.09197 12.0194 1.73824 12.5962 1.45606C13.1718 1.17809 13.7162 1.02437 14.2282 0.998047C14.2431 1.13176 14.2494 1.26549 14.2494 1.39815V1.39816Z" fill="white" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_610_15206">
                                        <rect y="0.998047" width={20} height={20} rx={6} fill="white" />
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <p className='flex gap-3 justify-center'>
                            <span className='info-14 hover:!text-grey'>Already have an account?</span>
                            <Link href="/login" className='info-14 !text-primary'>Login</Link>
                        </p>
                    </div>
                }
                {
                    showForm === 2 &&
                    
                    <VerificationCode />
                }
            </div>
              
        </div>
    </section>
  )
}

export default RegisterForm;