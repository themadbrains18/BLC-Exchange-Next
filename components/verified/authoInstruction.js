import React , { useState, useContext } from 'react'
import Context from '../contexts/context';

import Link from "next/link";
import Information from '../../pages/dashboard/information';
import { useRouter } from 'next/router';

function AuthoInstruction({setActivepopup}) {
    const {  setClick,mode  } = useContext(Context)
    const router = useRouter()

    

  return (
    <>
        <div className=' top-[50%] duration-300 z-[20] fixed rounded left-[50%] translate-y-[-50%] w-[calc(100%-20px)] md:max-w-[600px] overscroll-none sm:w-full translate-x-[-50%] dark:bg-black-v-5 bg-white p-3 sm:p-6 md:p-10 border border-grey max-w-[480px] mx-auto'>
         
          <div className='relative'>
            <div className=" ml-auto cursor-pointer absolute top-[-15px] right-[-15px]" onClick={() => { setActivepopup(false) ; setClick(false) }}>
                <svg className='w-[15px]' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                    <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                        c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                        l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                        l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                        C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
            </div>
          <div className='flex flex-col md:gap-14 gap-7'>
                <div>
                    <h1 className='section-secondary-heading font-noto'>Authorization Instructions</h1>
                </div>
                
                <div className='md:p-6 p-3'>
                    <p className='info-14-16 font-noto'>Bind your Bitget account and authorize it as Institution Account</p>
                    <span className='info-14-20 font-medium font-noto text-black'>Bitget UID：</span>
                    <span className='info-14-20 font-medium text-[#1da2b4] font-noto'>3739093429</span>
                </div>
                <div>
                    <label className='flex align-baseline max-w-[477px]'>
                        <input type="checkbox" name="name"  className='block w-[14px] h-[28px]'/>
                        <span className='info-14-16 pl-2 block font-noto'>The above UID will be automatically upgraded to institutional UID after successful application for institutional account</span>
                    </label>
                    <div className='flex gap-2 justify-between mt-4'>
                        <button type="button" className=' block cta2 w-[48%] text-center font-noto'onClick={() => { setActivepopup(false) ; setClick(false) }}>Cancel</button>
                        <button className='block cta w-[48%] text-center font-noto' onClick={()=>{router.push('/dashboard/information'); setActivepopup(false) ; setClick(false)}}>Next</button>
                    </div>
                </div>
             
            </div>  
           
          </div>
        </div>
  
    </>
  )
}

export default AuthoInstruction