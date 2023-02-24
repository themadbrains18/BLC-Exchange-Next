import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Context from '../contexts/context'
import SearchDropdown from './search-dropdown'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const schema = yup
//     .object()
//     .shape({
//         file: yup.mixed().required('File is required'),
//         profile: yup.mixed().required('File is required'),
//         phone: yup.number().required("This Field is required")
//     })
//     .required();
const schema = yup.object().shape({
    file: yup.mixed().test("type", "We only support jpeg/png/jpeg", (value) => {
        return value && value[0].type === "image/jpeg" || 'image/png' || 'image/jpg';
    }),
    profile: yup.mixed().test("type", "We only support jpeg", (value) => {
        return value && value[0].type === "image/jpeg" || 'image/png' || 'image/jpg';
    }),
    phone: yup.number().required("This Field is required")

}).required();

const Modal = (props) => {
    const { click, setClick } = useContext(Context)
    const { data: session } = useSession()
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [step, setStep] = useState(1)
    const [imagesrc, setImageSource] = useState('');
    const [imagesrc2, setImageSource2] = useState('');

    const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    console.log("====props", props)
    const handleFileChange = function (e) {

        console.log("====files", e.target.files)
        if (!e.target.files) {
            setStep(step)
            return;
        }
        var file = e.target.files[0];
        setValue('file', e.target.files, { shouldValidate: true });
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImageSource(reader.result);

        }.bind(this);

        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }
        getBase64(file).then(
            data => {
                if (data !== undefined)
                    setImageSource(data);
                setStep(step + 1)

            }
        );
    }

    const handleBackFile = function (e) {

        if (!e.target.files) {
            setStep(step)
            return;
        }
        var file = e.target.files[0];
        setValue('profile', e.target.files, { shouldValidate: true });
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImageSource(reader.result);

        }.bind(this);

        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }

        getBase64(file).then(
            data => {
                if (data !== undefined)
                    setImageSource2(data);
                setStep(step + 1)
            }
        );
    }


    const handleUpload = async (data, e) => {
        const formData = new FormData();
        let file = getValues('file')
        let profile = getValues('profile')
        if (file !== undefined && step === 3) {

            formData.append("idfront", file[0]);
        }
        if (profile !== undefined) {
            formData.append("idback", profile[0]);
        }
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/file/fileupload`, {
            method: "POST",
            body: formData
        }).then(response => response.json())
        if (result.status == 200) {
            console.log("file upload sucessfully")
            setStep(step + 1)
            if (step === 3) {

                setValue('file', result.data);
            }
            if (step === 5) {
                setValue('profile', result.data)
            }
        }
        else {
            toast.error(result.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }
    }

    const onSubmit = async (data, e) => {

        const dataForm = props.formData;
        let file = getValues('file')
        let profile = getValues('profile')
        let obj = {
            idfront: file, idback: profile, country: dataForm.country, user_id: session?.user?.id, fname: dataForm.fname, lname: dataForm.lname
            , doctype: dataForm.doctype, docnumber: dataForm.docnumber, dob: dataForm.dob, phone: data.phone
        }

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/kyc/create`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json())
        if (result.data.status === 200 && result.data != undefined) {
            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
             setStep(11)            
            setTimeout(() => {
                props.setShow(false)
            setClick(false)
            }, 3000);
        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }

    };


    return (
        <>
            <ToastContainer />
            <div className='h-[100vh] w-full grid place-items-center absolute top-0 right-0 rounded-2xl'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`bg-white  ${click && 'z-20'} rounded-lg md:rounded-2xl grow`} >
                    <div className={`md:min-w-[500px] md:w-full min-w-[300px] h-[600px] flex flex-col justify-between`} >
                        <div>
                            <div className='flex justify-between p-4 '>
                                <button type='button' className={`${step !== 1 ? 'block' : 'hidden'}`} onClick={() => setStep(step - 1)}>
                                    <img src='/assets/icons/back-arrow.svg'></img>
                                </button>
                                <button type='button' className='ml-auto' onClick={(() => {
                                    props.setShow(false)
                                    setClick(false)
                                })}>

                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 24 24">
                                        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div>
                                {step === 1 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Verify your identity</p>
                                        <p className='info-14-16 self-center dark:text-black'>It should take a few minutes</p>
                                        <p className=' info-14-16 mt-4 self-center dark:text-black'>Use your webcam or phone to photograph:</p>
                                        <p className=' info-14-16 self-center dark:text-black'>your identity document</p>
                                        <p className=' info-14-16 mt-4 self-center dark:text-black'>your face</p>
                                    </div>
                                }
                                {step === 2 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Submit identity card (front)</p>
                                        <p className='info-14-16 self-center dark:text-black'>Take a photo with your phone</p>
                                        <div className='my-14 bg-border-clr p-8 self-center rounded-[50%]'>
                                            <Image src='/assets/icons/take-photo.svg' alt='error' width={72} height={72} ></Image>
                                            {/* <input {...register('file')} type="file" /> */}
                                        </div>
                                        {errors.file?.message && <p className="!text-red-700 info-12">{errors.file?.message}</p>}

                                    </div>
                                }

                                {step === 3 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Check your image</p>
                                        <div className='my-14 bg-border-clr self-center '>
                                            {imagesrc !== '' && <img src={imagesrc} style={{ width: '250px', height: '100px' }} />}
                                        </div>
                                        <p className='info-14-16 self-center dark:text-black'>Make sure your deatils are clear and unobstruced</p>
                                    </div>
                                }

                                {step === 4 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Submit identity card (back)</p>
                                        <p className='info-14-16 self-center dark:text-black'>Take a photo with your phone</p>
                                        <div className='my-14 bg-border-clr p-8 self-center rounded-[50%]'>
                                            <Image src='/assets/icons/take-photo.svg' alt='error' width={72} height={72}></Image>
                                        </div>
                                        {errors.profile?.message && <p className="!text-red-700 info-12">{errors.profile?.message}</p>}

                                    </div>
                                }
                                {step === 5 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Check your image</p>
                                        <div className='my-14 bg-border-clr py-6 px-8 self-center '>
                                            {imagesrc2 !== '' && <img src={imagesrc2} style={{ width: '250px', height: '100px' }} />}
                                        </div>
                                        <p className='info-14-16 self-center dark:text-black'>Make sure your deatils are clear and unobstruced</p>
                                    </div>
                                }
                                {step === 6 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Continue on your phone</p>
                                        <p className='info-14-16 self-center dark:text-black'>Here’s how to do it:</p>
                                        <div className='flex flex-col gap-4 justify-center p-4 mt-6'>

                                            <div className='flex gap-4'>
                                                <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                    <Image src='/assets/icons/step1kyc.svg' alt='error' width={48} height={48}></Image>
                                                </span>
                                                <p className='self-center info-14-16 dark:text-black'>Send a secure link to your phone</p>
                                            </div>
                                            <div className='flex gap-4'>
                                                <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                    <Image src='/assets/icons/srep2kyc.svg' alt='error' width={48} height={48}></Image>
                                                </span>
                                                <p className='self-center info-14-16 dark:text-black'>Open the link and complete the tasks</p>
                                            </div>
                                            <div className='flex gap-4'>
                                                <span className='bg-border-clr p-1 self-center rounded-[50%]'>

                                                    <Image src='/assets/icons/step3kyc.svg' alt='error' width={48} height={48}></Image>
                                                </span>
                                                <p className='self-center info-14-16 dark:text-black'>Check back here to finish the submission</p>
                                            </div>
                                        </div>


                                    </div>
                                }
                                {step === 7 &&

                                    <div className='flex flex-col mt-8 p-4 justify-center items-center'>
                                        <p className='section-secondary-heading self-center dark:text-black'>Get your secure link</p>
                                        <p className='info-14-16 self-center dark:text-black'>Scan the QR code with your phone</p>
                                        <Image src='/assets/images/qr.png' alt='error' width={120} height={80} className='mt-5 '></Image>
                                        <div className='flex gap-2  mt-6'>
                                            <Image src='/assets/icons/questionmark.svg' alt='error' width={20} height={20}></Image>
                                            <p className='underline info-14 text-black dark:text-black'>How to scan a QR code</p>
                                        </div>
                                        <p className='info-14 mt-6'>Choose an alternative method</p>
                                        <div className='flex gap-4 mt-9'>
                                            <div className='flex' onClick={() => { setStep(9) }}>
                                                <Image src='/assets/icons/message.svg' alt='error' width={20} height={20}></Image>
                                                <p className='underline info-14 text-black dark:text-black'>Get link via SMS</p>
                                            </div>
                                            <div className='flex'>
                                                <Image src='/assets/icons/link.svg' alt='error' width={20} height={20}></Image>
                                                <p className='underline info-14 text-black dark:text-black'>Copy link</p>
                                            </div>

                                        </div>

                                    </div>
                                }

                                {step === 8 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>One final step</p>
                                        <p className='info-14-16 self-center dark:text-black'>Here’s everything you’ve uploaded:</p>
                                        <div className='flex flex-col mx-auto gap-7 my-12'>
                                            <div className='flex gap-3'>
                                                <Image src='/assets/icons/tick.svg' alt='error' width={20} height={20}></Image>
                                                <p className='dark:text-black'>Document</p>
                                            </div>
                                            <div className='flex gap-3'>
                                                <Image src='/assets/icons/tick.svg' alt='error' width={20} height={20}></Image>
                                                <p className='dark:text-black'>Selfie</p>
                                            </div>
                                        </div>


                                    </div>

                                }

                                {step === 9 &&

                                    <div className='flex flex-col mt-8 p-4 justify-center items-center'>
                                        <p className='section-secondary-heading self-center dark:text-black'>Get your secure link</p>
                                        <p className='info-14-16 self-center dark:text-black'>Send this one-time link to your phone</p>

                                        <div className="border border-black  rounded my-20 min-h-[46px] pl-4 flex items-center relative">
                                            <div className="flex items-center gap-2  min-w-[90px] cursor-pointer" onClick={() => { setDropdownPhone(!DropdownPhone) }}>
                                                <span className="text-black" id="counteryCode">+ <span>91</span> </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#656e6f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down max-w-[24px] w-full"><polyline points="6 9 12 15 18 9" /></svg>
                                            </div>
                                            <input type="tel" placeholder="Mobile number" className=" block  px-4 max-w-full w-full bg-transparent  text-black dark:text-white outline-none border-l-[1px] border-grey focus:!border-primary" name="phone"
                                                {...register('phone')} />
                                            <button type='button' className='cta max-w-[110px] w-full'
                                                onClick={() => {
                                                    setStep(8)
                                                }}>Send Link</button>
                                            {
                                                DropdownPhone &&
                                                <SearchDropdown code={true} setDropdownPhone={setDropdownPhone} />
                                            }
                                        </div>
                                        {errors.phone && (
                                            <span role="alert" className="!text-red-700 info-12">This is required</span>
                                        )}

                                        <p className='info-14 mt-6'>Choose an alternative method</p>
                                        <div className='flex gap-4 mt-9'>
                                            <div className='flex' onClick={() => { setStep(9) }}>
                                                <Image src='/assets/icons/message.svg' alt='error' width={20} height={20}></Image>
                                                <p className='underline info-14 text-black dark:text-black'>Get link via SMS</p>
                                            </div>
                                            <div className='flex'>
                                                <Image src='/assets/icons/link.svg' alt='error' width={20} height={20}></Image>
                                                <p className='underline info-14 text-black dark:text-black'>Copy link</p>
                                            </div>

                                        </div>

                                    </div>
                                }

                                {step === 10 &&

                                    <div className='flex flex-col mt-8 p-4 justify-center items-center'>
                                        <p className='section-secondary-heading self-center dark:text-black'>Check your mobile</p>
                                        <p className='info-14-16 self-center dark:text-black'>We’ve sent a secure link to +917814104310</p>
                                        <p className='info-14-16 self-center dark:text-black'>It may take a few minutes to arrive</p>

                                        <div className='my-11 bg-border-clr p-8 self-center rounded-[50%]'>
                                            <Image src='/assets/icons/phoneverify.svg' alt='error' width={72} height={72}></Image>
                                        </div>
                                        <div className='border-2 mb-2 rounded-2xl p-4'>
                                            <p className='info-14-16'>Keep this window open while using your mobile</p>
                                            <p className='info-14-16'>  Your link will expire in one hour</p>
                                        </div>
                                        <a className='info-14 underline cursor-pointer'>Resend Link</a>
                                    </div>
                                }
                                {step === 11 &&

                                    <div className='flex flex-col mt-40 p-4 justify-center items-center'>
                                        <p className=' mt-7 section-secondary-heading self-center dark:text-black'>Thank You</p>
                                        <p className='info-14-16 self-center dark:text-black mt-4'>That's all we need to verify</p>
                                        <p className='info-14-16 self-center dark:text-black'>your account</p>

                                        
                                    </div>
                                }
                            </div>
                        </div>

                        {
                            step === 3 || step === 5 ?
                                <div className='my-7 flex justify-between mx-4 gap-5'>
                                    <button type='button' className='cta w-full' onClick={() => { setStep(step - 1) }}>Redo</button>
                                    <button type='button' className='cta w-full ' onClick={() => { handleUpload() }} >Upload</button>
                                </div>

                                :

                                <div className='my-7 flex justify-center flex-col'>
                                    {step === 8 ?
                                        <button type='submit' className='cta self-center'>Submit Documents</button>
                                        :
                                        <button type='button' className='cta self-center' onClick={() => {
                                            if (step !== 8) {

                                                setStep(step + 1)
                                            }
                                            if (step === 2 || step === 4) {
                                                setStep(6)
                                            }


                                        }} >{step === 1 ? 'Choose Document' : step === 2 ? 'Continue on Phone' : step === 4 ? 'Continue on Phone' : step === 6 ? 'Get Secure Link' : ''}</button>
                                    }
                                    <div className={`mx-auto mt-3 ${step === 2 ? 'block' : 'hidden'}`} >
                                        <input id='fileUpload' type='file' placeholder='or upload photo' className='hidden' {...register('fileUpload')} onChange={(e) => { handleFileChange(e) }} ></input>
                                        <label htmlFor='fileUpload' className='underline '>or Choose file </label>
                                    </div>
                                    <div className={`mx-auto mt-3 ${step === 4 ? 'block' : 'hidden'}`} >
                                        <input name='backfile' id='backfile' type='file' placeholder='or upload photo'  {...register('fileUpload2')} className='hidden' onChange={(e) => { handleBackFile(e) }}  ></input>
                                        <label htmlFor='backfile' className='underline '>or Choose file  </label>
                                    </div>
                                </div>

                        }


                    </div>

                </form>
            </div>
        </>

    )
}

export default Modal
