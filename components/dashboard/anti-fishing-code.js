import { useContext,useState } from 'react'
import Context from '/components/contexts/context';
import Link from 'next/link';
import Image from 'next/image';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import VerificationCode from '../login-register/verification-code';
const AntiFishingCode = () => {
    const { mode, setClick } = useContext(Context);
    const [show,setShow]  = useState(false);
    const showPass = (e) =>{
        if(!e.currentTarget.classList.contains("hidden")){
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.previousSibling.classList.toggle("hidden");    
            let pass_input = e.currentTarget.previousSibling.previousSibling;
            pass_input.setAttribute("type","text");
        }
    }
    const hidePass = (e) =>{
        if(!e.currentTarget.classList.contains("hidden")){
            e.currentTarget.classList.toggle("hidden");
            e.currentTarget.nextSibling.classList.toggle("hidden");    
            let pass_input = e.currentTarget.previousSibling;
            pass_input.setAttribute("type","password");
        }
    }
    return (
        <>
            <section className="dark:bg-black-v-5 sm:min-h-[calc(100vh-200px)] sm:h-full sm:py-0 py-10 flex sm:pb-[40px]">
                <div className="container m-auto">
                    <div className="p-3 sm:p-6 max-w-[500px] w-full mx-auto" >
                        <h4 className='section-secondary-heading mb-1 flex items-center gap-4 flex-row-reverse justify-end mb-[30px]'>
                            <span>Set Anti-phishing Code</span>
                            <Link href="setting">
                                <svg className="max-w-[24px] w-full" enableBackground="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path fill={mode === "dark" ? "white" : "#121313"} clipRule="evenodd" d="M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z"  fillRule="evenodd" />
                                </svg>
                            </Link>
                        </h4>
                        <div className="mb-[20px]">
                            <p className="info-14 !text-[#212833] hover:!text-[#212833] dark:!text-white dark:hover:!text-white">What is an anti-phishing code?</p>
                            <p className="info-12">The anti-phishing code is a string of characters that you set yourself to protect yourself from fake websites and emails.</p>
                        </div>
                        <div className="mb-[20px]">
                            <p className="info-14 !text-[#212833] hover:!text-[#212833] dark:!text-white dark:hover:!text-white">Where does the anti-phishing code appear?</p>
                            <p className="info-12">When set, this code will be included in emails from Bitget. Any other emails without this code are scams.</p>
                        </div>
                        <p className="info-14-16 mb-[15px] p-[10px] border border-[#ccc] bg-[#ccc6] rounded">Anti-phishing code: <span className="info-14-16 !text-primary">ABCDE12345</span></p>
                        <div>
                            <label className="info-12 !text-grey">Anti-phishing code</label>
                            <div className="relative">
                                <input type="password" className="mt-[8px] block px-4 w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" placeholder="Enter 8-32 letters or numbers"/>
                                <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                                <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                            </div>
                        </div>
                        <button className={`cta mt-5 w-full relative `} onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("hide_text"); setTimeout(()=>{setClick(true); setShow(true)},2000) }}>
                            <span>Submit</span>
                            {/* spinner */}
                            <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                            {/* spinner */}
                        </button>
                    </div>
                </div>
            </section>    
        {
            show &&
            <VerificationCode CloseCta={true} antiFishing={true} fixed={true} showState={show} showSetState={setShow} />
        }
        </>
    )
}

export default AntiFishingCode;