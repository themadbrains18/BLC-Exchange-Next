import React, { useState } from 'react'
import Link from "next/link";
import CompanyForm from './companyForm';

function Information() {
  const [next, setNext] = useState(0);
  return (
    <section className=' p-5 md:pt-12 md:pl-[33px] md:pr-6 md:min-h-[800px] md:pb-[40px] dark:bg-black-v-4' >
      <div>


        <div className='mb-5 flex items-center gap-3'>
          <button >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right rotate-180 stroke-grey dark:stroke-white block">
              <line x1={5} y1={12} x2={19} y2={12} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <h2 className=' section-secondary-heading block'>Institutional Verification</h2>
        </div>
        {next === 0 &&
          <>

            <div className='dark:bg-[#212833] py-[14px] pr-[18px] pl-[18px] bg-[#f9f9f9] flex items-center gap-2'>
              <span className='block'>
                <svg className='dark:fill-white' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 438.533 438.533" style={{ enableBackground: 'new 0 0 438.533 438.533' }} xmlSpace="preserve">
                  <g>
                    <path d="M409.133,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736,9.801,259.058,0,219.273,0
                  c-39.781,0-76.466,9.801-110.063,29.407c-33.595,19.604-60.192,46.201-79.8,79.796C9.801,142.8,0,179.489,0,219.267
                  s9.804,76.463,29.407,110.062c19.607,33.585,46.204,60.189,79.799,79.798c33.597,19.605,70.283,29.407,110.063,29.407
                  s76.47-9.802,110.065-29.407c33.593-19.602,60.189-46.206,79.795-79.798c19.603-33.599,29.403-70.287,29.403-110.062
                  C438.533,179.489,428.732,142.795,409.133,109.203z M255.82,356.021c0,2.669-0.862,4.9-2.573,6.707s-3.806,2.711-6.283,2.711
                  h-54.818c-2.472,0-4.663-0.952-6.565-2.854c-1.904-1.903-2.854-4.093-2.854-6.563V301.78c0-2.478,0.95-4.668,2.854-6.571
                  c1.903-1.902,4.093-2.851,6.565-2.851h54.818c2.478,0,4.579,0.907,6.283,2.707c1.711,1.817,2.573,4.045,2.573,6.715V356.021z
                  M255.246,257.812c-0.192,1.902-1.188,3.568-2.991,4.996c-1.813,1.424-4.045,2.135-6.708,2.135h-52.822
                  c-2.666,0-4.95-0.711-6.853-2.135c-1.904-1.428-2.857-3.094-2.857-4.996L178.162,80.51c0-2.288,0.95-3.997,2.852-5.14
                  c1.906-1.521,4.19-2.284,6.854-2.284h62.819c2.666,0,4.948,0.76,6.851,2.284c1.903,1.143,2.848,2.856,2.848,5.14L255.246,257.812z" />
                  </g>
                </svg>
              </span>
              <span className='block info-14-2 '>
                Before starting the institution verification, please prepare the following documents in advance.
              </span>
            </div>

            <ul className='ml-[30px] mt-6 mb-12 '>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Certificate of Incorporation</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Business Registration Certificate</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Articles of Association</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Authorization letter</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Passport / ID and proof of residence (within the last three months) of the company's actual beneficiary (the ultimate beneficial owner [UBO]) holding more than 25% of the company's shares)</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Passport/ID of the person authorized to operate the account</span>
              </li>
              <li className='mb-4 before:absolute before:bg-[#1da2b4] relative before:w-[6px] before:h-[6px] before:top-[10px] before:left-[-20px]'>
                <span className='info-14-2'>Photo of the person authorized to operate the account holding his/her passport/ID card</span>
              </li>

            </ul>
            <button className='cta max-w-[360px] w-full' onClick={() => { setNext(1) }}> Start Verification </button>
          </>
        }
      </div>

      {
        next === 1 &&
        <CompanyForm />


      }

    </section>
  )
}

export default Information