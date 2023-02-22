import { use, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import qrImage from "../../public/assets/images/qr.png";
import laftImage from "../../public/assets/images/form-left-new.png";
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import VerificationCode from './verification-code';

// import { loginRequestApi, otpMatchRequestApi, sendOtp } from '@/Api';
import AntiFishing from './anti-phishing';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from "next-auth/react"



const LoginForm = () => {
    const [show, setShow] = useState(1);
    const [loginData, setLoginData] = useState({});
    const [showPopup, setShowPopup] = useState(0);
    const [isLoding, setLoading] = useState(false);
    const [otpForm, setOtpForm] = useState();

    const router = useRouter();

    const formSchema = Yup.object().shape({
        username: Yup.string()
            .required('This field is required'),
        password: Yup.string()
            .required('Password is mendatory'),
    })

    let {
        register,
        handleSubmit,
        formState: { errors }, getValues
    } = useForm({ resolver: yupResolver(formSchema) });

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
        let text = data.username;
        let exist = text.includes("@");
        setLoading(true)
        let formdata = {
            username: data.username,
            password: data.password,
            requestType: exist === true ? 'email' : 'mobile',
            dial_code: 91
        }

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
            method: "POST",
            body: JSON.stringify(formdata)
        }).then(response => response.json())

        if (result.data.status === 200 && result.data != undefined) {

            let emailotpResponse;
            if(result.data.email!==""){
                let emailOtpForm = {'email' : result.data.email};
                emailotpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
                    method: "POST",
                    body: JSON.stringify(emailOtpForm)
                }).then(response => response.json());
            }

            let smsotpResponse;
            if(result.data.number!==""){
                let smsOtpForm = {'number' : result.data.number, 'dial_code' : 91};
                smsotpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/sms`, {
                    method: "POST",
                    body: JSON.stringify(smsOtpForm)
                }).then(response => response.json());
            }

            if(result.data.number!==""  && result.data.email !==""){
                if (emailotpResponse != undefined && emailotpResponse.data.status === 200 && smsotpResponse != undefined && smsotpResponse.data.status ===200 ) {
                    setLoading(false);
                    setShow(3);
                    setLoginData(result.data);
                }
            }
            else if(result.data.email !==""){
                if (emailotpResponse.data.status === 200 && emailotpResponse != undefined) {
                    setLoading(false);
                    setShow(3);
                    setLoginData(result.data);
                }
            }
            else if(result.data.number !==""){
                if (smsotpResponse.data.status === 200 && smsotpResponse != undefined) {
                    setLoading(false);
                    setShow(3);
                    setLoginData(result.data);
                }
            }
            else {
                console.log(emailotpResponse);
            }
        }
        else {
            setLoading(false);
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }

    }

    const onFinalSubmit = async (e,otp, type) => {

        let obj = { username: type === 'email' ? loginData.email : loginData.number, otp: otp, time: new Date() };

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/match`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json());

        if (result.data.status === 200 && result.data != undefined) {
            return true;
        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
            return false;
        }
    }

    const sendOtpAgain = async () => {

        // let otpResponse = await sendOtp(otpForm);

        let otpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
            method: "POST",
            body: JSON.stringify(otpForm)
        }).then(response => response.json());

        if (otpResponse.data.status === 200 && otpResponse.data != undefined) {
            let usrname = otpForm.requestType === 'mobile' ? otpForm.number : otpForm.email;
            let message = otpResponse.data.message + ' ' + usrname;
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }


    return (
        <section className='dark:bg-black-v-5  !py-10 lg:!py-20'>
            <ToastContainer />
            <div className='container'>
                <div className="flex flex-col md:flex-row items-start gap-10">
                    <div className="hidden md:block max-w-[50%] w-full">
                        <h3 className="section-secondary-heading mb-5">Get together ,trade <br />together</h3>
                        <p className="info-14-20 mb-[50px]">Embrace crypto and connectwith the future.</p>
                        <Image src={laftImage} alt="" width={450} height={400} className="max-w-[270px] mx-auto w-full" />
                    </div>
                    {/* login part */}
                    {show !== 3 &&
                        <div className='className="max-w-full md:max-w-[50%] w-full" p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto'>
                            <h4 className='section-secondary-heading mb-5'>Welcome back</h4>
                            <div className='flex gap-8 mb-8'>
                                <button className={`info-14 border-b-2 border-transparent pb-1  ${show === 1 ? " !border-primary !text-primary" : ""}`} onClick={() => { setShow(1) }}>Email / Mobile number</button>
                                <button className={`info-14 border-b-2 border-transparent pb-1 pb-1 ${show === 2 ? " !border-primary  !text-primary " : ""}`} onClick={() => { setShow(2) }}>QR code</button>
                            </div>
                            {/* form */}
                            {
                                show === 1 &&
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" placeholder="Email / Mobile number" name="username"  {...register('username')} className="block  mb-4 px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                                    <div className="!text-red-700 info-12">{errors.username?.message}</div>
                                    <div className="relative">
                                        <input type="password" {...register('password')} name="password" id="pass_input" placeholder="Enter your password" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                                        <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                        <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                                    </div>
                                    <div className="!text-red-700 info-12">{errors.password?.message}</div>
                                    {/* <button type="submit" className='cta mt-5  w-full'>Log In</button>
                                    <a href="/forget" className='info-14 !text-primary block text-end mt-4 cursor-pointer'>Forgot password?</a> */}
                                    <button type='submit' className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''} `}>
                                        <span>Log In</span>
                                        {/* spinner */}
                                        <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                        {/* spinner */}
                                    </button>
                                    <Link href="/forget" className='info-14 !text-primary block text-end mt-4 cursor-pointer'>Forget password?</Link>
                                </form>
                            }
                            {/* qr part */}
                            {
                                show === 2 &&
                                <div>
                                    <Image src={qrImage} alt="" width={200} height={200} className="max-w-[150px]  sm:max-w-none mx-auto" />
                                    <div className='mt-6 flex items-start gap-4 mb-4 inline-block'>
                                        <svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.5018 25.6172V30.5403C33.5018 31.1931 33.2425 31.8192 32.7808 32.2808C32.3192 32.7425 31.6931 33.0018 31.0403 33.0018H26.1172" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26.1172 1H31.0403C31.6931 1 32.3192 1.25934 32.7808 1.72097C33.2425 2.1826 33.5018 2.8087 33.5018 3.46154V8.38462" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M1.5 8.38462V3.46154C1.5 2.8087 1.75934 2.1826 2.22097 1.72097C2.6826 1.25934 3.3087 1 3.96154 1H8.88462" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.88462 33.0018H3.96154C3.3087 33.0018 2.6826 32.7425 2.22097 32.2808C1.75934 31.8192 1.5 31.1931 1.5 30.5403V25.6172" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.3984 10.8438L8.16767 10.8437" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.3984 23.6484L8.16767 23.6484" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.707 17.2461L11.8609 17.2461" stroke="#1DA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className='info-14 !text-grey mt-[-5px]'>Open the BLC-Exchange App and scan the code in the upper right corner of Homepage.</p>
                                    </div>
                                </div>
                            }

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
                                <span className='info-14 hover:!text-grey'>Don't have an account?</span>
                                <Link href="/register" className='info-14 !text-primary'>Join Us</Link>
                            </p>
                        </div>
                    }

                    {show === 3 &&
                        <VerificationCode verifyCode={true} onFinalSubmit={onFinalSubmit} sendOtpAgain={sendOtpAgain} loginData={loginData} bindMobile={false} />
                    }
                </div>
                {showPopup === 1 &&
                    <AntiFishing />
                }
            </div>
        </section>
    )
}

export default LoginForm;