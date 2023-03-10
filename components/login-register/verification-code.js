import { useEffect, useContext, useState } from 'react'
import Context from "../contexts/context";
import ResetPassSuccess from './reset-pass-success';
import { signIn } from "next-auth/react"
import { otpMatch } from '../../libs/commanMethod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './reset-pass';

const VerificationCode = ({ overlay, verifyCode, antiFishing, emailAuth, bindGoogle, CloseCta, showSetState, bindMobile,
    showState, bindEmail, fixed, modifyPass,bindFunCode, loginData, updateUser, resgister, createUser,withdraw }) => {

    const { mode, setClick } = useContext(Context);
    const [fillOtp, setOtp] = useState();
    const [emailOtp, setEmailOtp] = useState();
    const [showSuccess, setShowSuccess] = useState(1);
    const [sendAgainEmailOtp1, setSendAgainEmailOtp1] = useState("Send Again");
    const [sendAgainMobileOtp1, setSendAgainMobileOtp1] = useState("Send Again");

    // console.log(loginData, '=======login Data')


    useEffect(() => {
        const inputElements = document.querySelectorAll('.input_wrapper_mobile input');
        const emailinputElements = document.querySelectorAll('.input_wrapper_email input');
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

        emailinputElements.forEach((ele, index) => {
            ele.addEventListener('keydown', (e) => {

                if (e.keyCode === 8 && e.target.value === '') emailinputElements[Math.max(0, index - 1)].focus()
            })
            ele.addEventListener('input', (e) => {

                const [first, ...rest] = e.target.value
                e.target.value = first ?? ''
                const lastInputBox = index === emailinputElements.length - 1
                const didInsertContent = first !== undefined
                if (didInsertContent && !lastInputBox) {
                    // continue to input the rest of the string
                    emailinputElements[index + 1].focus()
                    emailinputElements[index + 1].value = rest.join('')
                    emailinputElements[index + 1].dispatchEvent(new Event('input'))
                }
                else { 
                    setEmailOtp(emailinputElements[0].value + '' + emailinputElements[1].value + '' + emailinputElements[2].value + '' + emailinputElements[3].value + '' + emailinputElements[4].value + '' + emailinputElements[5].value);
                }
            })
        })

    }, [])

    const confirmOtp = async (e) => {
        e.preventDefault();

        //==============================================================================
        // Register Request=======================
        //============================================================================== 

        if (resgister === true) {
            createUser(loginData.email !== "" ? emailOtp : fillOtp);
            return;
        }

        if(verifyCode=== true){
           setShowSuccess(3)
           return ;
            
        }
        //==============================================================================
        // Bind Email Request OTP Authenticate=======================
        //============================================================================== 
        if (bindEmail === true) {

            let obj = { username: loginData.email, otp: emailOtp, time: new Date() }
            let obj2 = { username: loginData.number, otp: fillOtp, time: new Date() }
            // let mobileOtpMatch = await otpMatch(obj);
            if(loginData.mobile !== "" && loginData.email === undefined){
               
                let emailOtpMatch = await otpMatch(obj2);
                if (emailOtpMatch.status === 200) {
                    updateUser();
                }
                else {
                    toast.error('OTP Not Matched', {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
            }
            else {
                console.log("========hii")
                let mobileOtpMatch =  await otpMatch(obj2);
                let emailOtpMatch = await otpMatch(obj);
                if (mobileOtpMatch.status === 200 && emailOtpMatch.status === 200) {
                    updateUser();
                }
                else {
                    toast.error('OTP Not Matched', {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
            }
            return;
        }

        //==============================================================================
        // Bind Mobile Request OTP Authenticate=======================
        //============================================================================== 
        if (bindMobile === true) {
         
            let obj = { username: loginData.email, otp: emailOtp, time: new Date() }
            let obj2 = { username: loginData.number, otp: fillOtp, time: new Date() }
            if(loginData.email !== "" && loginData.mobile === undefined){
               
                let emailOtpMatch = await otpMatch(obj);
                if (emailOtpMatch.status === 200) {
                    updateUser();
                }
                else {
                    toast.error('OTP Not Matched', {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
            }
            else {
                console.log("========hii")
                let mobileOtpMatch =  await otpMatch(obj2);
                let emailOtpMatch = await otpMatch(obj);
                if (mobileOtpMatch.status === 200 && emailOtpMatch.status === 200) {
                    updateUser();
                }
                else {
                    toast.error('OTP Not Matched', {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
            }
            
            return;
        }

        //==============================================================================
        // Bind Google Authentication Request OTP Authenticate=======================
        //============================================================================== 
        if (bindGoogle === true || modifyPass === true || bindFunCode === true || antiFishing === true || withdraw === true) {
            if (loginData.email !== "" && loginData.number !== "") {
                let mobileOtpMatch = await otpMatch({ username: loginData.number, otp: fillOtp, time: new Date() });
                let emailOtpMatch = await otpMatch({ username: loginData.email, otp: emailOtp, time: new Date() });
                Promise.all([mobileOtpMatch, emailOtpMatch]).then((values) => {
                    console.log(values);
                    if (values[0].status === 200 && values[1].status === 200) {
                        updateUser();
                    }
                    else {
                        toast.error(values[0].message, {
                            position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                        });
                    }
                });
            }

            if (loginData.email !== "" && loginData.number === "") {
                let emailOtpMatch = await otpMatch({ username: loginData.email, otp: emailOtp, time: new Date() });
                Promise.all([emailOtpMatch]).then((values) => {
                    if (values[0].status === 200) {
                        updateUser();
                    }
                    else {
                        toast.error(values[0].message, {
                            position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                        });
                    }
                });
            }
            if (loginData.email === "" && loginData.number !== "") {
                let mobileOtpMatch = await otpMatch({ username: loginData.number, otp: fillOtp, time: new Date() });
                Promise.all([mobileOtpMatch]).then((values) => {
                    if (values[0].status === 200) {
                        updateUser();
                    }
                    else {
                        toast.error(values[0].message, {
                            position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                        });
                    }
                });
            }
            return;
        }

        //==============================================================================
        // Log In Request OTP Authenticate=======================
        //============================================================================== 

        if (loginData.email !== "" && loginData.number !== "") {
            let mobileOtpMatch = await otpMatch({ username: loginData.number, otp: fillOtp, time: new Date() });
            let emailOtpMatch = await otpMatch({ username: loginData.email, otp: emailOtp, time: new Date() });
            Promise.all([mobileOtpMatch, emailOtpMatch]).then((values) => {
                console.log(values);
                if (values[0].status === 200 && values[1].status === 200) {
                    signIn("credentials", loginData);
                }
                else {
                    toast.error(values[0].message, {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
            });
        }
        if (loginData.email !== "" && loginData.number === "") {
            let emailOtpMatch = await otpMatch({ username: loginData.email, otp: emailOtp, time: new Date() });
            Promise.all([emailOtpMatch]).then((values) => {
                if (values[0].status === 200) {
                    signIn("credentials", loginData);
                }
                else{
                    toast.error(values[0].message, {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
                
            });
        }
        if (loginData.email === "" && loginData.number !== "") {
            let mobileOtpMatch = await otpMatch({ username: loginData.number, otp: fillOtp, time: new Date() });
            Promise.all([mobileOtpMatch]).then((values) => {
                if (values[0].status === 200) {
                    signIn("credentials", loginData);
                }
                else{
                    toast.error(values[0].message, {
                        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
                    });
                }
                
            });
        }
    }

    const sendAgainEmailOtp = async (e) => {
        e.preventDefault();
        let emailOtpForm = { 'email': loginData.email };
        let otpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp`, {
            method: "POST",
            body: JSON.stringify(emailOtpForm)
        }).then(response => response.json());
       
        const emailinputElements = document.querySelectorAll('.input_wrapper_email input');
        emailinputElements.forEach((ele, index) => {
            ele.value=''
        })


        if(otpResponse){
            setSendAgainEmailOtp1("OTP resent to your registered email.")
           
        }

        if (otpResponse.data.status === 200 && otpResponse.data != undefined) {

        }
    }

    const sendAgainMobileOtp = async (e) => {
        e.preventDefault();
        let smsOtpForm = { 'number': loginData.number, 'dial_code': 91 };
        let otpResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/otp/sms`, {
            method: "POST",
            body: JSON.stringify(smsOtpForm)
        }).then(response => response.json());
        const inputElements = document.querySelectorAll('.input_wrapper_mobile input');
        inputElements.forEach((ele, index) => {
            ele.value=''
        })
        if(otpResponse){
            setSendAgainMobileOtp1("OTP resent to your registered Mobile No.")
        }

        if (otpResponse.data.status === 200 && otpResponse.data != undefined) {

        }
    }

    return (
        <>
            <ToastContainer />
            <div className={`${fixed === true ? "z-[20] fixed top-[50%] left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%]" : "w-full"}`}>
                <div className="w-full">
                    {
                        showSuccess === 1 &&
                        <div className="dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey md:max-w-[480px] max-w-full w-full mx-auto" >
                            {
                                CloseCta &&
                                <div className="max-w-[24px] w-full ml-auto cursor-pointer" onClick={() => { showSetState(false); setClick(false) }}>
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                                        <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                            c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                            l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                            l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                            C61.42,57.647,61.42,54.687,59.595,52.861z" />
                                    </svg>
                                </div>
                            }
                            
                            <h4 className='section-secondary-heading mb-1'>You're almost there</h4>

                            <p className='info-14 text-black dark:!text-white dark:hover:!text-white hover:!text-black'>Enter the verification code below.</p>

                            <div className="relative hidden md:flex flex-col items-center group">
                                <div className="absolute bottom-0  flex-col items-center hidden mb-6 group-hover:flex min-w-[350px] w-full p-[10px] bg-black">
                                    <div className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap shadow-lg">

                                        <p className="mb-2">That's frustrating. Have you tried these steps?</p>
                                        <ul>
                                            <li className="mb-3">
                                                ?? Make sure you've typed your email correctly.
                                            </li>
                                            <li className="mb-2">
                                                ?? Check your spam folder. Sometimes even the good emails end up there.
                                            </li>
                                            <li className="mb-2">
                                                ?? Give it a few minutes. There might be a delay.
                                            </li>
                                        </ul>
                                        <p className="mt-3">if you still haven???t received your code, contact our customer service.</p>
                                    </div>
                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                </div>
                            </div>

                            <form>
                                {/* emails verification code feilds */}
                                {loginData.email !== "" &&
                                    <div className='mt-5'>
                                        <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row"><span>Email verification</span> <span>({loginData.email})</span></label>
                                        <div className="grid grid-cols-6 justify-between gap-[8px] sm:gap-[20px] input_wrapper input_wrapper_email">
                                            <input type="number"  className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code1" />
                                            <input type="number"  className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code2" />
                                            <input type="number"  className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code3" />
                                            <input type="number"  className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code4" />
                                            <input type="number" className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code5" />
                                            <input type="number"  className="block px-2 md:px-4 w-[46px] dark:bg-black bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code6" />
                                        </div>
                                        <button className='info-14 block mt-[10px]' onClick={(e) => sendAgainEmailOtp(e)}>{ sendAgainEmailOtp1 }</button>
                                    </div>
                                }
                                {/* phone verification code feilds */}
                                {loginData.number !== "" &&
                                    <div className='mt-5'>
                                        <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row"><span>Phone verification</span> <span>({loginData.number} )</span></label>
                                        <div className="grid grid-cols-6 justify-between gap-[8px] sm:gap-[20px] input_wrapper input_wrapper_mobile">
                                            <input type="number" className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code1" />
                                            <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code2" />
                                            <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code3" />
                                            <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code4" />
                                            <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code5" />
                                            <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border text-center border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code6" />
                                        </div>
                                 <p></p>
                                        <button className='info-14 block mt-[10px]' onClick={(e) => sendAgainMobileOtp(e)}>{ sendAgainMobileOtp1 }</button>
                                    </div>
                                }


                                <div className='flex items-start sm:items-center justify-between gap-2 mt-4 flex-col sm:flex-row'>

                                    <div className='flex items-center gap-2'>
                                        <p className="info-14 text-black hover:!text-black dark:!text-white dark:hover:!text-white">Help! I haven't received a code</p>

                                        <div className="relative hidden md:flex flex-col items-center group">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill={mode === "dark" ? "white" : "currentcolor"} viewBox="0 0 20 20" >
                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                            </svg>
                                            <div className="absolute bottom-0  flex-col items-center hidden mb-6 group-hover:flex min-w-[350px] w-full p-[10px] bg-black">
                                                <div className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap shadow-lg">

                                                    <p className="mb-2">That's frustrating. Have you tried these steps?</p>
                                                    <ul>
                                                        <li className="mb-3">
                                                            ?? Make sure you've typed your email correctly.
                                                        </li>
                                                        <li className="mb-2">
                                                            ?? Check your spam folder. Sometimes even the good emails end up there.
                                                        </li>
                                                        <li className="mb-2">
                                                            ?? Give it a few minutes. There might be a delay.
                                                        </li>
                                                    </ul>
                                                    <p className="mt-3">if you still haven???t received your code, contact our customer service.</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                                <button type="button" className='cta mt-5 w-full' onClick={(e) => confirmOtp(e)}>Confirm</button>
                                {/* {
                                // { This Cta for Dashboard modifiy password verifiction }
                                modifyPass &&
                                <button className='cta mt-5 w-full' onClick={(e) => { e.preventDefault(); setShowSuccess(2) }}>Submit</button>
                            }
                            {
                                // { This Cta for Dashboard modifiy mobile verifiction }
                                bindMobile &&
                                <button className='cta mt-5 w-full' onClick={(e) => { confirmOtp(e) }}>Submit</button>
                            }
                            {
                                // { This Cta for Dashboard bindGoogle Authentication }
                                bindGoogle &&
                                <button className='cta mt-5 w-full' onClick={(e) => { e.preventDefault(); setShowSuccess(2) }}>Submit</button>
                            }
                            {
                                verifyCode &&
                                <button className='cta mt-5 w-full' onClick={(e) => confirmOtp(e)}>Confirm</button>
                            } */}
                            </form>
                        </div>
                    }
                    {/* {
                        modifyPass

                            ?
                            showSuccess === 2 &&
                            <ResetPassSuccess overlay={true} />
                            :
                            emailAuth
                                ?
                                showSuccess === 2 &&
                                <ResetPassSuccess overlay={true} emailAuth={true} />
                                :
                                bindGoogle
                                    ?
                                    showSuccess === 2 &&
                                    <ResetPassSuccess overlay={true} bindGoogle={true} />
                                    :
                                    antiFishing
                                        ?
                                        showSuccess === 2 &&
                                        <ResetPassSuccess antiFishing={true} />
                                        :
                                        showSuccess === 2 &&
                                        <ResetPassSuccess overlay={true} linkMobile={true} />
                    } */}
                </div>
                {
                    verifyCode ?

                    showSuccess === 3 &&
                    <ResetPassword formData={loginData} />
                    :
                    modifyPass

                        ?
                        showSuccess === 2 &&
                        <ResetPassSuccess overlay={true} />
                        :
                        emailAuth
                            ?
                            showSuccess === 2 &&
                            <ResetPassSuccess overlay={true} emailAuth={true} />
                            :
                            bindGoogle
                                ?
                                showSuccess === 2 &&
                                <ResetPassSuccess overlay={true} bindGoogle={true} />
                                :
                                antiFishing
                                    ?
                                    showSuccess === 2 &&
                                    <ResetPassSuccess antiFishing={true} />
                                    :
                                    showSuccess === 2 &&
                                    <ResetPassSuccess overlay={true} linkMobile={true} />
                }


            </div>
        </>
    )
}

export default VerificationCode;