import React, { useState, useContext } from 'react'
import SearchDropdown from '../snippets/search-dropdown';
import DropdownWallet from '../snippets/dropdownWallet';
import Modal from '../snippets/modal';
import Context from '../contexts/context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object()
    .shape({
        country: yup.string().required('This field is required'),
        fname: yup.string().required('This field is required'),
        lname: yup.string().required('This field is required'),
        dob: yup.string().required('This field is required'),
        doctype: yup.string().required('This field is required'),
        docnumber: yup.string().required('This field is required'),
    })
    .required();

const Step1 = ({countryName}) => {

    const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });


    const [show, setShow] = useState(false)
    const { click, setClick } = useContext(Context)

    const idData = [' ID card', 'Passport', 'Drivers License']

    const [showDropdown, setShowDropdown] = useState(false);
    const [showId, setShowId] = useState(false);
    const [userId, setUserId] = useState('ID Card');
    const [formData, setFormData] = useState({});

    const submitForm = (data) => {
        formData.doctype=userId
        setFormData(data);
        setShow(true) 
        setClick(true)
    }

    const selectId = async (item) => {
        setUserId(item)
    }

    return (
        <section className='mt-7 max-w-[420px] w-full '>
            <form onSubmit={handleSubmit(submitForm)}>
                <span>
                    <p className='info-14'>Country / Region</p>
                    <span className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-md w-full flex items-center gap-2  justify-between mt-4' >
                        <input type='text' className="text-black dark:text-white bg-transparent outline-none" id="countryName" value={countryName} {...register('country')}></input>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                        {/* {
                            showDropdown != false &&
                            <SearchDropdown setShowDropdown={setShowDropdown} country={true}  />
                        } */}
                    </span>
                    <div className="!text-red-700 info-12">{errors.country?.message}</div>
                </span>

                <div className='flex flex-col sm:flex-row mt-6 gap-9 justify-between'>
                    <div>

                        <div className='flex flex-col gap-4'>
                            <label className='info-12'>First name</label>
                            <input type='text' placeholder='Enter first name' name="fname" autoComplete="off" {...register('fname')} className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none  focus:!border-primary dark:border-white rounded' />
                        </div>
                        <div className="!text-red-700 info-12">{errors.fname?.message}</div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <label className='info-12'>Last name</label>
                            <input type='text' placeholder='Enter last name' autoComplete="off" {...register('lname')} className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none  focus:!border-primary dark:border-white rounded' />
                        </div>
                        <div className="!text-red-700 info-12">{errors.lname?.message}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-6 relative ' onClick={(e) => { setShowId(!showId) }}>
                    <label className='info-12'>Identity Document Type</label>
                    <span className='cursor-pointer border-b-2 border-border-clr hover:border-primary relative max-w-md w-full flex items-center gap-2  justify-between ' >
                    <input type='text' placeholder='ID Card' autoComplete="off" value={userId} {...register('doctype')} className="text-black dark:text-white bg-transparent outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                    
                    {showId && <SearchDropdown setShowDropdown={setShowId} idData={idData} selectId={selectId} />}
                    </span>
                </div>
                <div className="!text-red-700 info-12">{errors.doctype?.message}</div>
                <div className='flex flex-col gap-4 mt-6 '>
                    <label className='info-12'>Identity no.</label>
                    <input type='text' placeholder='Input identity no.' autoComplete="off" {...register('docnumber')} className='border-b-2 border-border-clr  bg-transparent   text-black dark:text-white outline-none focus:!border-primary dark:border-white rounded' />
                </div>
                <div className="!text-red-700 info-12">{errors.docnumber?.message}</div>
                <div className='flex flex-col gap-4 mt-6 '>
                    <label className='info-12'>Date of Birth.</label>
                    <span>

                        <input type='date' placeholder='Please select Date of Birth' autoComplete="off" {...register('dob')} className='border-b-2 border-border-clr  bg-transparent border  text-black dark:text-white outline-none focus:!border-primary dark:border-white rounded' />
                    </span>
                </div>
                <div className="!text-red-700 info-12">{errors.dob?.message}</div>
                <button type='submit' className='cta my-12 w-full' > Next</button>
            </form>

            {
                show &&
                <Modal setShow={setShow} formData={formData} />
            }


        </section>




    )
}

export default Step1
