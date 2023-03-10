import Link from 'next/link'
import { useState, useContext, useEffect, useRef } from 'react'
import Context from '/components/contexts/context'
import Input from './fields/Input'
import SelectMenu from '../snippets/selectMenu'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Paymentmodal = ({ paymentods, setpaymentPopup, session }) => {
  const router = useRouter()

  const [modal, setModal] = useState(false)
  const [popup, setPopup] = useState(true)

  const { mode, setClick } = useContext(Context)
  const [defaultVl, Setdefault] = useState(1)
  const formRef = useRef()

  const [defaultIocn, setICon]= useState('https://qrc.bitgetimg.com/otc/images/20220412/1649743468367.png')

  const schema = yup
    .object()
    .shape({
      selectoken: yup.mixed().required('Please select at least one payment...'),
      // usernetwork: yup.string().required('Please Select network'),
      // userwallet: yup.string().required('Please enter crypto waller address'),
    })
    .required()

  const returnvals = (e) => {
    console.log(e.obj)
    console.log(getValues(), ' getValues')

    // remove previous on
    for (let nn in getValues()) {
      unregister(nn)
    }
    // remove previous on

    formRef.current.reset()
    Setdefault(e.obj.id - 1)
    defaultIocn
    if(e.obj.icon != ""){
      setICon(e.obj.icon)
    }else{
      setICon("https://qrc.bitgetimg.com/otc/images/20220412/1649743468367.png")
    }
    setValue('selectoken', e.obj)
    
  }

  let {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    watch,
    setError,
    unregister,
    formState,
    // } = useForm()
  } = useForm({ resolver: yupResolver(schema) })

  const { errors } = formState
  console.log(errors, ' errorserrorserrors')

  const onSubmit = async (data) => {
    let flag = true
    for (let field in data) {
      if (
        data[field] === '' ||
        data[field] === undefined ||
        data[field] === null
      ) {
        setError(field, { message: `${field} field is required!` })
        flag = false
      }
    }

    if (flag) {
      const addNew = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/payment`, {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {

          if(result.res == "success"){
            toast.success(result.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
            })
            setPopup(false)
            formRef.current.reset()
            router.push('/p2p-trade/manage')
          }else{
            toast.error(result.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
            })
          }
          

          
          // /p2p-trade/manage
        })
        .catch((error) => {
          toast.error(err, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          })
        })

      console.log('form data', addNew)
    }
  }

  return (
    <div>
      <div
        className={`${
          popup
            ? 'opacity-1 visible fixed top-[50%]'
            : 'opacity-0 invisible top-[55%]'
        }  duration-300 z-[20] fixed  left-[50%] translate-y-[-50%] w-[calc(100%-20px)] sm:w-full translate-x-[-50%] dark:bg-black-v-5 bg-white p-3 sm:p-6 border border-grey max-w-[480px] w-full mx-auto`}
      >
        <div
          className="max-w-[10px] w-full ml-auto cursor-pointer"
          onClick={() => {
            setPopup(false)

            setpaymentPopup(false)
          }}
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60.963 60.842"
            style={{ enableBackground: 'new 0 0 60.963 60.842' }}
            xmlSpace="preserve"
          >
            <path
              fill={mode === 'dark' ? 'white' : '#231F20'}
              d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                                        c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                                        l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                                        C61.42,57.647,61.42,54.687,59.595,52.861z"
            />
          </svg>
        </div>

        <p className="info-16-22 dark:!text-white !text-black mt-[15px] text-center text-lg">
          Add payment method
        </p>

        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {/* paymentods */}
          <div className="border rounded border-[#b0a4b366] flex justify-between items-center">
            <div className="w-[10] ml-3">
              <img src={defaultIocn} className="w-10" />
            </div>
            <div className="w-[90]">
              <SelectMenu
                selectMenu={paymentods}
                type={'paymentList'}
                returnvals={returnvals}
              />
            </div>
          </div>

          <div className="!text-red-700 info-12">
            {errors.selectoken?.message}
          </div>

          {/* start dynamic form here! */}

          {paymentods[defaultVl].fields.map((field, index) => {
            return (
              <div key={index}>
                <Input
                  name={field.name}
                  label={field.label}
                  register={register}
                  required={field.required}
                  type={field.type}
                  errors={errors}
                />
                <div className="!text-red-700 info-12">
                  {errors?.[field.name]?.message}
                </div>
              </div>
            )
          })}

          {/* required for each method  */}
          <div className="">
            <div className="flex justify-between">
              <label className=" dark:!text-white !text-black  text-center">
                <span className="text-[#f00]">*</span> Fund Code
              </label>
              <Link
                href="#"
                className=" dark:!text-white !text-black  text-center"
              >
                Forgot your fund code?
              </Link>
            </div>
            <div className="w-full mt-2">
              <input
                type={'text'}
                {...register('passcode', { required: true })}
                className="w-full h-10 rounded border border-[#b0a4b366] bg-transparent text-black px-3 dark:!text-white"
              />
              <div className="!text-red-700 info-12">
                {errors.passcode?.message}
              </div>
            </div>
          </div>

          {/* save add cancel button */}

          <div className="flex justify-between mt-4">
            <button className=" dark:!text-white !text-black  text-center py-2 px-10 border border-[#b0a4b366] rounded-lg ">
              Cancel
            </button>
            <button className=" dark:!text-white !text-black  text-center py-2 px-10 border border-[#b0a4b366] rounded-lg bg-primary">
              Save and use
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Paymentmodal
