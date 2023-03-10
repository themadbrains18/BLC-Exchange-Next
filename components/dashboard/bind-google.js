import React from 'react'
import QRCode from "qrcode";
import Context from '/components/contexts/context';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import qrImg from "../../public/assets/images/qr.png";
import VerificationCode from './../login-register/verification-code';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from "next-auth/react"
import { updateUserSecurity } from '../../libs/commanMethod'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    code: Yup.string()
        .required('This field is required')
})

const BindGoogle = ({ session }) => {
    const [show, setShow] = useState(false);
    const [qrImg, setImage] = useState('');
    const [isLoding, setLoading] = useState(false);

    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(formSchema) });

    const [secret, setSecret] = useState(JSON.parse(session.secret));

    useEffect(() => {
        // const inputElements = document.querySelectorAll('.input_wrapper_google input');
        // inputElements.forEach((ele, index) => {
        //     ele.addEventListener('keydown', (e) => {

        //         if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
        //     })
        //     ele.addEventListener('input', (e) => {

        //         const [first, ...rest] = e.target.value
        //         e.target.value = first ?? ''
        //         const lastInputBox = index === inputElements.length - 1
        //         const didInsertContent = first !== undefined
        //         if (didInsertContent && !lastInputBox) {
        //             // continue to input the rest of the string
        //             inputElements[index + 1].focus()
        //             inputElements[index + 1].value = rest.join('')
        //             inputElements[index + 1].dispatchEvent(new Event('input'))
        //         }
        //         else {
        //             setOtp(inputElements[0].value + '' + inputElements[1].value + '' + inputElements[2].value + '' + inputElements[3].value + '' + inputElements[4].value + '' + inputElements[5].value);
        //         }
        //     })
        // })

        QRCode.toDataURL(secret.otpauth_url, (err, image_data) => {
            setImage(image_data);
        });

    }, [])
    const { mode, setClick } = useContext(Context);

    const VerifyGoogleAuthenticate = async (data) => {
        setClick(true)
        const token = data.code;
        let obj = { secret, token };
        setLoading(true);
        let response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/googleAuth`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json());

        if (response.data.status === 200 && response.data.message === true) {
            
            if (session.email !== "") {
                let emailOtpForm = { 'email': session.email };
                await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
                    method: "POST",
                    body: JSON.stringify(emailOtpForm)
                }).then(response => response.json());
            }

            if (session.number !== "") {
                let smsOtpForm = { 'number': session.number, 'dial_code': 91 };
                await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/sms`, {
                    method: "POST",
                    body: JSON.stringify(smsOtpForm)
                }).then(response => response.json());
            }
            setLoading(false);
            setShow(true);
            setClick(false)

        }
        else {
            setLoading(false);
            toast.error('Google Authentication Code not matched!.', {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }

    const updateUser = async () => {
        let obj = { id: session.id, TwoFA: 'enable' };
        updateUserSecurity(obj, true);
    }

    return (
        <>
            <ToastContainer />
            <section className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-0 py-10 flex sm:pb-[40px]">
                <div className="container m-auto">
                    <div className="p-0 sm:p-6 max-w-full md:max-w-[500px] w-full mx-0 md:mx-auto" >
                        <h4 className='section-secondary-heading font-noto flex items-center gap-4 flex-row-reverse justify-end '>
                            <span>Link Google Authenticator</span>
                            <Link href="setting">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="rotate-180 w-6 h-6"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke={mode === "dark" ? "white" : "currentColor"}

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        </h4>
                        <p className="info-12 mt-7">Google Authenticator is a dynamic password tool like SMS dynamic verification. A dynamic verification code is generated every 30s once bound and can be used for security verification of operations, such as logging in, withdrawing coins, and modifying security settings.</p>
                        <div className="flex items-start gap-[12px] mt-[14px]">
                            <div className="bg-grey min-w-[24px] min-h-[24px] rounded-full flex">
                                <span className="m-auto">1</span>
                            </div>
                            <div>
                                <p className="info-12 dark:!text-white text-black mb-[8px] !text-[14px]">Download the Google Authenticator app</p>
                                <p className="info-12">iOS users can log into the App Store and search for "Authenticator". Android users can log into their app store of choice or use a mobile browser and search for "Google Authenticator".</p>
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
                        </div>
                        <div className="flex items-start gap-[12px] mt-[14px]">
                            <div className="bg-grey min-w-[24px] min-h-[24px] rounded-full flex">
                                <span className="m-auto">2</span>
                            </div>
                            <div>
                                <p className="info-12 text-black dark:!text-white !text-[14px] mb-[8px]">Add a key and back up in Google Authenticator</p>
                                <p className="info-12">Open Google Authenticator, scan the QR code below or manually enter the following key to add a verification token.</p>
                                <p className="info-12">The key is used to retrieve Google Authenticator when your phone is replaced or lost. Be sure to save the following key as a backup before binding.</p>
                            </div>
                        </div>
                        <div className="bg-[#f3f7fe] p-[10px] flex items-center gap-[15px] my-[15px]">
                            <div>
                                <Image src={qrImg} alt="" width={124} height={124} />
                            </div>
                            <div>
                                <p className="info-16">{secret.base32}</p>
                                <p className="info-14 !text-primary cursor-pointer">Copy key</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-[12px] mt-[14px]">
                            <div className="bg-grey min-w-[24px] min-h-[24px] rounded-full flex">
                                <span className="m-auto">3</span>
                            </div>
                            <div>
                                <p className="info-12 text-black dark:!text-white !text-[14px] mb-[8px]">Enter the new 6-digit verification code in Google Authenticator</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(VerifyGoogleAuthenticate)}>
                            <div className='mt-5'>
                                <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row">Google Authenticator</label>
                                <div className="input_wrapper_google">
                                    <input type="number" {...register('code')} name="code" className="block px-4 max-w-full w-full bg-transparent border  border-border-clr dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" placeholder="Enter your code" />
                                </div>
                            </div>
                            <p role="alert" className="!text-red-700 info-12">{errors.code?.message}</p>
                            <button type="submit" className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''} `}>
                                <span>Submit</span>
                                <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>

                            </button>
                        </form>
                    </div>
                </div>
                {show &&
                    <VerificationCode CloseCta={true} fixed={true} showState={show} showSetState={setShow} bindGoogle={true} loginData={session} updateUser={updateUser} />
                }
            </section>
        </>

    )
}

export default BindGoogle;