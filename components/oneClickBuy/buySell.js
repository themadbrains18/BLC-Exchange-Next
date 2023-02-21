import React, { useState } from 'react'
import SearchDropdown from '../snippets/search-dropdown'

const BuySell = () => {
    const [show, setShow] = useState(1)
    const [active, setActive] = useState(0)
    const [dropDown, setDropDown] = useState(false)
    const [currencyList, setCurrecnyList] = useState(false)
    const [coin, setCoin] = useState(false)
    const [coinImg, setCoinImg] = useState(false)

    const selectCoin = async (item) => {
        setCoin(item.name)
        setCoinImg(item.image)
    }

    return (
        <section className='dark:bg-black-v-3 px-10 py-10 md:py-20'>
            <div className='container place-items-center grid grid-cols gird lg:grid-cols-2 justify-between gap-11'>
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
                    <div className='bg-white  shadow-lg  dark:bg-black-v-3 shadow-[#e2e2e2] dark:shadow-[#000] rounded-lg max-w-md mr-0 ml-auto w-full'>
                        <div className='flex items-center rounded-lg dark:bg-black-v-3 bg-white'>
                            <button className={`w-full info-14-20 rounded-lg  py-5 ${show === 1 ? "bg-white dark:bg-black-v-3" : "bg-[#f9f9f9] dark:bg-black-v-5"}`} onClick={() => { setShow(1) }}>Buy</button>
                            <button className={`w-full info-14-20 rounded-lg  py-5 ${show === 2 ? "bg-white dark:bg-black-v-3" : "bg-[#f9f9f9] dark:bg-black-v-5"}`} onClick={() => { setShow(2) }}>Sell</button>
                        </div>


                        <form className='px-7 pb-3'>
                            <div className={`mt-8 border-2  rounded-lg px-4 relative flex justify-between items-center ${active === 1 ? '!border-primary' : 'border-[#e4e4e4]'} `} onClick={() => { setActive(1) }}>
                                <div className='pt-3 flex flex-col'>
                                    <label className='info-14 text-black'>{show === 1 ? 'I want to pay' : 'I want to sell'} </label>
                                    <input type='text' placeholder={show === 1 ? '10.000-500.000' : 'Enter Amount'} className='dark:bg-black-v-3 outline-none py-3 info-14-20 '></input>
                                </div>
                                {show === 1 ?
                                    <div>
                                        <div className='flex cursor-pointer' onClick={() => { setCurrecnyList(!currencyList) }}>
                                            <p className='info-14-16 font-bold'>USD</p>
                                            <img src='/assets/icons/down.svg'></img>
                                        </div>
                                        {
                                            currencyList != false &&
                                            <SearchDropdown setCurrencyList={setCurrecnyList} currency={true} />

                                        }
                                    </div>

                                    :
                                    <div>
                                        <div className='flex cursor-pointer ' onClick={() => { setDropDown(!dropDown) }}>
                                            <p className='info-14-16 font-bold'>{coin}</p>
                                            <img src='/assets/icons/down.svg' ></img>
                                        </div>
                                        {
                                             dropDown != false &&
                                            <SearchDropdown setShowDropdown={setDropDown} coin={true} selectCoin={selectCoin}/>
                                        }
                                    </div>
                                }
                            </div>
                            <div className={`flex justify-between items-center ${show === 2 ? 'block' : 'hidden'}`}>
                                <p className='info-14'>Available to sell: 0 USDT</p>
                                <a className='info-14 text-primary cursor-pointer'>Transfer Now</a>
                            </div>
                            <div className={`mt-8 border-2  rounded-lg px-4 flex justify-between items-center relative ${active === 2 ? '!border-primary' : 'border-[#e4e4e4]'} `} onClick={() => { setActive(2) }}>
                                <div className='pt-3 flex flex-col'>
                                    <label className='info-14 text-black'>I will get ≈</label>
                                    <input type='text' placeholder={show === 2 ? '10.000-500.000' : 'Enter Amount'} className='dark:bg-black-v-3 outline-none py-3 info-14-20 '></input>
                                </div>
                                {show === 1 ?
                                    <div>
                                        <div className='flex cursor-pointer ' onClick={() => { setDropDown(!dropDown) }}>
                                            <p className='info-14-16 font-bold'>{coin}</p>
                                            <img src='/assets/icons/down.svg' ></img>
                                        </div>
                                        {
                                           dropDown != false &&
                                            <SearchDropdown setShowDropdown={setDropDown} coin={true} selectCoin={selectCoin} />
                                        }
                                    </div>
                                    :
                                    <div>
                                        <div className='flex cursor-pointer' onClick={() => { setCurrecnyList(!currencyList) }}>
                                            <p className='info-14-16 font-bold'>USD</p>
                                            <img src='/assets/icons/down.svg'></img>
                                        </div>
                                        {
                                            currencyList != false &&
                                            <SearchDropdown setCurrencyList={setCurrecnyList} currency={true} />
                                        }
                                    </div>

                                }
                            </div>
                            <div className='mt-12 flex flex-col'>
                                <label className='info-14 p-2'>Reference price : 26660.51 USD</label>
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
