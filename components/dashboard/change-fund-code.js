import Link from 'next/link';
import Image from 'next/image';
import Context from '/components/contexts/context';
import { useContext, useState } from 'react';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import VerificationCode from '../login-register/verification-code';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserSecurity } from '../../libs/commanMethod';
import Icons from '../snippets/icons';

const formSchema = Yup.object().shape({
    oldcode: Yup.string()
        .required('Old fun-Code is mendatory'),
    code: Yup.string()
        .required('Code is mendatory'),
    confirmcode: Yup
        .string()
        .oneOf([Yup.ref('code')], 'Code and confirm code must match')
        .required('Confirm Code field is required'),
})

const ChangeFundCode = ({ session }) => {

    const [show, setShow] = useState(false);
    const [isLoding, setLoading] = useState(false);
    const [formData, setFormData] = useState();
    const router = useRouter();

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
    const { mode, setClick } = useContext(Context);
    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(formSchema) });

    const onSubmit = async (data) => {
setClick(true)
        let obj = { oldcode: data.oldcode, id: session.id };
        setFormData({ tradingPassword: data.code, id: session.id });
        setLoading(true);
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/funcode`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json());

        if (result.data.status === 200) {
            sendOtp();
        }
        else {
            setLoading(false);
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
        }

    }

    const sendOtp = async () => {
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

    const modifyFunCode=async()=>{
        let response = await updateUserSecurity(formData);

        console.log(response, '====after fun code update');
        if (response.status === 200 && response != undefined) {
            toast.success('Bind Successfully!', {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
            setShow(false)
            setClick(false)
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
            <section className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-0 py-10 flex sm:pb-[40px]">
                <div className="container m-auto">
                    <div className="p-0 sm:p-6 max-w-full md:max-w-[500px] w-full mx-0 md:mx-auto" >
                        <h4 className='section-secondary-heading flex font-noto items-center gap-4 flex-row-reverse justify-end mb-[24px]'>
                            <span>Change Fund Code</span>
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
                        <div className='mt-4 p-3 bg-[#fff8e6]'>
                        <p className="text-12 !text-[#FF7B1B]">For your asset security your are not allowed to withdraw or coin P2P with in 24 hours after changing the fund code.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
                            <div>
                                <label className="info-12 !text-grey">Current Fund Code</label>
                                <div className="relative">
                                    <input type="password" {...register('oldcode')} name="oldcode" className="mt-[8px] block px-4 w-full bg-transparent border  border-border-clr dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" placeholder="Enter your current fund code" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <div className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }}>
                                        <Icons type='close-eye' />
                                    </div>
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.oldcode?.message}</p>
                            </div>
                            <div className="mt-[24px]">
                                <label className="info-12 !text-grey">New Fund Code</label>
                                <div className="relative">
                                    <input type="password" {...register('code')} name="code" className="mt-[8px] block px-4 w-full bg-transparent border  border-border-clr dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" placeholder="Enter a combination of 8-38 letters/numbers" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <div className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }}>
                                        <Icons type='close-eye' />
                                    </div>
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.code?.message}</p>
                            </div>
                            <div className="mt-[24px]">
                                <label className="info-12 !text-grey">Confirm Fund Code</label>
                                <div className="relative">
                                    <input type="password" {...register('confirmcode')} name="confirmcode" className="mt-[8px] block px-4 w-full bg-transparent border  border-border-clr dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" placeholder="Enter the same fund code" />
                                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                    <div className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }}>
                                        <Icons type='close-eye' />
                                    </div>
                                </div>
                                <p role="alert" className="!text-red-700 info-12">{errors.confirmcode?.message}</p>
                            </div>
                            <button className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''} `} type='submit'>
                                <span>Submit</span>
                                {/* spinner */}
                                <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                {/* spinner */}
                            </button>
                        </form>
                        <Link href="reset-fund-code" className="block info-12 text-end !text-primary cursor-pointer mt-[10px]">Forget your Fund Code</Link>
                    </div>
                </div>
            </section>
            {show === 2 &&
                <VerificationCode bindFunCode={true} CloseCta={true} fixed={true} showState={show} showSetState={setShow} updateUser={modifyFunCode} loginData={session} setClick={setClick}/>
            }
        </>
    )
}
export default ChangeFundCode;