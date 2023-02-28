import SearchDropdown from '../snippets/search-dropdown';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Context from '@/components/contexts/context';
import VerificationCode from './../login-register/verification-code';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { otpMatch, updateUserSecurity } from '../../libs/commanMethod';
import { useRouter } from 'next/router';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    phone: Yup.string()
        .required('This field is required')
})

const LinkMobile = ({ sessions }) => {
    const { mode, setClick } = useContext(Context);
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [showver, setShowver] = useState(0);
    const [show, setShow] = useState(true);
    const [fillOtp, setOtp] = useState();
    const [dialCode, setDialCode] = useState(91);
    const [filledNumber, setNumber] = useState();
    const [count, setCount] = useState(0);
    const router = useRouter();

    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(formSchema) });

    useEffect(() => {
        const inputElements = document.querySelectorAll('.input_wrapper input');
        inputElements.forEach((ele, index) => {
            ele.addEventListener('keydown', (e) => {

                if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
            })
            ele.addEventListener('input', (e) => {

                const [first, ...rest] = e.target.value
                e.target.value = first ?? ''
                const lastInputBox = index === inputElements.length - 1
                const didInsertContent = first !== undefined
                if (didInsertContent && !lastInputBox) {
                    // continue to input the rest of the string
                    inputElements[index + 1].focus()
                    inputElements[index + 1].value = rest.join('')
                    inputElements[index + 1].dispatchEvent(new Event('input'))
                }
                else {
                    setOtp(inputElements[0].value + '' + inputElements[1].value + '' + inputElements[2].value + '' + inputElements[3].value + '' + inputElements[4].value + '' + inputElements[5].value);
                }
            })
        })

    }, [])

    //====================================================================
    // Send OTP Request =====================================
    //====================================================================

    const sendOtp = async (data) => {
        setNumber(data.phone);
        let otpForm = { 'number': data.phone, 'dial_code': dialCode };

        let otpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/sms`, {
            method: "POST",
            body: JSON.stringify(otpForm)
        }).then(response => response.json());

        if (otpResponse.data.status === 200 && otpResponse.data != undefined) {
            setCount(count + 1);

            toast.success(otpResponse.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
        }
        else {
            toast.error(otpResponse.data, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
        }
    }

    //====================================================================
    // OTP Matched Request =====================================
    //====================================================================
    const Submit = async (e) => {
        e.preventDefault();

        let formdata = { email: "", number: filledNumber, dial_Code: dialCode }
        let userExist = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/check`, {
            method: "POST",
            body: JSON.stringify(formdata)
        }).then(response => response.json());

        let obj = { username: filledNumber, otp: fillOtp, time: new Date() };

        let result = await otpMatch(obj);

        if (result.status === 200) {

            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })

            let emailOtpForm = { 'email': sessions.user.email };
            await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
                method: "POST",
                body: JSON.stringify(emailOtpForm)
            }).then(response => response.json());
            setShowver(true)

        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }

    const updateUser = async () => {
        let obj = { id: sessions.user.id, number: filledNumber, dial_code: dialCode };
        let response = await updateUserSecurity(obj);
        if (response.status === 200 && response != undefined) {
            toast.success('Bind Successfully!', {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
            setShowver(false)
            router.push('/dashboard/setting');
        }
        else {
            toast.error(response.message.errors[0].message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }

    return (
        <>
            <ToastContainer />
            <section className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-0 py-10 flex">
                <div className="container m-auto">
                    <div className="md:max-w-[480px] p-3 sm:p-6 max-w-[480px] w-full mx-auto" >
                        <h4 className='section-secondary-heading mb-1 flex items-center gap-4 flex-row-reverse justify-end'>
                            <span>Link Mobile</span>
                            <Link href="setting">
                                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z" fillRule="evenodd" />
                                </svg>
                            </Link>
                        </h4>
                        <form onSubmit={handleSubmit(sendOtp)}>
                            <p className='info-14 text-black dark:text-white hover:!text-black dark:hover:!text-white mb-4'>Mobile Number</p>
                            <div className="border border-black dark:border-white rounded min-h-[46px] px-4 flex items-center relative">
                                <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={() => { setDropdownPhone(!DropdownPhone) }}>
                                    <span className="text-black dark:text-white" id="counteryCode">+ <span>{dialCode}</span> </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                </div>
                                <input type="tel" {...register('phone')} name="phone" placeholder="Mobile number" className=" block  px-4 max-w-full w-full bg-transparent  text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary" />
                                {DropdownPhone &&
                                    <SearchDropdown code={true} setDropdownPhone={setDropdownPhone} setDialCode={setDialCode} />
                                }
                            </div>
                            <p role="alert" className="!text-red-700 info-12">{errors.phone?.message}</p>
                            {/* <p className='info-14 text-black dark:text-white hover:!text-black dark:hover:!text-white mb-4'>SMS Verification</p> */}
                            <div className='mt-5'>
                                <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row"><span>SMS Verification Code</span> <span></span></label>
                                <div className="grid grid-cols-6 justify-between gap-[8px] sm:gap-[20px] input_wrapper">
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code1" />
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code2" />
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code3" />
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code4" />
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code5" />
                                    <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code6" />
                                </div>
                            </div>
                            <button className="info-14-16 !text-primary mt-[15px]">{count === 0 ? 'Send Code' : 'Send Again'} </button>
                        </form>
                        <button className="cta mt-[30px] w-full" onClick={Submit}>Submit</button>
                    </div>
                </div>
            </section>
            {showver &&

                <VerificationCode CloseCta={true} fixed={true} bindMobile={true} showState={show} showSetState={setShowver} loginData={sessions.user} updateUser={updateUser} />
            }
        </>
    )
}

export default LinkMobile;