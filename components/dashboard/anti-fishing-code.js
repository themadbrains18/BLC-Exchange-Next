import { useContext, useState } from 'react'
import Context from '/components/contexts/context';
import Link from 'next/link';
import Image from 'next/image';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import VerificationCode from '../login-register/verification-code';

import { updateUserSecurity } from '../../libs/commanMethod';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formSchema = Yup.object().shape({
    code: Yup.string()
        .required('Code is mendatory')
})

const AntiFishingCode = ({ session }) => {
    const { mode, setClick } = useContext(Context);
    const [show, setShow] = useState(false);
    const [isLoding, setLoading] = useState(false);
    const [formData, setFormData] = useState();
    const router = useRouter();
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

    const onSubmit = async (data) => {

        let obj = { antiphishing: data.code, id: session.id };
        setClick(true)
        setFormData(obj);
        setLoading(true)
        sendOtp();
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

    const updateAntiFishingCode = async () => {
        console.log('===========i am here update funcode', formData)
        let response = await updateUserSecurity(formData);

        console.log(response, '====after fun code update');
        if (response.status === 200 && response != undefined) {
            setClick(false)
            toast.success('Bind Successfully!', {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            });
            setShow(false)
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
                    <div className="p-0 md:p-6 max-w-full md:max-w-[500px] w-full mx-0 md:mx-auto" >
                        <h4 className='section-secondary-heading font-noto mb-1 flex items-center gap-4 flex-row-reverse justify-end mb-[30px]'>
                            <span>Set Anti-phishing Code</span>
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
                        <div className="my-7">
                            <p className="info-14 !text-[#212833] hover:!text-[#212833] dark:!text-white dark:hover:!text-white">What is an anti-phishing code?</p>
                            <p className="info-12">The anti-phishing code is a string of characters that you set yourself to protect yourself from fake websites and emails.</p>
                        </div>
                        <div className="my-7">
                            <p className="info-14 !text-[#212833] hover:!text-[#212833] dark:!text-white dark:hover:!text-white">Where does the anti-phishing code appear?</p>
                            <p className="info-12">When set, this code will be included in emails from BLC - Exchange. Any other emails without this code are scams.</p>
                        </div>
                        <p className="info-14-16 mb-[15px] p-[10px] border border-[#ccc] bg-[#ccc6] rounded">Anti-phishing code: <span className="info-14-16 !text-primary">ABCDE12345</span></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="info-12 !text-grey">Anti-phishing code</label>
                            <div className="relative">
                                <input type="password" {...register('code')} name="code" className="mt-[8px] info-14 block px-4 w-full bg-transparent border  border-border-clr dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" placeholder="Enter 8-32 letters or numbers" />
                                {/* <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} /> */}
                            </div>
                            <p role="alert" className="!text-red-700 info-12">{errors.code?.message}</p>
                        </div>
                        <button className={`relative cta mt-5  w-full ${isLoding === true ? 'hide_text' : ''} `} type='submit'>
                            <span>Submit</span>
                            {/* spinner */}
                            <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                            {/* spinner */}
                        </button>
                        </form>
                    </div>
                </div>
            </section>
            {
                show &&
                <VerificationCode CloseCta={true} antiFishing={true} fixed={true} showState={show} showSetState={setShow} updateUser={updateAntiFishingCode} loginData={session} />
            }
        </>
    )
}

export default AntiFishingCode;