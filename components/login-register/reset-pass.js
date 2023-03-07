import { useState } from 'react'
import Image from 'next/image';
import passHide from '../../public/assets/icons/pass-hide.svg';
import passShow from '../../public/assets/icons/pass-show.svg';
import ResetPassSuccess from './reset-pass-success';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const ResetPassword = ({ formData }) => {
  const [show, setShow] = useState(1);

  const router = useRouter();
  const formSchema = Yup.object().shape({
    newpassword: Yup.string()
      .required('Password is mendatory'),
    confirmpassword: Yup
      .string()
      .oneOf([Yup.ref('newpassword')], 'New password and confirm password must match')
      .required('Confirm PAssword Required field'),
  })

  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(formSchema) });

  const showPass = (e) => {
    if (!e.currentTarget.classList.contains("hidden")) {
      e.currentTarget.classList.toggle("hidden");
      e.currentTarget.previousSibling.classList.toggle("hidden");
      let pass_input = e.currentTarget.previousSibling.previousSibling;
      pass_input.setAttribute("type", "text");
    }
  }
  const hidePass = (e) => {
    if (!e.currentTarget.classList.contains("hidden")) {
      e.currentTarget.classList.toggle("hidden");
      e.currentTarget.nextSibling.classList.toggle("hidden");
      let pass_input = e.currentTarget.previousSibling;
      pass_input.setAttribute("type", "password");
    }
  }
  const onSubmit = async (data) => {
    console.log("==hello")
    let obj = { newpassword: data.newpassword, id: formData.id };
    let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/password`, {
        method: "PUT",
        body: JSON.stringify(obj)
    }).then(response => response.json());

    if (result.data.status === 200 && result.data !== undefined) {
        toast.success('Password Changed Successfully!', {
            position: toast.POSITION.TOP_RIGHT, autoClose: 3000
        });
        setShow(false);
        router.push('/login');
    }
    else {
        toast.error(result.data.message, {
            position: toast.POSITION.TOP_RIGHT, autoClose: 5000
        });
    }
}
  return (
    <>
     <ToastContainer />
      {
        show === 1 &&
        <section className="dark:bg-black-v-5 py-[80px] ! lg:!pt-[204px]">
          <div className="container">
            <div className="max-w-full sm:max-w-[480px] w-full p-3 sm:p-6 border border-grey  mx-auto" >
              <h4 className='section-secondary-heading mb-1'>Enter a new password</h4>
              <p className='info-14 text-black dark:!text-white hover:!text-black dark:hover:!text-white'>Once you reset your password, any withdrawals and P2P sales will be put on a temporary hold for 24 hours.</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-5'>
                  <div className="relative mb-3">
                    <input type="password" id="pass_input" {...register('newpassword')} placeholder="Set password" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="newpassword" />
                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                  </div>
                  <p role="alert" className="!text-red-700 info-12">{errors.newpassword?.message}</p>
                  <div className="relative">
                    <input type="password" id="pass_input" {...register('confirmpassword')} placeholder="Password confirmation" className="block  px-4 !pr-[45px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="confirmpassword" />
                    <Image src={passShow} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%] hidden" onClick={(e) => { hidePass(e) }} />
                    <Image src={passHide} alt="" width={16} height={16} className="cursor-pointer absolute top-[50%] right-[20px] translate-y-[-50%]" onClick={(e) => { showPass(e) }} />
                  </div>
                  <p role="alert" className="!text-red-700 info-12">{errors.confirmpassword?.message}</p>
                  {/* <span className='info-12 mt-1 block !text-[#f7647e]'>Please enter Account</span> */}
                </div>
                <button className='relative cta mt-5  w-full'  type='submit' >
                  <span>Next</span>
                  {/* spinner */}
                  <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                  {/* spinner */}
                </button>
              </form>
            </div>
          </div>
        </section>
      }
      {
        show === 2 &&
        <ResetPassSuccess />
      }
    </>
  )
}

export default ResetPassword;