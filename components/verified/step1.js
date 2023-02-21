import React, { useState, useContext } from 'react'
import SearchDropdown from '../snippets/search-dropdown';
import DropdownWallet from '../snippets/dropdownWallet';
import Modal from '../snippets/modal';
import Context from '../contexts/context';

const Step1 = () => {

    const [show, setShow] = useState(false)
    const { click, setClick } = useContext(Context)
    
    const idData = [' ID card', 'Passport', 'Drivers License']

    const [showDropdown, setShowDropdown] = useState(false);
    const [showId, setShowId] = useState(false);
    const [userId,setUserId ] = useState('ID Card');


    const selectId = async (item) => {
        
        setUserId(item)
    }

    return (
        <section className='mt-7 max-w-[420px] w-full '>
            <div className=''>
                <span>
                    <p className='info-14'>Country / Region</p>
                    <span className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-md w-full flex items-center gap-2 -z-10 justify-between mt-4' onClick={(e) => { setShowDropdown(!showDropdown) }}>
                        <span className="text-black dark:text-white" id="countryName">Botswana</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                        {
                            showDropdown != false &&
                            <SearchDropdown setShowDropdown={setShowDropdown} country={true} />
                        }
                    </span>
                </span>

                <div className='flex flex-col sm:flex-row mt-6 gap-9 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <label className='info-12'>First name</label>
                        <input type='text' placeholder='Enter first name' autocomplete="off" className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none  focus:!border-primary dark:border-white rounded' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='info-12'>Last name</label>
                        <input type='text' placeholder='Enter last name' autocomplete="off" className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none  focus:!border-primary dark:border-white rounded' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-6 relative' onClick={(e) => { setShowId(!showId) }}>
                    <label className='info-12'>Identity Document Type</label>
                    <input type='text' placeholder='ID Card' autocomplete="off" value={userId} className='border-b-2 -z-10 border-border-clr  bg-transparent   text-black dark:text-white outline-none focus:!border-primary dark:border-white rounded' />
                    {showId && <SearchDropdown idData={idData} selectId={selectId} />}
                </div>
                <div className='flex flex-col gap-4 mt-6 '>
                    <label className='info-12'>Identity no.</label>
                    <input type='text' placeholder='Input identity no.' autocomplete="off" className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none focus:!border-primary dark:border-white rounded' />
                </div>
                <div className='flex flex-col gap-4 mt-6 '>
                    <label className='info-12'>Date of Birth.</label>
                    <span>

                        <input type='date' placeholder='Please select Date of Birth' autocomplete="off" className='border-b-2 border-border-clr  bg-transparent border  text-black dark:text-white outline-none focus:!border-primary dark:border-white rounded' />
                    </span>
                </div>
                <button className='cta my-12 w-full' onClick={() => { setShow(true), setClick(true) }}> Next</button>
            </div>

            {
                show &&
                <Modal setShow={setShow} />
            }


        </section>




    )
}

export default Step1
