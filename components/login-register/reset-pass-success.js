import React from 'react'
import Link from 'next/link';
import { useEffect, useContext, useState } from 'react'
import Context from "../contexts/context";
const ResetPassSuccess = ({antiFishing,emailAuth,bindGoogle,overlay,linkMobile}) => {
  const { setClick } = useContext(Context);
  return (
    <div>
        <div className="container">
            <div className="bg-white w-full p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto dark:bg-black-v-5" >
              <svg className='max-w-[40px] sm:max-w-[80px] w-full mx-auto' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style={{enableBackground: 'new 0 0 50 50'}} xmlSpace="preserve">
                      <circle style={{fill: '#25AE88'}} cx={25} cy={25} r={25} />
                      <polyline style={{fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10}} points="
                  38,15 22,33 12,25 " />
              </svg>
              {
                linkMobile 
                ?
                  <h4 className='section-secondary-heading mb-1 text-center'>Mobile Bind <br />successfull</h4>
                :
                
                emailAuth
                ?
                  <h4 className='section-secondary-heading mb-1 text-center'>Email Authentication remove success</h4>
                :
                
                bindGoogle 
                ?
                  <h4 className='section-secondary-heading mb-1 text-center'>Bind Google Authentication success</h4>
                : 
                antiFishing
                ?
                <h4 className='section-secondary-heading mb-1 text-center'>Anti-Fishing Code set successfully.</h4>
                :
                <h4 className='section-secondary-heading mb-1 text-center'>Password reset <br />successfully</h4>
              }
              {
               overlay ? 
                <Link href="/login" className='cta mt-5 block w-full text-center' onClick={setClick(false)}>Back to login</Link>
                :
                antiFishing ?
                <Link href="setting" className='cta mt-5 block w-full text-center' onClick={setClick(false)}>Back to setting</Link>
                :
                <Link href="/login" className='cta mt-5 block w-full text-center'>Back to login</Link>
              }
            </div> 
        </div>
    </div>
  )
}

export default ResetPassSuccess;