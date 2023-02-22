import SearchDropdown from '../snippets/search-dropdown';
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Context from '@/components/contexts/context';
import VerificationCode from './../login-register/verification-code';
const LinkMobile = () => {
    const { mode, setClick } = useContext(Context);
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [showver, setShowver] = useState(false);
    const [fillOtp, setOtp] = useState();
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

    const sendOtp = async () => {

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
        <>
            <section className="dark:bg-black-v-5">
                <div className="container">
                    <div className="md:max-w-[480px] p-3 sm:p-6 max-w-[480px] w-full mx-auto" >
                        <h4 className='section-secondary-heading mb-1 flex items-center gap-4 flex-row-reverse justify-end'>
                            <span>Modify login password</span>
                            <Link href="setting">
                                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z" fillRule="evenodd" />
                                </svg>
                            </Link>
                        </h4>
                        <p className='info-14 text-black dark:text-white hover:!text-black dark:hover:!text-white mb-4'>Mobile Number</p>
                        <div className="border border-black dark:border-white rounded min-h-[46px] px-4 flex items-center relative">
                            <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={() => { setDropdownPhone(!DropdownPhone) }}>
                                <span className="text-black dark:text-white" id="counteryCode">+ <span>91</span> </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                            </div>
                            <input type="tel" placeholder="Mobile number" className=" block  px-4 max-w-full w-full bg-transparent  text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary" name="phone" />
                            {DropdownPhone &&
                                <SearchDropdown code={true} setDropdownPhone={setDropdownPhone} />
                            }
                        </div>
                        <span role="alert" className="!text-red-700 info-12 mb-4 block">This is required</span>
                        <p className='info-14 text-black dark:text-white hover:!text-black dark:hover:!text-white mb-4'>SMS Verification</p>
                        <div className='mt-5'>
                            <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row"><span>SMS Verification Code</span> <span>( which is registred)</span></label>
                            <div className="grid grid-cols-6 justify-between gap-[8px] sm:gap-[20px] input_wrapper">
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code1" />
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code2" />
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code3" />
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code4" />
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code5" />
                                <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code6" />
                            </div>
                        </div>
                        <button className="info-14-16 !text-primary mt-[15px]" onClick={sendOtp}>Send Code</button>
                        <button className="cta mt-[30px] w-full" onClick={() => { setClick(true); setShowver(true) }}>Submit</button>
                    </div>
                </div>
            </section>
            {showver &&
                <VerificationCode fixed={true} modifyPass={true} />
            }
        </>
    )
}

export default LinkMobile;