import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import ResetPassword from './reset-pass';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import VerificationCode from './verification-code';

const ForgotPass = () => {
  const [show, setShow] = useState(1);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState()
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('This field is required'),
  })
  const router = useRouter();
  let {
    register,
    handleSubmit,
    formState: { errors }, getValues
  } = useForm({ resolver: yupResolver(formSchema) });

  // useEffect(() => {

  //   if (router.query.resetPassword) {
  //     setShow(2)
  //   }
  // }, [router.query]);

  const onSubmit = async (data) => {
    let text = data.username;
    let exist = text.includes("@");
    let formdata = {
      username: data.username,
      requestType: exist === true ? 'email' : 'mobile',
      dial_code: 91
    }
    let userExist = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/exist`, {
      method: "POST",
      body: JSON.stringify(formdata)
    }).then(response => response.json());
    if (userExist?.data?.status === 200 && userExist.data !== undefined) {
      setFormData(userExist.data.data)
      setMessage(userExist.data.message)

        
        setShow(3)
      // toast.success(userExist.data.message, {
      //   position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      // })
      // setShow(2)

    }
    else {
      toast.error(userExist?.data?.message, {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
    }


  }
  return (
    <>
      <ToastContainer />
      <div>


        <section className="dark:bg-black-v-5 py-[80px] ! lg:!pt-[204px]">
          <div className="container">
            {show === 1 &&
              <div className="max-w-full sm:max-w-[480px] w-full p-3 sm:p-6 border border-grey   mx-auto" >
                <h4 className='section-secondary-heading mb-1'>Forgot your password?</h4>
                <p className='info-14 text-black dark:!text-white dark:hover:!text-white hover:!text-black'>Don't worry, it happens to the best of us.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mt-5'>
                    <input type="text" placeholder="Email / Mobile number" className="block px-4 max-w-full w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" name="username" {...register('username')} />
                    {message !== '' && <span className='info-14 mt-1 block !text-[#1da2b4]'>{message}</span>}
                    <div className="!text-red-700 info-12">{errors.username?.message}</div>
                  </div>
                  <button type="submit" className={`cta mt-5 w-full relative `} >
                    <span>Next</span>
                    {/* spinner */}
                    <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                    {/* spinner */}
                  </button>
                </form>
              </div>
            }
          </div>
          {
            show === 3 &&
            <VerificationCode verifyCode={true} loginData={formData} />
          }
        </section>

        {
          show === 2 &&
          <ResetPassword formData={formData} />
        }

      </div>
    </>
  )
}

export default ForgotPass;