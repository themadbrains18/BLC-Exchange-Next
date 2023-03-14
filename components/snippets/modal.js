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
import { useRouter } from 'next/router';
// import fs from 'fs'


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
    statement: yup.mixed()
}).required();

const Modal = (props) => {
    const router = useRouter();
    const { click, setClick } = useContext(Context)
    const { data: session } = useSession()
    const [DropdownPhone, setDropdownPhone] = useState(false);
    const [step, setStep] = useState(1)
    const [imagesrc, setImageSource] = useState('');
    const [imagesrc2, setImageSource2] = useState('');
    const [imagesrc3, setImageSource3] = useState('');
    const [loader, setLoader] = useState(false)

    const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const handleFileChange = function (e) {
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
            setImageSource2(reader.result);

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
    const handleStatement = function (e) {

        if (!e.target.files) {
            setStep(step)
            return;
        }
        var file = e.target.files[0];
        setValue('statement', e.target.files, { shouldValidate: true });
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImageSource3(reader.result);
            setStep(step + 1)
        }.bind(this);

    }

    const handleRedo =  async(e) => {
            setStep(step - 1)
   }

    const handleUpload = async (data, e) => {
        const formData = new FormData();
        setLoader(true)
        let file = getValues('file')
        let profile = getValues('profile')
        let statement = getValues('statement')

        if (file !== undefined && step === 3) {
            console.log("idfront[0]",file[0]);
            formData.append("idfront", file[0]);
        }
        if (profile !== undefined && step === 5) {
            console.log("idback[0]",profile[0]);
            formData.append("idback", profile[0]);
        }
        if (statement !== undefined) {
            console.log("statement[0]",statement[0]);
            formData.append("statement", statement[0]);
        }
        

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/file/fileupload`, {
            method: "POST",
            body: formData
        }).then(response => response.json())
        if (result.status == 200) {
            console.log("file upload sucessfully")
            setStep(step + 1)
            setLoader(false)
            if (step === 3) {

                setValue('file', result.data);
            }
            if (step === 5) {
                setValue('profile', result.data)
            }
            if (step === 7) {
                setValue('statement', result.data)
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
        let statement = getValues('statement')
        let obj = {
            idfront: file, idback: profile, country: dataForm.country, user_id: session?.user?.id, fname: dataForm.fname, lname: dataForm.lname
            , doctype: dataForm.doctype, docnumber: dataForm.docnumber, dob: dataForm.birthDate, statement: statement
        }

        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/kyc/create`, {
            method: "POST",
            body: JSON.stringify(obj)
        }).then(response => response.json())
        if (result.data.status === 200 && result.data != undefined) {
            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
            setStep(9)
            setTimeout(() => {
                props.setShow(false)
                setClick(false)
                router.push('/dashboard/verified')
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
            <div className='h-[100vh] w-full grid place-items-center fixed z-[99] top-0 right-0 rounded-2xl'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={`bg-white  ${click && 'z-20'} rounded-lg md:rounded-2xl grow md:max-w-[500px] max-w-full w-[calc(100%-30px)]  h-[600px]`} >
                    <div className={`md:w-full  flex flex-col justify-between`} >
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
                                            {imagesrc !== '' && <img src={imagesrc} className="max-w-[300px] w-full" />}
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
                                        <div className='my-14 bg-border-clr self-center '>
                                            {imagesrc2 !== '' && <img src={imagesrc2} className="max-w-[300px] w-full" />}
                                        </div>
                                        <p className='info-14-16 self-center dark:text-black'>Make sure your deatils are clear and unobstruced</p>
                                    </div>
                                }
                                {step === 6 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Submit Statement</p>
                                        <p className='info-14-16 self-center dark:text-black'>Take a photo with your phone</p>
                                        <div className='my-14 bg-border-clr p-8 self-center rounded-[50%]'>
                                            <Image src='/assets/icons/take-photo.svg' alt='error' width={72} height={72}></Image>
                                        </div>
                                        {errors.statement?.message && <p className="!text-red-700 info-12">{errors.statement?.message}</p>}
                                    </div>
                                }
                                {step === 7 &&

                                    <div className='flex flex-col mt-8 p-4 '>
                                        <p className='section-secondary-heading self-center dark:text-black'>Check your pdf</p>
                                        <div className='my-14 bg-border-clr py-6 px-8 self-center '>
                                            {imagesrc3 !== '' && <iframe src={imagesrc3} style={{ width: '250px', height: '100px' }} />}
                                        </div>
                                        <p className='info-14-16 self-center dark:text-black'>Make sure your deatils are clear and unobstruced</p>
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
                                                <p className='dark:text-black'>Statement</p>
                                            </div>
                                        </div>


                                    </div>

                                }

                                {step === 9 &&

                                    <div className='flex flex-col mt-40 p-4 justify-center items-center'>
                                        <p className=' mt-7 section-secondary-heading self-center dark:text-black'>Thank You</p>
                                        <p className='info-14-16 self-center dark:text-black mt-4'>That's all we need to verify</p>
                                        <p className='info-14-16 self-center dark:text-black'>your account</p>


                                    </div>
                                }
                            </div>
                        </div>

                        {
                            step === 3 || step === 5 || step === 7 ?
                                <div className='my-7 flex justify-between mx-4 gap-5'>
                                    <button type='button' className='cta w-full' onClick={() => { handleRedo() }}>Redo</button>
                                    {/* <button type='button' className='cta w-full ' onClick={() => { handleUpload() }} >Upload</button> */}
                                    <button type='button' className={`relative cta  w-full ${loader === true ? 'hide_text' : ''} `} onClick={() => { handleUpload() }}>
                                            <span>Upload</span>
                                            {/* spinner */}
                                            <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                            {/* spinner */}
                                        </button>
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


                                        }} >{step === 1 ? 'Choose Document' : ''}</button>
                                    }
                                    <div className={`mx-auto  ${step === 2 ? 'block' : 'hidden'}`} >
                                        <input id='fileUpload' type='file' placeholder='or upload photo' className='hidden' {...register('fileUpload')} onChange={(e) => { handleFileChange(e) }} ></input>
                                        <label htmlFor='fileUpload' className=' cta cursor-pointer'> Choose file </label>
                                    </div>
                                    <div className={`mx-auto ${step === 4 ? 'block' : 'hidden'}`} >
                                        <input name='backfile' id='backfile' type='file' placeholder='or upload photo'  {...register('fileUpload2')} className='hidden' onChange={(e) => { handleBackFile(e) }}  ></input>
                                        <label htmlFor='backfile' className='cta cursor-pointer'> Choose file  </label>
                                    </div>
                                    <div className={`mx-auto ${step === 6 ? 'block' : 'hidden'}`} >
                                        <input name='statement' id='statement' type='file' placeholder='or upload photo'  {...register('fileUpload3')} className='hidden' onChange={(e) => { handleStatement(e) }}  ></input>
                                        <label htmlFor='statement' className='cta cursor-pointer'> Choose file  </label>
                                    </div>
                                </div>

                        }


                    </div>

                </form>
            </div >
        </>

    )
}

export default Modal
