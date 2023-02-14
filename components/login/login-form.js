import React from 'react'

const LoginForm = () => {
  return (
    <section className='dark:bg-black-v-5 py-[80px] !pt-[204px]'>
        <div className='container'>
            <div className='p-6 border border-grey'>
                <h4 className='section-secondary-heading mb-5'>Welcome back</h4>
                <div className='flex gap-8 mb-5'> 
                    <button className='info-14'>Email / Mobile number</button>
                    <button className='info-14'>QR code</button>
                </div>
                <form>
                    <input type="text" className="block mb-4 px-4 max-w-full md:max-w-[70%] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" placeholder="Email Address" />
                    <input type="password" className="block px-4 max-w-full md:max-w-[70%] w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="email" placeholder="Email Address" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default LoginForm;