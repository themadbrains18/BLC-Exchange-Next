import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import LeftSide from './left-side';
import SearchDropdown from '../snippets/search-dropdown';
import VerificationCode from './verification-code';
// import WelcomePopup from './welcome-popup';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Context from "../contexts/context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react"
import { min } from 'moment';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    email: yup.string().email().required("Must enter email address"),
    password: yup.string().min(8).max(32).required(),
    terms: yup.bool().oneOf([true], 'Checkbox Terms of Use is required')
});

const phoneschema = yup.object().shape({
    password: yup.string().min(8).max(32).required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .min(10)
        .max(10),
    terms: yup.bool().oneOf([true], 'Checkbox Terms of Use is required')
});

const RegisterForm = () => {
    const router = useRouter();
    const [show, setShow] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [active, setActive] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [showVerification, setShowVerification] = useState(0);
    const [isLoding, setLoading] = useState(false);
    const [registerForm, setRegisterForm] = useState();
    const [dialCode, setDialCode] = useState(91)
    const [referCode, setReferCode] = useState('')
    const dropdown = useRef(null);
    const codedropdown = useRef(null);
    const [countryName, setCountryName] = useState('India')
    const ref = useRef()

    const { setClick } = useContext(Context);

    useEffect(() => {

        if (router.query.referal !== undefined) {
            // setActive(false)
            setActive(true)
        }

        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
            if (codedropdown.current && !codedropdown.current.contains(event.target)) {
                setDropdownPhone(false);
            }
        }
        window.addEventListener("click", handleClick);


        // clean up
        return () => window.removeEventListener("click", handleClick);


    }, [])

    let { register, setValue, handleSubmit, watch, setError, formState: { errors } } = useForm({
        resolver: yupResolver(show === 1 ? schema : phoneschema),
    });


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

    const onSubmit = async (data) => {
        let formdata;
        let otpForm;
        if (show === 1) {
            formdata = {
                email: data.email,
                password: data.password,
                requestType: 'email',
                resetPassword: false,
                referal_code: referCode === '' ? router.query.referal : referCode,
                number: ''
            };

            otpForm = {
                email: data.email,
                requestType: 'email',
                resetPassword: false
            }

        }
        else {
            formdata = {
                number: data.phone,
                dial_code: dialCode,
                password: data.password,
                requestType: 'mobile',
                resetPassword: false,
                referal_code: referCode === '' ? router.query.referal : referCode,
                email: ''
            };

            otpForm = {
                number: data.phone,
                dial_code: dialCode,
                requestType: 'mobile',
                resetPassword: false
            }
        }

        setLoading(true);

        // let userExist = await checkUserRequest(formdata);
        let userExist = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/check`, {
            method: "POST",
            body: JSON.stringify(formdata)
        }).then(response => response.json());

        if (userExist.data.status === 200 && userExist.data !== undefined) {
            setLoading(false);
            toast.error(userExist.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
        else {
            // let otpResponse = await sendOtp(otpForm);
            let qwe = otpForm.requestType === "email" ? '/otp' : '/otp/sms'
            let otpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL + qwe}`, {
                method: "POST",
                body: JSON.stringify(otpForm)
            }).then(response => response.json());

            if (otpResponse.data.status === 200 && otpResponse.data != undefined) {
                setLoading(false);
                setRegisterForm(formdata);
                setShowVerification(1);
                toast.success(otpResponse.data.message, {
                    position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                })
            }
            else {
                setLoading(false);
                console.log(otpResponse);
                toast.error(otpResponse.data.message, {
                    position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                })
            }
        }
    }

    const createUser = async (otp) => {
        registerForm.otp = otp;
        registerForm.time = new Date();

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/create`, {
            method: "POST",
            body: JSON.stringify(registerForm)
        }).then(response => response.json())
        if (result.data.status === 200 && result.data != undefined) {
            let userdata = result.data.data
            setShowPopup(true)
            setClick(true)
            setTimeout(() => {
              
                setClick(false)
                signIn("credentials", result.data);

            }, 3000);
            userdata.status = 200;
            // console.log('All is well', result.data)
            // signIn("credentials", result.data);

        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }


    const validateNumber = (e) => {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

        console.log(x);
    }



    return (
        <section className='dark:bg-black-v-5 !py-10 lg:!py-20' >
            <ToastContainer />
            <div className='container'>
                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* section left side */}
                    <LeftSide />
                    {/* register part */}
                    {showVerification === 0 &&
                        <div className="max-w-full md:max-w-[500px] w-full md:p-8 sm:p-6 md:border border-grey mx-auto">
                            <h4 className='section-secondary-heading mb-5'>Welcome to Blc-Exchange</h4>
                            <div className="my-8 relative" ref={dropdown}>
                                <p className='info-14 hover:!text-grey inline-flex items-center gap-3 cursor-pointer' onClick={(e) => { setShowDropdown(!showDropdown) }}>
                                    <span>Country / Region:</span>
                                    <span className="flex items-center gap-2 ">
                                        <span className="text-black dark:text-white" id="countryName">{countryName}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    </span>
                                </p>
                                {
                                    showDropdown != false &&
                                    <SearchDropdown setShowDropdown={setShowDropdown} setCountryName={setCountryName} country={true} setDialCode={setDialCode} />
                                }
                            </div>
                            <div className='flex gap-8 mb-8'>
                                <button onClick={() => { setShow(1); setValue('password', ''); }} name="preferredContact" className={`info-14 border-b-2 border-transparent pb-1  ${show === 1 ? " !border-primary !text-primary" : ""}`}>Email</button>
                                <button onClick={() => { setShow(2); setValue('password', '') }} name="preferredContact" className={`info-14 border-b-2 border-transparent pb-1  ${show === 2 ? " !border-primary  !text-primary " : ""}`} >Mobile number</button>
                            </div>

                            {/* form */}
                            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                                {
                                    show === 1 &&
                                    <div className=' mb-4'>
                                        <input type="email" placeholder="Email" className="block  px-4 max-w-full w-full font-noto bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary"
                                            name={show === 1 ? "email" : ''}
                                            {...register('email')} aria-invalid={errors.email ? "true" : "false"} />
                                        {/* {errors.email && errors.email.type === "required" && (
                                            <span role="alert" className="!text-red-700 info-12">This is required</span>
                                        )} */}
                                        <p className="!text-red-700 info-12">{errors.email?.message}</p>
                                    </div>
                                }
                                {
                                    show === 2 &&
                                    <>
                                        <div className="border border-black dark:border-white rounded min-h-[46px] mb-4 px-4 flex items-center relative" ref={codedropdown}>
                                            <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={() => { setDropdownPhone(!DropdownPhone) }}>
                                                <span className="text-black dark:text-white" id="counteryCode">+ <span>{dialCode}</span> </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                            </div>
                                            <input type="number" maxLength={99999999999} placeholder="Mobile number" onFocus={() => setDropdownPhone(false)} className=" block  px-4 max-w-full w-full bg-transparent font-noto text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary"
                                                name={show === 2 ? "phone" : ''}
                                                {...register('phone')} />
                                            {
                                                DropdownPhone != false &&
                                                <SearchDropdown setDropdownPhone={setDropdownPhone} code={true} setDialCode={setDialCode} />
                                            }

                                        </div>
                                        {/* {errors.phone && errors.phone.type === "required" && (
                                            <span role="alert" className="!text-red-700 info-12">This is required</span>
                                        )} */}
                                        <p className="!text-red-700 info-12">{errors.phone?.message}</p>
                                    </>

                                }

                                <div className="relative">
                                    <input type="password" placeholder="Set password" id="pass_input" className="block  px-4 max-w-full  font-noto w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="password" {...register('password')} />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                                </div>

                                {/* {errors.password && errors.password.type === "required" && (
                                    <span role="alert" className="!text-red-700 info-12">This is required</span>
                                )} */}
                                <p className="!text-red-700 info-12">{errors.password?.message}</p>

                                <div className="mt-5">
                                    <label className="inline-flex items-center gap-3 info-14 hover:!text-grey mb-3 cursor-pointer" onClick={() => { setActive(!active) }}>
                                        <span>Referral Code (Optional)</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                    </label>
                                    {/* dsfvdjskbfjdgbjdfgbkld */}
                                    {(router.query.referal !== undefined || active === true) &&
                                        <input type="tel" ref={ref} value={router.query.referal} onChange={(e) => setReferCode(e.target.value)} placeholder="Referral Code (Optional)" className={` px-4 max-w-full font-noto w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary`} name="referal_code" />
                                    }


                                </div>

                                <button type="submit" className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''}  `}>
                                    <span>Create Account</span>
                                    {/* spinner */}
                                    <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                    {/* spinner */}
                                </button>
                                <div className="relative mb-5 inline-block mt-[8px]">
                                    <input id="checkbox" name='terms' type="checkbox" className="hidden agree_cta font-noto " {...register('terms')} />
                                    <label htmlFor="checkbox" className="relative info-14 hover:!text-grey pl-[25px] after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-[16px] after:h-[16px] cursor-pointer">I agree to the <Link href="#" className="text-primary">Terms of Use</Link></label>
                                </div>
                                <p className="!text-red-700 info-12">{errors.terms?.message}</p>
                            </form>


                            <div className='bg-grey w-full h-[1px] my-5'></div>
                            <div className='text-center mt-[-33px] mb-[20px]'>
                                <p className='mt-[-33px] text-grey bg-white dark:bg-black-v-5 inline-block px-3 -translate-y-35'>Or Sign-Up with</p>
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
                        </div>
                    }
                    {/* verification code  */}
                    {showVerification === 1 &&
                        <VerificationCode loginData={registerForm} resgister={true} createUser={createUser} />
                    }

                </div>
              <div className={`${showPopup? "opacity-1 visible top-[55%]":'opacity-0 invisible'}  duration-300 z-[20] fixed top-[50%]  left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%] dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='#1da2b4'
                        className="w-20 h-20 mx-auto">
                        <path d="m6.17 35.16 4.23 2.44 2.44 4.23c.27.46.77.75 1.3.75h4.88l4.23 2.44c.23.13.49.2.75.2s.52-.07.75-.2l4.23-2.44h4.88c.53 0 1.03-.29 1.3-.75l2.44-4.23 4.23-2.44c.46-.27.75-.76.75-1.3v-4.88l2.44-4.23c.27-.46.27-1.04 0-1.5l-2.44-4.23v-4.88c0-.53-.29-1.03-.75-1.3L37.6 10.4l-2.44-4.23c-.27-.46-.76-.75-1.3-.75h-4.88l-4.23-2.44a1.49 1.49 0 0 0-1.5 0l-4.23 2.44h-4.88c-.53 0-1.03.29-1.3.75L10.4 10.4l-4.23 2.44c-.46.27-.75.76-.75 1.3v4.88l-2.44 4.23a1.49 1.49 0 0 0 0 1.5l2.44 4.23v4.88c0 .54.29 1.03.75 1.3zm2.05-14.99c.13-.23.2-.49.2-.75V15l3.83-2.21c.23-.13.42-.32.55-.55L15 8.42h4.42c.26 0 .52-.07.75-.2L24 6.01l3.83 2.21c.23.13.49.2.75.2H33l2.21 3.83c.13.23.32.42.55.55l3.82 2.2v4.42c0 .26.07.52.2.75L41.99 24l-2.21 3.83c-.13.23-.2.49-.2.75V33l-3.83 2.21c-.23.13-.42.32-.55.55L33 39.58h-4.42c-.26 0-.52.07-.75.2L24 41.99l-3.83-2.21c-.23-.13-.49-.2-.75-.2H15l-2.21-3.83c-.13-.23-.32-.42-.55-.55L8.42 33v-4.42c0-.26-.07-.52-.2-.75L6.01 24l2.21-3.83z" />
                        <path d="M15.73 29.41c.26.49.77.79 1.32.79.25 0 .49-.06.7-.18l17.65-9.4c.73-.39 1.01-1.3.62-2.03-.19-.36-.5-.62-.89-.73-.38-.12-.79-.08-1.14.11l-16.33 8.7-3.06-5.74c-.19-.35-.5-.61-.89-.73-.38-.12-.79-.08-1.14.11-.73.39-1.01 1.3-.62 2.03l3.78 7.07z" />
                    </svg>
                    <p className='p-5 section-secondary-heading text-primary'>Thanks for Signing Up</p>
                </div>

            </div>
        </section>
    )
}

export default RegisterForm;