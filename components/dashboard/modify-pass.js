import { useState, useContext } from 'react'
import Image from 'next/image';
import Link from 'next/Link';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import Context from '@/components/contexts/context';
import VerificationCode from './../login-register/verification-code';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { signOut } from "next-auth/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = Yup.object().shape({
    oldpassword: Yup.string()
        .required('Old Password field is required'),
    newpassword: Yup.string()
        .required('Password is mendatory'),
    confirmpassword: Yup
        .string()
        .oneOf([Yup.ref('newpassword')], 'New password and confirm password must match')
        .required('Confirm PAssword Required field'),
})

const ModifyPass = ({ session }) => {
    const { mode, setClick } = useContext(Context);
    const [show, setShow] = useState(true);
    const [isLoding, setLoading] = useState(false);
    const [formData, setFormData] = useState();

    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(formSchema) });

    const showPass = (e) => {
        if (!e.currentTarget.classList.contains("hidden")) {
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.previousSibling.classList.toggle("hidden");
            let pass_input = e.currentTarget.previousSibling.previousSibling;
            pass_input.setAttribute("type", "text");
        }
    }
    const hidePass = (e) => {
        if (!e.currentTarget.classList.contains("hidden")) {
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.nextSibling.classList.toggle("hidden");
            let pass_input = e.currentTarget.previousSibling;
            pass_input.setAttribute("type", "password");
        }
    }

    // confirPassword
    const onSubmit = async (data) => {

        let obj = {oldpassword : data.oldpassword, id : session.id};
        setFormData(data);
        console.log(obj,'===confirm password===');
        setLoading(true);
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/password`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json());

        if(result.data.status === 200){
            sendOtp();
        }
        else{
            setLoading(false);
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
        }

    }

    const sendOtp=async()=>{
        let emailResponse = false;
        let numberResponse = false;
        if (session.email !== "") {
            let emailOtpForm = { 'email': session.email };
            let emailotpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
                method: "POST",
                body: JSON.stringify(emailOtpForm)
            }).then(response => response.json());

            if (emailotpResponse.data.status === 200 && emailotpResponse != undefined) {
                emailResponse = true;
            }
            
        }

        if (session.number !== "") {
            let smsOtpForm = { 'number': session.number, 'dial_code': session.dial_code };
            let smsotpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/sms`, {
                method: "POST",
                body: JSON.stringify(smsOtpForm)
            }).then(response => response.json());

            if (smsotpResponse.data.status === 200 && smsotpResponse != undefined) {
                numberResponse = true;
            }
        }

        if (session.number !== "" && session.email !== "") {
            if (emailResponse === true && numberResponse === true) {
                setLoading(false);
                setShow(2)
            }
        }
        else if (session.email !== "") {
            if (emailResponse === true) {
                setLoading(false);
                setShow(2)
            }
        }
        else if (session.number !== "") {
            if (numberResponse === true) {
                setLoading(false);
                setShow(2)
            }
        }
    }

    const updateUserPassword = async () => {

        let obj = {newpassword : formData.newpassword, id: session.id};
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/password`, {
            method: "PUT",
            body: JSON.stringify(obj)
        }).then(response => response.json());

        if (result.data.status === 200 && result.data !== undefined) {
            toast.success('Password Changed Successfully!.Your session is expire', {
                position: toast.POSITION.TOP_RIGHT, autoClose: 3000
            });
            setShow(false);
            setTimeout(() => {
                signOut();
            }, 3000);
        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
        }
    }

    return (
        <>
            <ToastContainer />
            <section className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full py-10 sm:py-0 flex">
                <div className="container m-auto">
                    <div className="md:max-w-[480px] p-3 sm:p-6 max-w-[480px] w-full mx-auto" >
                        <h4 className='section-secondary-heading mb-1 flex items-center gap-4 flex-row-reverse justify-end'>
                            <span>Modify login password</span>
                            <Link href="setting">
                                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z" fillRule="evenodd" />
                                </svg>
                            </Link>
                        </h4>
                        <p className='info-14 !text-[#ff7b1b]  hover:!text-[#ff7b1b] dark:hover:!text-[#ff7b1b]'>It won’t able to withdraw coins in 24 hours after modifying the password</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-5'>
                                <div className="relative mb-3">
                                    <input type="password" {...register('oldpassword')} id="pass_input1" placeholder="Current password" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="oldpassword" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.oldpassword?.message}</p>
                                <div className="relative mb-3">
                                    <input type="password" {...register('newpassword')} id="pass_input2" placeholder="New password" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="newpassword" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.newpassword?.message}</p>
                                <p className="info-12 mt-[8px] mb-[15px] leading-[16px]">Please ensure the password consists of 8 to 32 characters, at least 1 number, 1 uppercase letter, and 1 special character</p>
                                <div className="relative">
                                    <input type="password" {...register('confirmpassword')} id="pass_input3" placeholder="Confirm new password" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="confirmpassword" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.confirmpassword?.message}</p>
                                {/* <span className='info-12 mt-1 block !text-[#f7647e]'>Please enter Account</span> */}
                            </div>
                            {/* onClick={(e) => { e.preventDefault(); e.currentTarget.classList.toggle("hide_text"); setTimeout((e) => { setClick(true); setShow(2) }, 3000) }} */}

                            <button className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''} `} type='submit' >
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
                <VerificationCode modifyPass={true} CloseCta={true} fixed={true} showState={show} showSetState={setShow} updateUser={updateUserPassword} loginData={session} />
            }
        </>
    )
}
export default ModifyPass;