import {useState} from 'react'

import ResetPassword  from './reset-pass';

const ForgotPass = () => {
  const [show,setShow]  = useState(1);
  return (
    <>
    <div>
        {
          show === 1 &&
            <section className="dark:bg-black-v-5 py-[80px] !pt-[120px] lg:!pt-[204px]">
                <div className="container">
                    <div className="max-w-full md:max-w-[480px] w-full p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto" >
                      <h4 className='section-secondary-heading mb-1'>Forgot your password?</h4>
                      <p className='info-14 text-black dark:!text-white hover:!text-white'>Don't worry, it happens to the best of us.</p>

                      <form>
                        <div className='mt-5'>
                          <input type="text" placeholder="Email / Mobile number" className="block px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" />
                          <span className='info-12 mt-1 block !text-[#f7647e]'>Please enter Account</span>
                        </div>
                        <button className='cta mt-5  w-full' onClick={()=>{setShow(2)}}>Next</button>
                      </form>
                    </div> 
                </div>
            </section>
        }
        {
          show === 2 &&
          <ResetPassword />
        }
        </div>
    </>
  )
}

export default ForgotPass;