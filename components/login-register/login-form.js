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

import { loginRequestApi, otpMatchRequestApi, sendOtp } from '@/Api';
import AntiFishing from './anti-phishing';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        let result = await loginRequestApi(formdata)

        if (result.data.status === 200 && result.data != undefined) {
            let OtpForm;
            if (exist === true) {
                OtpForm = { email: data.username, requestType: "email", resetPassword: false }
            }
            else {
                OtpForm = { number: data.username, dial_code: 91, requestType: "mobile", resetPassword: false }
            }

            setOtpForm(OtpForm);
            let otpResponse = await sendOtp(OtpForm);
            if (otpResponse.data.status === 200 && otpResponse.data != undefined) {
                setLoading(false);
                setShow(3);
                setLoginData(result.data);
            }
            else {
                console.log(otpResponse);
            }
        }
        else {
            setLoading(false);
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }

    }

    const onFinalSubmit = async (otp) => {

        let obj = { username: loginData.registerType === 'email'? loginData.email : loginData.number, otp: otp, time: new Date() };

        let result = await otpMatchRequestApi(obj)

        if (result.data.status === 200 && result.data != undefined) {
            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
            setShowPopup(1);
        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }

    const sendOtpAgain=async()=>{
        let otpResponse = await sendOtp(otpForm);
        if (otpResponse.data.status === 200 && otpResponse.data != undefined) {
            let usrname = otpForm.requestType ==='mobile'?otpForm.number :otpForm.email;
            let message = otpResponse.data.message + ' '+ usrname;
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
                                    <button type='submit' className={`relative cta mt-5  w-full ${isLoding === true ?'hide_text' :''} `}>
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
                        </div>
                    }

                    {show === 3 &&
                        <VerificationCode verifyCode={true} onFinalSubmit={onFinalSubmit} sendOtpAgain={sendOtpAgain} username= {otpForm.requestType ==='mobile'?otpForm.number :otpForm.email} />
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