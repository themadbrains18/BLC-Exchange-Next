import { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Context from "/components/contexts/context";
import SearchDropdown from "/components/snippets/search-dropdown";
import Paymentmodal from '../../components/payments/payment-modal';
import SelectMenu from '../snippets/selectMenu';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import VerificationPopup from '../snippets/verification-popup';
import AdTable from './ad/adTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import PaymentMethodModal from "/components/snippets/payment-method-modal";


const P2PManagement = ({ session, paymentods, userpaymentods }) => {
    const { mode, setClick, verifyData, setVerifyData } = useContext(Context);
    const [rotate, setRotate] = useState(false);
    const router = useRouter()

    const [dropDown, setDropDown] = useState(false);
    const [paymentMethodModal, setPaymentMethodModal] = useState(false);
    const [active, setActive] = useState(1);
    const [coinImg, setCoinImg] = useState("https://bitlivecoinnetwork.com/images/logo.png");
    const [coin, setCoin] = useState("Select Coin");
    const [popup, showPopup] = useState(false);
    const pm_duration = ['15 minute', '20 minute']
    const pm_method = ['UPI', 'Google Pay']
    const [tokenBalance, setTokenBlance] = useState(0)
    const [clear, setClear] = useState(false);

    // const [minLimit, setMinLimit] = useState(0)
    // const [maxLimit, setMaxLimit] = useState(0)
    const [balanceMessage, setBalanceMessage] = useState(0)
    const [postData, setPostData]= useState([]);

    
    const schema = yup
        .object()
        .shape({
            usertoken: yup.number().required('Please select at least one item...'),
            amount: yup.number().positive().typeError('Please enter amount'),
            quantity: yup.number().positive().typeError('Please enter quantity'),
            min_limit: yup.number().positive().typeError('Please enter minimum limit'),
            max_limit: yup.number().positive().moreThan(yup.ref('min_limit')).typeError('Maximum limit must be greater than minimum limit'),
            deadline: yup.string().required('Please select Payment duration'),
            method: yup.string().required('Please select at least one payment method'),
            notes: yup.string(),
            checked: yup.boolean().oneOf([true], 'This field must be checked')
            // withdrawAmont: yup

            //     .required('Please enter amount'),
        }).required()
    let {
        register,
        setValue,
        getValues,
        handleSubmit,
        reset,
        watch,
        setError, clearErrors, resetField,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const selectCoin = async (item) => {
        setCoin(item.symbol);
        setCoinImg(item.image);
        setRotate(false);
        setValue('usertoken', item.id)
        clearErrors("usertoken")

        let tokenBalnces = await fetch(
            `${process.env.NEXT_PUBLIC_BASEURL}/post/create?userid=${session.user.id}`,
            {
                method: 'GET',
            },
        ).then((response) => response.json())

        if (tokenBalnces.data) {

            for (const token of tokenBalnces.data) {
                if (token.token_id === item.id) {
                    setTokenBlance(token['balance'])
                    return;
                }
                else {
                    setTokenBlance(0)
                }
            }
        }


    };

    const selectedMethod = async (item) => {
        setValue('method', item)
        clearErrors("method")
    };

    const selectedNetwork = async (item) => {
        setValue('deadline', item)
        clearErrors("deadline")
    };

    const onSubmit = async (data) => {

        console.log('i am here!', data)
        data['user_id'] = session?.user?.id
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/post/create`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
        if (result.data.status === 200 && result.data != undefined) {
            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
            reset()
            resetField('usertoken', { defaultValue: 0 })
            setCoin('Select Coin')
            setBalanceMessage(0)
            setTokenBlance(0)
            setClear(true);
            // router.push('/p2p-trade/manage')
        }
        else {
            toast.error(result.data.message, {
                position: toast.POSITION.TOP_RIGHT, autoClose: 5000
            })
        }

    }

    // 
    // const [paymentPopup, setpaymentPopup] = useState(false)

    const setpaymentPopup = (e)=>{
        setpayment(false)
    }


    // enable and disable payment modal 
    const [paymentPopup, setpayment] = useState(false)


    return (
        <>
            <ToastContainer />
            <section className="dark:bg-black-v-3 py-10 md:py-20 ">

            {
                paymentPopup && <Paymentmodal paymentods={paymentods} setpaymentPopup={setpaymentPopup}  />
            }
                

                <div className="container">
                    <div className="flex items-start">
                        <div className="max-w-[200px] w-full md:block hidden">
                            <ul>
                                <li className={`${active === 1 ? 'border-r-[4px] border-primary pl-[15px] bg-[#1da2b41f]' : 'pl-[15px]'}`} ><Link className="info-14-16 py-[10px] block " href="manage" onClick={() => { setActive(1) }}>P2P management</Link></li>
                                <li className={`${active === 2 ? 'border-r-[4px] border-primary pl-[15px] bg-[#1da2b41f]' : 'pl-[15px]'}`} ><Link className="info-14-16 py-[10px] block" href="" onClick={() => { setActive(2) }}>My order</Link></li>
                                <li className={`${active === 3 ? 'border-r-[4px] border-primary pl-[15px] bg-[#1da2b41f]' : 'pl-[15px]'}`} ><Link className="info-14-16 py-[10px] block" href="" onClick={
                                    () => {
                                        let verified = false;
                                        if (session?.user?.email !== '' && session?.user?.kycstatus === 'success' && session?.user?.number !== '' && session?.user?.tradingPassword !== '') {
                                            verified = true;
                                        }
                                        if (verified) {
                                            clearErrors(["usertoken","method","deadline","amount","quantity","min_limit","max_limit","checked"])
                                            setActive(3)
                                            
                                        }
                                        else {
                                            showPopup(true);
                                        }

                                    }}>Post Ad</Link></li>
                                <li className={`${active === 4 ? 'border-r-[4px] border-primary pl-[15px] bg-[#1da2b41f]' : 'pl-[15px]'}`} ><Link className="info-14-16 py-[10px] block" href="" onClick={() => {
                                    setActive(4);
                                }}>My Ads</Link></li>
                            </ul>
                        </div>
                        {active === 1 && <div className="max-w-[100%-200px] w-full md:border-l border-grey md:pl-[20px]">
                            {/* about */}
                            <div className="flex md:items-center justify-between flex-col md:flex-row	gap-[20px]">
                                <div className="flex items-center gap-[18px]">
                                    <div className="w-[48px] h-[48px] rounded-full bg-[#1da2b41a] flex">
                                        <span className="m-auto text-primary dark:text-primary info-16-22">S</span>
                                    </div>
                                    <div className="">
                                        <p className="info-16-22 !text-black hover:!text-black dark:!text-white">Surinder Kumar</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[50px] ">
                                    <div>
                                        <p className="info-12 !text-[14px] mb-[10px]">Total trades:</p>
                                        <span >
                                            <span className="info-12 !text-[18px] mr-[10px] dark:!text-white !text-black">0</span>
                                            <span className="info-12">
                                                Buy 0
                                                <span className="info-12 !text-[14px]">&nbsp;|&nbsp;</span>
                                                Sell 0
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="info-12 !text-[14px] mb-[10px]">30-day trades:</p>
                                        <span >
                                            <span className="info-12 !text-[18px] mr-[10px] dark:!text-white !text-black">0</span>
                                            {/* <span className="info-12">
                                            Buy 0
                                            <span className="info-12 !text-[14px]">&nbsp;|&nbsp;</span>
                                            Sell 0
                                        </span> */}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment methods */}

                            <div className="flex items-center justify-between  gap-[20px] mt-[50px]">
                                <p className="info-16-22 dark:!text-white !text-black">Payment methods</p>
                                {/* <p className="info-14 cursor-pointer dark:!text-primary !text-primary" onClick={() => { showPopup(true); setClick(true) }}>+ Add payment methods</p> */}
                                <p className="info-14 cursor-pointer dark:!text-primary !text-primary" onClick={() => {
                                    let verified = false;
                                    if (session?.user?.email !== '' && session?.user?.kycstatus === 'success' && session?.user?.number !== '' && session?.user?.tradingPassword !== '') {
                                        verified = true;
                                    }
                                    if (verified) {
                                        // setClick(true)
                                        setpayment(true)
                                    }
                                    else {
                                        showPopup(true);
                                    }
                                    // showPopup(true); setClick(true) 
                                }}>+ Add payment methods</p>
                            </div>

                            {/* payment method list here! */}
                            <div className=" w-full border border-[#919899] mt-4 rounded-lg">
                                <div className="py-3 px-4 text-black dark:!text-white border-b border-[#919899]">
                                    Make sure to use your account with your real name. During the transaction, only one payment method is allowed to be enabled for the same type
                                </div>


                                {
                                    userpaymentods.map((pm, index) => {
                                        let dataInfo = JSON.parse(pm?.pmObject)
                                        console.log(dataInfo)
                                        return (
                                            <div key={index}>
                                                <div className="flex  py-3 px-4 justify-between items-center">
                                                    <div>
                                                        <div className="flex space-x-3">
                                                            <img src={pm?.icon} className="w-5" />
                                                            <p className='text-black dark:!text-white'>{pm?.pm_name}</p>
                                                        </div>

                                                        <div className="flex space-x-3 mt-2">
                                                            {dataInfo &&
                                                                Object.keys(dataInfo).map((keyName, i) => {

                                                                    if (keyName === "selectoken" || keyName === "passcode" || typeof dataInfo[keyName] === "object") return

                                                                    return (
                                                                        <p key={i} className='text-black dark:!text-[#919899]'>{dataInfo[keyName]}</p>
                                                                    )
                                                                })
                                                            }

                                                        </div>


                                                    </div>

                                                    <div className="flex text-black dark:!text-[#919899]">
                                                        <i className="text-lg rounded-[20]">-</i> Delete
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            {/* payment method list here! end */}

                        {
                            (userpaymentods.length === 0) &&  <div className="grid place-content-center w-full p-4 mt-[50px]">
                            <div className="inline-grid">
                                <Image
                                    src={"/assets/icons/noData.svg"}
                                    alt="No Data"
                                    className=""
                                    height={80}
                                    width={80}
                                />
                                <h4 className="info-14  md:p-0 text-disable-clr dark:text-white text-center">
                                    No Data
                                </h4>
                            </div>
                        </div>
                        }
                           

                            {/* Other settings */}
                            <div className="mt-[30px]">
                                <p className="info-14-16 mb-[20px]">Other settings</p>
                                <div className="border border-grey p-[20px] rounded-lg flex md:flex-row flex-col items-center justify-between">
                                    <div className="flex items-center gap-[18px] w-full">
                                        <div className="min-w-[48px] min-h-[48px] rounded-full bg-[#1da2b41a] flex">
                                            <span className="m-auto text-primary dark:text-primary info-16-22">$</span>
                                        </div>
                                        <div>
                                            <p className="info-16 !text-black hover:!text-black dark:!text-white">Fiat preferred</p>
                                            <p className="info-12 ">The default fiat when trading or binding the payment method, you can set it to the commonly used fiat</p>
                                        </div>
                                    </div>
                                    <div className="relative max-w-full md:mt-[0] mt-[20px] md:max-w-[180px] w-full">
                                        <div
                                            className="flex cursor-pointer justify-between w-full rounded p-2"
                                            onClick={() => {
                                                setDropDown(!dropDown);
                                                setRotate(!rotate);
                                            }}
                                        >
                                            <div className="flex gap-3 ">
                                                <Image
                                                    className="self-start rounded-full"
                                                    height={24}
                                                    width={24}
                                                    alt="Coin Image"
                                                    src={`${coinImg}`}
                                                ></Image>
                                                <p className="info-14-16 font-bold">{coin}</p>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                className={`mt-[2px] ${rotate && "rotate-90"
                                                    } duration-300 w-6 h-6`}
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke={mode === "dark" ? "white" : "currentColor"}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </div>
                                        {dropDown != false && (
                                            <SearchDropdown
                                                setShowDropdown={setDropDown}
                                                selectCoin={selectCoin}
                                                coin={true}
                                            />
                                        )}
                                    </div>
                                </div>

                            </div>
                            {/* Message notificatoin */}
                            <div className="mt-[30px]">
                                <p className="info-14-16 mb-[20px]">Message notification</p>
                                <div className="border border-grey p-[20px] rounded-lg flex items-center justify-between">
                                    <div className="flex items-center gap-[18px]">
                                        <div className="w-[32px] h-[32px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                                <path stroke={mode === "dark" ? "white" : "currentColor"} d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="info-16 !text-black hover:!text-black dark:!text-white">Notification</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex  items-center cursor-pointer duration-500">
                                        <input type="checkbox" className="sr-only peer" value="" />
                                        <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
                                    </label>
                                </div>
                            </div>

                        </div>
                        }
                        {active === 3 && <div className="max-w-[100%-200px] w-full md:border-l border-grey md:pl-[20px]">
                            {/* about */}


                            <div className=''>
                                <p className='section-secondary-heading font-noto text-center'>Sell Ads</p>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="relative flex gap-2 justify-between max-w-full md:mt-[0] mt-[20px] md:max-w-[180px] w-full">

                                        <Image
                                            className=" self-center max-w-[30px] w-full rounded-full"
                                            height={40}
                                            width={40}
                                            alt="Coin Image"
                                            src={`${coinImg}`}
                                        ></Image>


                                        <div
                                            className="flex cursor-pointer justify-between w-full rounded p-2"
                                            onClick={() => {
                                                setDropDown(!dropDown);
                                                setRotate(!rotate);
                                            }}
                                        >
                                            <div className='w-max'>
                                                <div className="flex gap-2 ">
                                                    <p className="info-14-16 font-bold">{coin}</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        className={`mt-[2px] ${rotate && "rotate-90"
                                                            } duration-300 w-3 h-3 self-center`}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke={mode === "dark" ? "white" : "currentColor"}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <span className='info-14'>Reference Price $1.08</span>
                                                </div>
                                            </div>

                                        </div>

                                        {dropDown != false && (
                                            <SearchDropdown
                                                setShowDropdown={setDropDown}
                                                selectCoin={selectCoin}
                                                coin={true}
                                            />
                                        )}
                                    </div>
                                    <div className="!text-red-700 info-12">
                                        {errors.usertoken?.message}
                                    </div>
                                    <div>
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Trading Price</h4>
                                            <div className="border-b  info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                                                <div className="flex  mt-4 items-end ">
                                                    <input
                                                        type="number"
                                                        step='0.0001'
                                                        className="caret-primary w-full bg-transparent  outline-none"
                                                        placeholder='Enter Trading Price' {...register('amount')}
                                                    />
                                                    <span className='info-14'>USD</span>
                                                </div>
                                            </div>
                                            <span className='info-12'> Price Limit  </span>
                                            <div className="!text-red-700 info-12">
                                                {errors.amount?.message}
                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Trading Quantity</h4>
                                            <div className="border-b info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                                                <div className="flex  mt-4 items-end ">
                                                    <input
                                                        type="number"
                                                        step='0.0001'
                                                        className="caret-primary w-full bg-transparent  outline-none"
                                                        placeholder='Enter Trading Quantity' {...register('quantity')}
                                                        onChange={(e) => {
                                                            if (e.target.value > tokenBalance) {
                                                                setBalanceMessage(1)
                                                            }
                                                            else {
                                                                setBalanceMessage(false)
                                                                setValue('quantity', e.target.value)
                                                            }
                                                        }}
                                                    />
                                                    <span className='info-14'>{coin}</span>
                                                </div>
                                            </div>
                                            <span className='info-12'>{tokenBalance} {coin} </span>
                                            <div className="!text-red-700 info-12">
                                                {errors.quantity?.message}
                                            </div>
                                            {balanceMessage === 1 && <div className="!text-red-700 info-12">
                                                You have unsufficient balance
                                            </div>}
                                        </div>
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Single Order Limit</h4>
                                            <div className=' flex justify-between gap-8 md:gap-20'>
                                                <div className="info-14 w-full hover:!text-grey dark:hover:!text-white dark:text-white">
                                                    <div className="flex border-b   mt-4 items-end ">
                                                        <input
                                                            type="number"
                                                            step='0.0001'
                                                            className="caret-primary w-full bg-transparent  outline-none"
                                                            placeholder='Enter Min Limit' {...register('min_limit')}
                                                        // onChange={(e) => {

                                                        //     setValue('min_limit', e.target.value)
                                                        //     setMinLimit(e.target.value)
                                                        // }}
                                                        />
                                                        <span className='info-14'>USD</span>
                                                    </div>
                                                    <div className="!text-red-700 info-12">
                                                        {errors.min_limit?.message}
                                                    </div>
                                                    {/* {balanceMessage === 2 && <div className="!text-red-700 info-12">
                                                        Amount must be less than maximum value
                                                    </div>} */}
                                                </div>

                                                <div className='border-b w-10 h-1 mt-5 self-center'>
                                                </div>
                                                <div className="info-14 w-full hover:!text-grey dark:hover:!text-white dark:text-white">
                                                    <div className="flex border-b  mt-4 items-end ">
                                                        <input
                                                            type="number"
                                                            step='0.0001'
                                                            className="caret-primary w-full bg-transparent  outline-none"
                                                            placeholder='Enter max limit' {...register('max_limit')}
                                                        // onChange={(e) => {
                                                        //     if (e.target.value <= minLimit) {
                                                        //         setBalanceMessage(3)
                                                        //     }
                                                        //     else {
                                                        //         setValue('max_limit', e.target.value)
                                                        //         setMaxLimit(e.target.value)
                                                        //     }
                                                        // }}
                                                        />
                                                        <span className='info-14'>USD</span>
                                                    </div>
                                                    <div className="!text-red-700 info-12">
                                                        {errors.max_limit?.message}
                                                    </div>
                                                    {/* {balanceMessage === 3 && <div className="!text-red-700 info-12">
                                                        Amount must be greater than mimimum value
                                                    </div>} */}
                                                </div>

                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Payment Deadline</h4>
                                            <div className="border-b info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                                                <SelectMenu selectMenu={pm_duration} clear={clear} selectNetwork={selectedNetwork} />
                                                {/* <div className="flex  mt-4 items-end ">
                                                <input
                                                    type="number"
                                                    className="caret-primary w-full bg-transparent  outline-none"
                                                    placeholder='Enter Trading Price'
                                                />
                                            </div> */}
                                            </div>
                                            <div className="!text-red-700 info-12">
                                                {errors.deadline?.message}
                                            </div>
                                        </div>
                                        {/* payment methods */}
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Payment Methods</h4>
                                            <div className="border-b info-14 hover:!text-grey dark:hover:!text-white dark:text-white" >
                                                {/* <SelectMenu selectMenu={pm_method} selectMethod={selectedMethod} /> */}
                                                <p className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white" onClick={()=>{setClick(true); setPaymentMethodModal(true) }}>Please select an option</p>
                                                {
                                                    paymentMethodModal && 
                                                    <PaymentMethodModal setPaymentMethodModal={setPaymentMethodModal} />
                                                }
                                            </div>
                                            <div className="!text-red-700 info-12">
                                                {errors.method?.message}
                                            </div>
                                        </div>
                                        {/* payment methods */} 
                                        
                                        <div className='mt-8'>
                                            <h4 className="info-14-16">Notes (Optional)</h4>
                                            <div className="border-b info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                                                <div className="flex  mt-4 items-end ">
                                                    <input
                                                        type="text"
                                                        className="caret-primary w-full bg-transparent  outline-none"
                                                        placeholder='Enter Trading Price' {...register("notes")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mb-5 inline-block mt-[8px]">
                                            <input id="checkbox" type="checkbox" className="hidden agree_cta" {...register('checked')} />
                                            <label htmlFor="checkbox" className="relative info-14 hover:!text-grey pl-[25px] after:absolute after:top-[2px] after:left-0 after:border after:border-grey after:w-[16px] after:h-[16px] cursor-pointer">I hereby acknowledge and agree to this  <Link href="#" className="text-primary">Trading Rules</Link></label>
                                        </div>
                                        <div className="!text-red-700 info-12">
                                            {errors.checked?.message}
                                        </div>
                                        <button type="submit" className={`relative cta mt-5  w-full  `}>
                                            <span>Post</span>
                                            {/* spinner */}
                                            <div className="hidden w-8 h-8 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent absolute top-[50%] left-[50%] mt-[-16px] ml-[-15px] z-10"></div>
                                            {/* spinner */}
                                        </button>

                                    </div>
                                </form>
                            </div>


                        </div>}
                        {active === 4 && <div className="max-w-[100%-200px] w-full md:border-l border-grey md:pl-[20px]">
                            {/* about */}


                            <AdTable session={session}/>


                        </div>
                        }
                        <VerificationPopup popupData={{ popup, showPopup }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default P2PManagement;