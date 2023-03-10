import React, { useEffect, useState } from 'react'
import SearchDropdown from '../snippets/search-dropdown'
import { useRouter } from "next/router";


const BuySell = ({sessions, setShow}) => {
    const [show, setShowSubTab] = useState(1)
    const [active, setActive] = useState(0)
    const [dropDown, setDropDown] = useState(false)
    const [currencyList, setCurrecnyList] = useState(false)
    const [coin, setCoin] = useState('USDT')
    const [coinImg, setCoinImg] = useState(false)
    const [convertPrice, setConvertPrice] = useState(0)
    const [coinName, setcoinName] = useState('INR');
    const [recieveCoinName, setRecieveCoinName] = useState('USDT');
    const [receivedAmount, setReceivedAmount] = useState(0.0)
    const [spendAmount, setSpendAmount]= useState(0.0)
    const router = useRouter()

    useEffect(() => {
        getInitTokenPrice();
    }, []);

    const getInitTokenPrice = async () => {
        let currentPrice = await fetch(
            `${process.env.NEXT_PUBLIC_BASEURL}/post/initalprice?receive=${recieveCoinName}&spend=${coinName}`,
            {
                method: 'GET',
            },
        ).then((response) => response.json())

        setConvertPrice(currentPrice.data[recieveCoinName][coinName])
    }

    const selectCoin = async (item) => {
        // console.log("==========item", item)
        setCoin(item.symbol)
        setCoinImg(item.image)
        setRecieveCoinName(item.symbol);

        if (item.tokenType === 'global') {
            let currentPrice = await fetch(
                `${process.env.NEXT_PUBLIC_BASEURL}/post/initalprice?receive=${item.symbol}&spend=${coinName}`,
                {
                    method: 'GET',
                },
            ).then((response) => response.json())

            setConvertPrice(currentPrice.data[item.symbol][coinName])
        }
        else {
            let currentPrice = await fetch(
                `${process.env.NEXT_PUBLIC_BASEURL}/post/initalprice?receive=USDT&spend=INR`,
                {
                    method: 'GET',
                },
            ).then((response) => response.json());

            let price = parseFloat(item.price) * parseFloat(currentPrice.data['USDT']['INR'])

            setConvertPrice(price)
        }

    }

    const calculateReceiveamount = (e) => {
        let amount = (1 / convertPrice) * e.target.value;
        if(show === 2){
            amount = (convertPrice) * e.target.value;
        }
        setSpendAmount(e.target.value);
        setReceivedAmount(amount)
    }

    const placeOrder = (event) => {
        event.preventDefault();
        if(sessions.user === undefined){
            router.push('/login')
        }
        else{
            router.push(`/p2p-trade/trade?token=${coin}&amount=${spendAmount}`)
        }
    }

    return (
        <section className='dark:bg-black-v-3 px-0 py-0 md:py-20'>
            <div className='container place-items-start grid grid-cols gird lg:grid-cols-2 justify-between gap-11'>
                <div className='order-last lg:order-first'>
                    <h1 className='hero-heading'>Buy Crypto In One Click</h1>
                    {show === 1 &&
                        <ul className='mt-12 list-decimal info-14-20 border border-border-clr rounded-lg p-5 lg:border-none'>
                            <li className='mb-5 pb-4  pl-3 ml-4'>
                                <p className='info-14-20'> Select a fiat and cryptocurrency to create an order</p>
                                <p className='pt-1 info-14'>We support 40+ fiat currencies and 100+ cryptocurrencies</p>
                            </li>
                            <li className='mb-5 pb-4  pl-3 ml-4'>
                                <p className='info-14-20'> Choose your preferred payment method</p>
                                <p className='pt-1 info-14'>We support 70+ payment methods including Mastercard, Visa, SEPA, SWIFT, Fast Payment Poli and many other local payment methods</p>
                            </li>
                            <li className='mb-5 pb-4  pl-3 ml-4'>
                                <p className='info-14-20'> Make your payment and start enjoying the BLC-Exchange ecosystem</p>
                                <p className=' pt-1 info-14'>The BLC-Exchange ecosystem supports a wide range of cryptocurrency products and services, including spot trading, futures trading, a token launchpad, and much more!</p>
                            </li>
                        </ul>
                    }
                    {show === 2 &&
                        <ul className='mt-12 list-decimal info-14-20'>
                            <li className='mb-5 pb-4 pl-3 ml-4'>
                                <p className='info-14-20'>Create an order</p>
                                <p className='pt-1 info-14'>Your cryptocurrency assets will be hosted by BLC-Exchange P2P after the order is created</p>
                            </li>
                            <li className='mb-5 pb-4  pl-3 ml-4'>
                                <p className='info-14-20'>Awaiting payment from buyers</p>
                                <p className='pt-1 info-14'>The buyer will transfer money to you via the payment method in the transaction information</p>
                            </li>
                            <li className='mb-5 pb-4  pl-3 ml-4'>
                                <p className='info-14-20'> Release cryptocurrencies</p>
                                <p className=' pt-1 info-14'>After the buyer has marked the transfer as complete, please login to your receiving account to confirm receipt of payment before releasing the cryptocurrency</p>
                            </li>
                        </ul>
                    }
                </div>

                <div className='rounded-lg '>
                    <div className='bg-white  shadow-lg  dark:bg-black-v-3 shadow-[#e2e2e2] dark:shadow-[#000] rounded-lg max-w-full w-full mr-0 ml-auto w-full'>
                        <div className='flex items-center rounded-lg dark:bg-black-v-3 bg-white'>
                            <button type='button' className={`w-full info-14-20 rounded-lg  py-5 ${show === 1 ? "bg-white dark:bg-black-v-3" : "bg-[#f9f9f9] dark:bg-black-v-5"}`} onClick={() => { setShowSubTab(1) ; setReceivedAmount(0) }}>Buy</button>
                            <button type='button' className={`w-full info-14-20 rounded-lg  py-5 ${show === 2 ? "bg-white dark:bg-black-v-3" : "bg-[#f9f9f9] dark:bg-black-v-5"}`} onClick={() => { setShowSubTab(2) ; setReceivedAmount(0) }}>Sell</button>
                        </div>


                        <form className='md:px-7 px-[12px] pb-3' onSubmit={placeOrder}>
                            <div className={`mt-8 border-2  rounded-lg px-4 relative flex justify-between items-center ${active === 1 ? '!border-primary' : 'border-[#e4e4e4]'} `} onClick={() => { setActive(1) }}>
                                <div className='pt-3 flex flex-col md:max-w-[70%] max-w-[66%] w-full'>
                                    <label className='info-14 text-black'>{show === 1 ? 'I want to pay' : 'I want to sell'} </label>
                                    <input type='text' required placeholder={show === 1 ? '10.000-500.000' : 'Enter Amount'} onChange={(e) => { calculateReceiveamount(e) }} className='dark:bg-black-v-3 outline-none py-3 info-14-20 '></input>
                                </div>
                                {show === 1 ?
                                    <div>
                                        <div className='flex cursor-pointer'>
                                            <p className='info-14-16 font-bold'>INR</p>
                                            {/* <img src='/assets/icons/down.svg'></img> */}
                                        </div>
                                        {/* {
                                            currencyList != false &&
                                            <SearchDropdown setCurrencyList={setCurrecnyList} currency={true} />

                                        } */}
                                    </div>

                                    :
                                    <div>
                                        <div className='flex cursor-pointer ' onClick={() => { setDropDown(!dropDown) }}>
                                            <div className="flex gap-3 ">
                                                <img
                                                    className="self-start rounded-full"
                                                    height={24}
                                                    width={24}
                                                    alt="Coin Image"
                                                    src={`${coinImg}`}
                                                ></img>
                                                <p className="info-14-16 font-bold">{coin}</p>
                                            </div>
                                            <img src='/assets/icons/down.svg' ></img>
                                        </div>
                                        {
                                            dropDown != false &&
                                            <SearchDropdown setShowDropdown={setDropDown} coin={true} selectCoin={selectCoin} />
                                        }
                                    </div>
                                }
                            </div>
                            <div className={`flex justify-between items-center ${show === 2 ? 'block' : 'hidden'}`}>
                                <p className='info-14'>Available to sell: 0 USDT</p>
                                <a className='info-14 text-primary cursor-pointer'>Transfer Now</a>
                            </div>
                            <div className={`mt-8 border-2  rounded-lg px-4 flex justify-between items-center relative ${active === 2 ? '!border-primary' : 'border-[#e4e4e4]'} `} onClick={() => { setActive(2) }}>
                                <div className='pt-3 flex flex-col grow max-w-[66%] md:max-w-[70%] w-full '>
                                    <label className='info-14 text-black'>I will get ≈</label>
                                    <input type='text' value={receivedAmount} placeholder={show === 2 ? '10.000-500.000' : 'Enter Amount'} className='dark:bg-black-v-3 outline-none py-3 info-14-20 '></input>
                                </div>
                                {show === 1 ?
                                    <div>
                                        <div className='flex cursor-pointer ' onClick={() => { setDropDown(!dropDown) }}>
                                            <div className="flex gap-3 ">
                                                <img
                                                    className="self-start rounded-full"
                                                    height={24}
                                                    width={24}
                                                    alt="Coin Image"
                                                    src={`${coinImg}`}
                                                ></img>
                                                <p className="info-14-16 font-bold">{coin}</p>
                                            </div>
                                            <img src='/assets/icons/down.svg' ></img>
                                        </div>
                                        {
                                            dropDown != false &&
                                            <SearchDropdown setShowDropdown={setDropDown} coin={true} selectCoin={selectCoin} />
                                        }
                                    </div>
                                    :
                                    <div>
                                        <div className='flex cursor-pointer'>
                                            <p className='info-14-16 font-bold'>INR</p>
                                            {/* <img src='/assets/icons/down.svg'></img> */}
                                        </div>
                                        {
                                            currencyList != false &&
                                            <SearchDropdown setCurrencyList={setCurrecnyList} currency={true} />
                                        }
                                    </div>

                                }
                            </div>
                            <div className='mt-12 flex flex-col'>
                                <label className='info-14 p-2'>Reference price : {convertPrice} INR</label>
                                <button className={` indo-14 text-white border-2  rounded-lg py-3 px-5 ${show === 1 ? 'bg-primary border-primary' : 'bg-[#f1493f] border-[#f1493f]'}`}>Next</button>
                                <p className='info-14 mt-6'>No withdrawals or selling is allowed for 48 hours after crypto purchases. During this period, transfer and trading will not be affected.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BuySell
