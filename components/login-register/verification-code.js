import {useEffect,useContext} from 'react'
import Context from "../contexts/context";
import Link from 'next/link';


const VerificationCode = () => {
    const { mode } = useContext(Context);
    useEffect(()=>{
        const inputElements = document.querySelectorAll('.input_wrapper input');
        inputElements.forEach((ele,index)=>{
        ele.addEventListener('keydown',(e)=>{
        
            if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
        })
        ele.addEventListener('input',(e)=>{
        
            const [first,...rest] = e.target.value
            e.target.value = first ?? '' 
            const lastInputBox = index===inputElements.length-1
            const didInsertContent = first!==undefined
            if(didInsertContent && !lastInputBox) {
                // continue to input the rest of the string
                inputElements[index+1].focus()
                inputElements[index+1].value = rest.join('')
                inputElements[index+1].dispatchEvent(new Event('input'))
            }
        })
        })

    },[])
  return (
    <div className="dark:bg-black-v-5">
        <div className="container !p-0">
            <div className="max-w-full md:max-w-[480px] w-full p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto" >
            <h4 className='section-secondary-heading mb-1'>You're almost there</h4>
            <p className='info-14 text-black dark:!text-white hover:!text-white'>Enter the verification code below.</p>

            <form>
                <div className='mt-5'>
                    <label className="info-14-16 mb-2 flex items-start sm:items-center justify-between gap-0 sm:gap-2 flex-col sm:flex-row"><span>Email verification</span> <span>(email name which is registred)</span></label>
                    <div className="grid grid-cols-6 justify-between gap-[8px] sm:gap-[20px] input_wrapper">
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code1" />
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code2" />
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code3" />
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code4" />
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code5" />
                        <input type="number"  className="block px-4 max-w-[46px] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="code6" />
                    </div> 
                </div>
                <div className='flex items-start sm:items-center justify-between gap-2 mt-4 flex-col sm:flex-row'>
                    <button className='info-14 block'>Send again</button>
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
                                            · Make sure you've typed your email correctly.
                                        </li>
                                        <li className="mb-2">
                                            · Check your spam folder. Sometimes even the good emails end up there.
                                        </li>
                                        <li className="mb-2">
                                            · Give it a few minutes. There might be a delay.
                                        </li>
                                    </ul>
                                    <p className="mt-3">if you still haven’t received your code, contact our customer service.</p>
                                </div>
                                <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                            </div>
                        </div>


                    </div>
                    
                </div>
                {/* <button className='cta mt-5 w-full'>Sign Up</button> */}
                <Link href="/" className='cta mt-5 w-full text-center'>Sign Up</Link>
            </form>
            </div> 
        </div>
    </div>
  )
}

export default VerificationCode;