import { useState, useContext, useEffect } from "react";
import Context from "../contexts/context";
import SearchDropdown from "components/snippets/search-dropdown";
import SelectMenu from "components/snippets/selectMenu";
import Image from "next/image";
import PaymentMethods from '../../public/assets/images/payment-methods.png'
import Paymentmodal from "../payments/payment-modal";

import { useRouter } from "next/router";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const P2PBuySell = ({ paymentods, session, userpaymentods }) => {

  const router = useRouter()
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const [popup, showPopup] = useState(false);
  const [popup2, showPopup2] = useState(false);
  const [fundTransfer, setFundTransfer] = useState(false);
  const [paymentPopup, setPaymentPopup] = useState(false);
  const [swap, setSwap] = useState(false);

  const [dropDown2, setDropDown2] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const { mode, setClick } = useContext(Context);
  const [coinImg, setCoinImg] = useState("https://bitlivecoinnetwork.com/images/logo.png");
  const [buy, setBuy] = useState(1);
  const [coin, setCoin] = useState(router.query.token !== undefined ? router.query.token : "Select Coin");
  let [bankList, setBankList] = useState();
  let [bankImg, setBankImg] = useState("bcp.png");
  let [bankname, setBankName] = useState("Money");
  let coinDataList = ["USD", "BGB", "BTC", "EUR", "TRY", "JPY", "ARS"];
  let coinDataList2 = ["Wise"];
  let coinDataList3 = ["Cross Margin", "Isolated Margin", "p2p", "Spot", "Coin-M", "USDC-M", "USDT-M"];

  let [p2pTradeData, setP2PTradeData] = useState([]);
  let [tradelist, setTradeList] = useState([]);
  let [selectedTrade, setSelectedTrade] = useState({});
  const [firstCurrency, setfirstCurrency] = useState(0);
  const [secondCurrency, setsecondCurrency] = useState(0);
  const [clear, setClear] = useState(false);
  const [pmethodArray, setPMethodArray] = useState([]);
  const [disabled, setDisabled] = useState(false)



  const schema = yup
    .object()
    .shape({
      method: yup.string().required('Please select at least one payment method')
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

  useEffect(() => {
    getP2PTradeAds()
  }, []);

  const getP2PTradeAds = async () => {
    let posts = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/post/p2ptrade`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())

    console.log(posts.data, '=============p2p trade posts')
    if (posts.data) {

      if (router.query.token !== undefined) {
        let record = posts.data.filter((item) => {
          return item.symbol === router.query.token
        })
        setTradeList(record);
        setP2PTradeData(posts.data);
      }
      else {
        setTradeList(posts.data);
        setP2PTradeData(posts.data);
      }

    }

  }

  const selectCoin = async (item) => {
    setCoin(item.symbol);
    setCoinImg(item.image);
    setRotate(false);
    let record = p2pTradeData.filter((e) => {
      return e.symbol === item.symbol
    })
    setTradeList(record);
  };

  const firstCalcu = (val) => {
    var data = val / selectedTrade?.price;
    setfirstCurrency(val);
    setsecondCurrency(data)

  }

  const secCalcu = (val) => {
    var data = val * selectedTrade?.price;
    setfirstCurrency(data);
    setsecondCurrency(val)
  }

  const resetFilter = () => {
    setCoin("Select Coin");
    setCoinImg("");
    setTradeList(p2pTradeData);
  }

  const selectNetwork = async (item) => {
    setValue('method', item)
    clearErrors("method")
  }
  const selectBank = async (item) => {
    setBankImg(item.image)
    setBankName(item.name)
    clearErrors("method")
  }

  const handleSubmitForm = async () => {
    setDisabled(true);

    let p_method = (selectedTrade.p_method).filter((item) => {
      return item.pm_name === getValues('method');
    });

    let formData = {
      "post_id": selectedTrade.id,
      "sell_user_id": selectedTrade.user_id,
      "buy_user_id": session.id,
      "token_id": selectedTrade?.token,
      "price": selectedTrade?.price,
      "quantity" : secondCurrency,
      "spend_amount": firstCurrency,
      "receive_amount": secondCurrency,
      "spend_currency": 'INR',
      "receive_currency": selectedTrade?.symbol,
      "p_method": p_method,
      "type": 'buy'
    }

    console.log(formData, '===========form data');

    let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/order/create`, {
      method: "POST",
      body: JSON.stringify(formData)
    }).then(response => response.json())

    if (result.data.status === 200 && result.data != undefined) {
      toast.success(result.data.message, {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
      setClick(false);
      localStorage.setItem("orderid", result.data.data.id);
      router.push('/p2p-trade/order/' + result.data.data.id)
    }
    else {
      toast.error(result.data.message, {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
    }

  }

  return (
    <section className="md:py-[80px] py-[0px] dark:bg-black-v-3 z-[1]">
      <ToastContainer></ToastContainer>
      <div className="container">
        <div className="flex justify-between md:hidden ml-[auto] mb-[20px]" >
          <div className="flex items-center gap-[15px] bg-[#cccccc7d] dark:bg-[#3d3636] p-[5px] rounded flex md:hidden">
            <button className={`cta w-full dark:text-white ${buy === 1 ? "" : "text-black bg-transparent"}`} onClick={() => { setBuy(1) }}>Buy</button>
            <button className={`cta w-full dark:text-white ${buy === 2 ? "" : "text-black bg-transparent"}`} onClick={() => { setBuy(2) }}>Sell</button>
          </div>
          <svg onClick={() => { setShowDropdown(true) }} className="max-w-[32px] w-full " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.68 210.68" style={{ enableBackground: 'new 0 0 210.68 210.68' }} xmlSpace="preserve">
            <path fill={mode === "dark" ? "white" : "currentcolor"} d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0
                    C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23
                    c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863
                    c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767
                    C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926
                    c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62
                    c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486
                    c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938
                    C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z" />
          </svg>
        </div>

        {/* p2p trading filter secton */}
        <div className={`${showDropdown === true ? 'block' : 'hidden md:flex'} fixed left-0 bg-[#fff] w-full min-h-screen h-full overflow-y-auto  top-[0px] z-[99] p-[15px] md:p-0 md:overflow-visible	 md:bg-transparent md:min-h-[0] md:z-[1] md:static flex flex-col	 md:flex-row  items-center gap-[15px] flex-wrap	xl:flex-nowrap !pb-[25px] border-b border-grey`}>
          <svg onClick={() => { setShowDropdown(false) }} className="md:hidden max-w-[24px] w-full ml-[auto]" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
            <path fill={mode === "dark" ? "white" : "currentcolor"} style={{ fill: '#231F20' }} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                    c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                    l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                    C61.42,57.647,61.42,54.687,59.595,52.861z" />
          </svg>
          {/* buy sell cta's */}
          <div className="flex items-center gap-[15px] bg-[#cccccc7d] dark:bg-[#3d3636] p-[5px] w-full rounded hidden md:flex">
            <button className={`cta w-full dark:text-white${buy === 1 ? "" : "text-black bg-transparent"}`} onClick={() => { setBuy(1) }}>Buy</button>
            <button className={`cta w-full dark:text-white ${buy === 2 ? "" : "text-black bg-transparent"}`} onClick={() => { setBuy(2) }}>Sell</button>
          </div>
          {/* Prime Merchants */}
          <div className="flex items-center gap-[15px] max-w-full md:max-w-[180px] w-full">
            <label className="info-12  dark:!text-black md:dark:!text-white">Prime Merchants </label>
            <label className="relative inline-flex  items-center cursor-pointer duration-500">
              <input type="checkbox" className="sr-only peer" value="" />
              <div className="duration-500 w-9 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary border-gray-600" ></div>
            </label>
          </div>
          {/* Search dropdown */}
          <div className="border max-w-full md:max-w-[190px] w-full rounded-md border-border-clr">
            <div className="relative">
              <div
                className="flex cursor-pointer justify-between w-full rounded p-2"
                onClick={() => {
                  setDropDown(!dropDown);
                  setRotate(!rotate);
                }}
              >
                <div className="flex gap-3 ">
                  <Image
                    className="self-start"
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
                  coin={true}
                  selectCoin={selectCoin}
                />
              )}
            </div>
          </div>

          {/* Search dropdown wuthout Image */}
          <div className="max-w-full w-full border rounded-md border-border-clr relative flex items-center">
            <div className="max-w-full md:max-w-[calc(100%-80px)] w-full">
              <input placeholder="Enter amount" className="h-[43px] px-[10px] max-w-full outline-none rounded-md dark:bg-transparent bg-transparent dark:text-white" type="number" />
            </div>
            <div className="max-w-full md:max-w-[80px] w-full" >
              <p className='info-14-16 font-bold'>INR</p>
              {/* <SelectMenu selectMenu={coinDataList} /> */}
            </div>
          </div>

          {/* Search dropdown */}
          <div className="border max-w-full md:max-w-[230px] w-full rounded-md border-border-clr">
            <div className="relative">
              <div
                className="flex cursor-pointer justify-between w-full rounded p-2"
                onClick={() => {
                  setDropDown2(!dropDown2);
                  setRotate2(!rotate2);
                }}
              >
                <div className="flex gap-3 ">
                  <Image
                    className="self-start"
                    height={24}
                    width={24}
                    alt="Coin Image"
                    src={`/assets/images/${bankImg}`}
                  ></Image>
                  <p className="info-14-16 font-bold">{bankname}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className={`mt-[2px] ${rotate2 && "rotate-90"
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
              {dropDown2 != false && (
                <SearchDropdown
                  setShowDropdown={setDropDown2}
                  selectBank={selectBank}
                  bank={true}

                />
              )}

            </div>
          </div>

          {/* price alert */}
          <div className="max-w-full md:max-w-[100px] w-full">
            <p className="cursor-pointer info-14 !text-primary" onClick={() => resetFilter()}>Refresh</p>
          </div>
          <div className="flex items-center gap-[15px] bg-[#cccccc7d] dark:bg-[#3d3636] p-[5px] rounded w-full flex md:hidden">
            <button className={`cta w-full`}>Reset</button>
            <button className={`cta w-full`}>Confirm</button>
          </div>
        </div>

        {/* Buy table content start for desktop */}
        {
          buy === 1 &&
          <>
            <div className="hidden lg:block">
              <table width="100%" className="mt-[24px]">
                <thead>
                  <tr>
                    <th><p className="text-start  info-12 ">Advertiser (Completed trades | Average time)</p></th>
                    <th><p className="text-start  info-12 ">Price</p></th>
                    <th><p className="text-start  info-12 ">Amount/Limit</p></th>
                    <th><p className="text-start  info-12 ">Payment methods</p></th>
                    <th><p className="text-start  info-12 ">Actions</p></th>
                  </tr>
                </thead>
                <tbody>
                  {tradelist && tradelist.length > 0 && tradelist.map((item) => {
                    return <tr className="border-b border-grey">
                      <td>
                        {/* about user */}
                        <div className="my-[24px] flex items-center gap-[10px] grow-[1.6]">
                          <div className="w-[48px] h-[48px] rounded-full bg-[#e8f6f7] flex">
                            <span className="m-auto text-primary dark:text-primary info-14-16">{item && item?.name !== undefined && item?.name.substring(0, 1)}</span>
                          </div>
                          <div className="">
                            <p className="info-14 !text-black hover:!text-black dark:!text-white">{item.name + ' ' + item.lname}</p>
                            <p className="info-12">Total trades 66 | Completion Rate 94.00%</p>
                          </div>
                        </div>
                      </td>

                      <td>
                        {/* price */}
                        <div className="my-[24px] grow-[1]">
                          <p className="info-14-16 !font-bold">{item.price} INR</p>
                        </div>
                      </td>

                      <td>
                        {/* amount/limits */}
                        <div className="my-[24px] grow-[1.4]">
                          <div className="flex items-center gap-[12px]">
                            <p className="info-12">Amount</p>
                            <p className="info-12 !text-black dark:!text-white">{item.quantity} {item.symbol}</p>
                          </div>
                          <div className="flex items-center gap-[12px]">
                            <p className="info-12 min-w-[45px]">Limit</p>
                            <p className="info-12 !text-black dark:!text-white">{item.min_limit}-{item.max_limit} INR</p>
                          </div>
                        </div>
                      </td>

                      <td>
                        {/* payment methods */}
                        <div className="my-[24px] flex items-center gap-[14px] grow-[1]">
                          <Image src={PaymentMethods} alt="" width={24} height={24} />
                          <Image src={PaymentMethods} alt="" width={24} height={24} />
                        </div>
                      </td>

                      <td>
                        {/* actions */}
                        <div className="my-[24px] grow-[0.6]">
                          <button className="cta min-w-[100px] w-full"
                            onClick={() => {
                              showPopup(true); setfirstCurrency(0);
                              setsecondCurrency(0); setClick(true); setClear(false);
                              setSelectedTrade(item);
                              let arr = [];
                              for (const p of item.p_method) {
                                arr.push(p.pm_name)
                              }
                              setPMethodArray(arr);

                            }}>Buy</button>
                        </div>
                      </td>
                    </tr>
                  })}

                </tbody>
              </table>
            </div>
            {/* Buy table content end For desktop */}

            {/* Buy table content end For mobile */}
            <div className="lg:hidden">
              {tradelist && tradelist.length > 0 && tradelist.map((item) => {
                return <div className="border-b border-grey py-[15px]">
                  {/* about user */}
                  <div className="mb-[10px] flex items-center gap-[10px]">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#e8f6f7] flex">
                      <span className="m-auto text-primary info-12 dark:text-primary">F</span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <p className="info-14 !text-black hover:!text-black dark:!text-white">{item.name + ' ' + item.lname}</p>
                      <p className="info-12">Total trades 66 | Completion Rate 94.00%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    {/* amount/limits */}
                    <div className="mb-[10px]">
                      <div className="flex items-center gap-[12px]">
                        <p className="info-12">Amount</p>
                        <p className="info-12 !text-black dark:!text-white">{item.quantity} {item.symbol}</p>
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <p className="info-12 min-w-[45px]">Limit</p>
                        <p className="info-12 !text-black dark:!text-white">{item.min_limit}-{item.max_limit} INR</p>
                      </div>
                    </div>
                    {/* price */}
                    <div className="mb-[10px]">
                      <p className="info-14-16 !font-bold">{item.price} INR</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    {/* payment methods */}
                    <div className="flex items-center gap-[14px]">
                      <Image src={PaymentMethods} alt="" width={24} height={24} />
                      <Image src={PaymentMethods} alt="" width={24} height={24} />
                    </div>
                    {/* actions */}
                    <div>
                      <button className="cta" onClick={() => { setClick(true); showPopup(true) }}>Buy</button>
                    </div>
                  </div>
                </div>
              })}

            </div>
          </>
        }

        {/* buy coin popup start */}
        {popup &&
          <div className={`${popup ? "top-[50%] opacity-1 visible" : "top-[45%] opacity-0 invisible"} z-[9] duration-300 flex max-w-full h-full lg:h-auto lg:max-w-[740px] w-full mx-auto fixed  left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden`}>
            <div className="max-w-[40%] hidden lg:block w-full p-[22px] bg-white dark:bg-hover-black dark:shadow-none shadow-md">
              {/* about user */}
              <div className="my-[24px] flex items-center gap-[10px] grow-[1.6]">
                <div className="min-w-[38px] min-h-[38px] rounded-full bg-[#e8f6f7] flex">
                  <span className="m-auto text-primary dark:text-primary info-14-16">{selectedTrade && selectedTrade?.name !== undefined && selectedTrade?.name.substring(0, 1)}</span>
                </div>
                <div className="">
                  <p className="info-14 !text-black hover:!text-black dark:!text-white">{selectedTrade.name + ' ' + selectedTrade.lname}</p>
                  <p className="info-12">26 Total orders | 5min Average release</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Price</p>
                <p className="info-14 !text-primary">{selectedTrade.price} INR</p>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Limit</p>
                <p className="info-14 dark:!text-white dark:hover:!text-white hover:!text-grey">{selectedTrade.min_limit}-{selectedTrade.max_limit} INR</p>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Amount</p>
                <p className="info-14 dark:!text-white dark:hover:!text-white hover:!text-grey"> {selectedTrade.quantity} {selectedTrade.symbol}</p>
              </div>
              <p className="info-14 dark:hover:!text-grey gap-[10px] hover:!text-grey flex items-center">
                <div className="max-w-[24px] w-full" >
                  <svg fill={mode === "light" ? "black" : "grey"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xmlSpace="preserve">
                    <path id="XMLID_89_" d="M43.3,73.8c-0.8,0-1.6-0.3-2.2-0.8c-1-0.8-1.5-2.1-1.2-3.4l4.9-25l-2.7,1.5c-1.7,0.9-3.8,0.4-4.8-1.3
                        c-0.9-1.7-0.4-3.8,1.3-4.8l9.3-5.3c1.2-0.7,2.7-0.6,3.8,0.2c1.1,0.8,1.6,2.2,1.4,3.5L48,64.4l4.2-1.8c1.8-0.8,3.8,0,4.6,1.8
                        c0.8,1.8,0,3.8-1.8,4.6l-10.3,4.5C44.3,73.7,43.8,73.8,43.3,73.8z M53.2,26c0.9-0.9,1.5-2.2,1.5-3.5c0-1.3-0.5-2.6-1.5-3.5
                        c-0.9-0.9-2.2-1.5-3.5-1.5c-1.3,0-2.6,0.5-3.5,1.5c-0.9,0.9-1.5,2.2-1.5,3.5c0,1.3,0.5,2.6,1.5,3.5c0.9,0.9,2.2,1.5,3.5,1.5
                        C51,27.5,52.3,27,53.2,26z M92,46C92,20.6,71.4,0,46,0S0,20.6,0,46s20.6,46,46,46S92,71.4,92,46z M84,46c0,21-17,38-38,38S8,67,8,46
                        S25,8,46,8S84,25,84,46z" />
                  </svg>
                </div>
                <span>Buyer needs to pay within {selectedTrade.payment_time}</span>
              </p>
              <ul className="h-[200px] overflow-y-scroll">
                <li className="mb-[10px]">
                  <p className="info-14 !text-[#fb8e0c]  hover:!text-[#fb8e0c]">*To protect your assets, please do not modify your registration link or conduct private transactions with merchants off the platform.</p>
                </li>
                <li className="mb-[10px]">
                  <p className="info-14 hover:!text-grey">1. During the transaction ,<span className="!text-[#fb8e0c]"> please do not include BTC/USDT/Bitget</span> or other similar information in the remarks</p>
                </li>
                <li className="mb-[10px]">
                  <p className="info-14 hover:!text-grey">2. Single payment exceeding 50,000 CNY should be made in batches</p>
                </li>
                <li>
                  <p className="info-14 hover:!text-grey">3. For security reasons, the withdrawal, internal transfer and selling of the purchased asset can not be performed until T+2, at which time the restriction will be automatially lifted. Trading is not affected during the restriction period</p>
                </li>
              </ul>
            </div>
            <div className="max-w-full lg:max-w-[60%] w-full p-[22px] dark:bg-hover-black bg-white">
              <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); showPopup(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                  <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                          c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                          l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                          l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                          C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="mb-[25px]">
                  <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">I want to pay</label>
                  <div className="relative">
                    <input type="number" name="spend" required min={selectedTrade?.min_limit} max={selectedTrade?.max_limit} onChange={(e) => firstCalcu(e.target.value)} value={firstCurrency} id="pass_input" placeholder={'min ' + selectedTrade?.min_limit} className="block font-noto px-4 !pr-[90px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                    <div className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                      {/* <p className="info-12 !text-primary cursor-pointer">Buy all</p> */}
                      <p className="info-12 cursor-pointer">INR</p>
                    </div>
                  </div>
                </div>

                <div className="mb-[25px]">
                  <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">I will get ≈</label>
                  <div className="relative">
                    <input type="number" name="receive" required max={selectedTrade?.quantity} id="pass_input2" placeholder="Enter Quantity" onChange={(e) => secCalcu(e.target.value)} value={secondCurrency} className="block font-noto px-4 !pr-[90px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                    <div className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                      <p className="info-12 cursor-pointer">{selectedTrade.symbol}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-[25px]">
                  <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">Payment Methods</label>
                  <div className="relative border  border-black dark:border-white rounded ">
                    <SelectMenu selectMenu={pmethodArray} clear={clear} selectNetwork={selectNetwork} />
                  </div>
                  <div className="!text-red-700 info-12">
                    {errors.method?.message}
                  </div>
                </div>
                <button className="cta w-full">Buy</button>
                <p className="info-12 text-center mt-[10px]">Cancelled automatically in <span>40s</span></p>
              </form>
            </div>
          </div>
        }

        {
          buy === 2 &&
          <>
            <div className="hidden lg:block">
              <table width="100%" className="mt-[24px]">
                <thead>
                  <tr>
                    <th><p className="text-start  info-12 ">Advertiser (Completed trades | Average time)</p></th>
                    <th><p className="text-start  info-12 ">Price</p></th>
                    <th><p className="text-start  info-12 ">Amount/Limit</p></th>
                    <th><p className="text-start  info-12 ">Payment methods</p></th>
                    <th><p className="text-start  info-12 ">Actions</p></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-grey">
                    <td>
                      {/* about user */}
                      <div className="my-[24px] flex items-center gap-[10px] grow-[1.6]">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#e8f6f7] flex">
                          <span className="m-auto text-primary dark:text-primary info-14-16">C</span>
                        </div>
                        <div className="">
                          <p className="info-14 !text-black hover:!text-black dark:!text-white">CoinzJet.com</p>
                          <p className="info-12">Total trades 5 | Completion Rate 100.00%</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* price */}
                      <div className="my-[24px] grow-[1]">
                        <p className="info-14-16 !font-bold">1.07 USD</p>
                      </div>
                    </td>

                    <td>
                      {/* amount/limits */}
                      <div className="my-[24px] grow-[1.4]">
                        <div className="flex items-center gap-[12px]">
                          <p className="info-12">Amount</p>
                          <p className="info-12 !text-black dark:!text-white ">44,789.8 USDT</p>
                        </div>
                        <div className="flex items-center gap-[12px]">
                          <p className="info-12 min-w-[45px]">Limit</p>
                          <p className="info-12 !text-black dark:!text-white">10-3,000USD</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* payment methods */}
                      <div className="my-[24px] flex items-center gap-[14px] grow-[1]">
                        <Image src={PaymentMethods} alt="" width={24} height={24} />
                        <Image src={PaymentMethods} alt="" width={24} height={24} />
                      </div>
                    </td>

                    <td>
                      {/* actions */}
                      <div className="my-[24px] grow-[0.6]">
                        <button className="cta min-w-[100px] w-full bg-[#f1493f] hover:bg-[#f1493fcc]" onClick={() => { setClick(true); showPopup2(true) }}>sell</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-grey">
                    <td>
                      {/* about user */}
                      <div className="my-[24px] flex items-center gap-[10px] grow-[1.6]">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#e8f6f7] flex">
                          <span className="m-auto text-primary dark:text-primary info-14-16">C</span>
                        </div>
                        <div className="">
                          <p className="info-14 !text-black hover:!text-black dark:!text-white">CoinzJet.com</p>
                          <p className="info-12">Total trades 5 | Completion Rate 100.00%</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* price */}
                      <div className="my-[24px] grow-[1]">
                        <p className="info-14-16 !font-bold">1.07 USD</p>
                      </div>
                    </td>

                    <td>
                      {/* amount/limits */}
                      <div className="my-[24px] grow-[1.4]">
                        <div className="flex items-center gap-[12px]">
                          <p className="info-12">Amount</p>
                          <p className="info-12 !text-black dark:!text-white">44,789.8 USDT</p>
                        </div>
                        <div className="flex items-center gap-[12px]">
                          <p className="info-12 min-w-[45px]">Limit</p>
                          <p className="info-12 !text-black dark:!text-white">10-3,000USD</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      {/* payment methods */}
                      <div className="my-[24px] flex items-center gap-[14px] grow-[1]">
                        <Image src={PaymentMethods} alt="" width={24} height={24} />
                        <Image src={PaymentMethods} alt="" width={24} height={24} />
                      </div>
                    </td>

                    <td>
                      {/* actions */}
                      <div className="my-[24px] grow-[0.6]">
                        <button className="cta min-w-[100px] w-full bg-[#f1493f] hover:bg-[#f1493fcc]" onClick={() => { setClick(true); showPopup2(true) }}>sell</button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            {/* Buy table content end For desktop */}

            {/* Buy table content end For mobile */}
            <div className="lg:hidden">
              <div className="border-b border-grey py-[15px]">
                {/* about user */}
                <div className="mb-[10px] flex items-center gap-[10px]">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#e8f6f7] flex">
                    <span className="m-auto text-primary info-12 dark:text-primary">F</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="info-14 !text-black hover:!text-black dark:!text-white">Fahim</p>
                    <p className="info-12">Total trades 66 | Completion Rate 94.00%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  {/* amount/limits */}
                  <div className="mb-[10px]">
                    <div className="flex items-center gap-[12px]">
                      <p className="info-12">Amount</p>
                      <p className="info-12 !text-black dark:!text-white">111.78 USDT</p>
                    </div>
                    <div className="flex items-center gap-[12px]">
                      <p className="info-12 min-w-[45px]">Limit</p>
                      <p className="info-12 !text-black dark:!text-white">10-37.074 USD</p>
                    </div>
                  </div>
                  {/* price */}
                  <div className="mb-[10px]">
                    <p className="info-14-16 !font-bold">1.039 USD</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  {/* payment methods */}
                  <div className="flex items-center gap-[14px]">
                    <Image src={PaymentMethods} alt="" width={24} height={24} />
                    <Image src={PaymentMethods} alt="" width={24} height={24} />
                  </div>
                  {/* actions */}
                  <div>
                    <button className="cta bg-[#f1493f] hover:bg-[#f1493fcc]" onClick={() => { setClick(true); showPopup2(true) }}>Sell</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        }

        {/* sell coin popup start */}
        {popup2 &&
          <div className={`${popup2 ? "top-[50%] opacity-1 visible" : "top-[45%] opacity-0 invisible"} z-[9] duration-300 flex max-w-full h-full lg:h-auto lg:max-w-[740px] w-full mx-auto fixed  left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden`}>
            <div className="max-w-[40%] hidden lg:block w-full p-[22px] bg-white dark:bg-hover-black dark:shadow-none shadow-md">
              {/* about user */}
              <div className="my-[24px] flex items-center gap-[10px] grow-[1.6]">
                <div className="min-w-[38px] min-h-[38px] rounded-full bg-[#e8f6f7] flex">
                  <span className="m-auto text-primary dark:text-primary info-14-16">t</span>
                </div>
                <div className="">
                  <p className="info-14 !text-black hover:!text-black dark:!text-white">Tatsumakisen</p>
                  <p className="info-12">38 Total orders | 4min Average release</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Price</p>
                <p className="info-14 !text-[#f1493f]">1.030 USD</p>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Limit</p>
                <p className="info-14 dark:!text-white dark:hover:!text-white hover:!text-grey">10.000-1049.490 USD</p>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey">Amount</p>
                <p className="info-14 dark:!text-white dark:hover:!text-white hover:!text-grey"> 1116.01000000 USDT</p>
              </div>
              <p className="info-14 dark:hover:!text-grey gap-[10px] hover:!text-grey flex items-center">
                <div className="max-w-[24px] w-full" >
                  <svg fill={mode === "light" ? "black" : "grey"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xmlSpace="preserve">
                    <path id="XMLID_89_" d="M43.3,73.8c-0.8,0-1.6-0.3-2.2-0.8c-1-0.8-1.5-2.1-1.2-3.4l4.9-25l-2.7,1.5c-1.7,0.9-3.8,0.4-4.8-1.3
                      c-0.9-1.7-0.4-3.8,1.3-4.8l9.3-5.3c1.2-0.7,2.7-0.6,3.8,0.2c1.1,0.8,1.6,2.2,1.4,3.5L48,64.4l4.2-1.8c1.8-0.8,3.8,0,4.6,1.8
                      c0.8,1.8,0,3.8-1.8,4.6l-10.3,4.5C44.3,73.7,43.8,73.8,43.3,73.8z M53.2,26c0.9-0.9,1.5-2.2,1.5-3.5c0-1.3-0.5-2.6-1.5-3.5
                      c-0.9-0.9-2.2-1.5-3.5-1.5c-1.3,0-2.6,0.5-3.5,1.5c-0.9,0.9-1.5,2.2-1.5,3.5c0,1.3,0.5,2.6,1.5,3.5c0.9,0.9,2.2,1.5,3.5,1.5
                      C51,27.5,52.3,27,53.2,26z M92,46C92,20.6,71.4,0,46,0S0,20.6,0,46s20.6,46,46,46S92,71.4,92,46z M84,46c0,21-17,38-38,38S8,67,8,46
                      S25,8,46,8S84,25,84,46z" />
                  </svg>
                </div>
                <span>Buyer needs to pay within 15 minutes</span>
              </p>
              <ul className="h-[200px] overflow-y-scroll">
                <li className="mb-[10px]">
                  <p className="info-14 hover:!text-grey">1. Don't leave any messages in the remark, including but not limited to USDT, Bitget and crypocurrency</p>
                </li>
                <li className="mb-[10px]">
                  <p className="info-14 hover:!text-grey">2. Single payment exceeding 50,000 CNY should be made in batches</p>
                </li>
                <li className="mb-[10px]">
                  <p className="info-14 hover:!text-grey">3. For security reasons, the withdrawal, internal transfer and selling of the purchased asset can not be performed until T+2, at which time the restriction will be automatially lifted. Trading is not affected during the restriction period</p>
                </li>
                <li>
                  <p className="info-14 hover:!text-grey">After the buyer marked the order as paid, please login your receiving account and confirm receipt before releasing</p>
                </li>
              </ul>
            </div>
            <div className="max-w-full lg:max-w-[60%] w-full p-[22px] dark:bg-hover-black bg-white">
              <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); showPopup2(false) }}>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                  <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                        c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                        l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                        l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                        C61.42,57.647,61.42,54.687,59.595,52.861z" />
                </svg>
              </div>
              <div className="mb-[25px]">
                <div className="mb-[25px]">
                  <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">I want to sell</label>
                  <div className="relative">
                    <input type="number" name="password" id="pass_input2" placeholder="Enter Quantity" className="block font-noto px-4 !pr-[90px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                    <div className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                      <p className="info-12 cursor-pointer !text-primary">All</p>
                      <p className="info-12 cursor-pointer">USDT</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-[10px]">
                    <p className="info-12">Available to sell:0.00000000 USDT</p>
                    <p className="info-12 !text-primary flex items-center gap-[15px] cursor-pointer" onClick={() => { setFundTransfer(true); showPopup2(false) }}>
                      <div className="max-w-[16px] w-full">
                        <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fill={mode === "dark" ? "#1da2b4" : "#231F20"} d="M7.249 19.79L3.387 16.79C3.26545 16.6957 3.1673 16.5746 3.1002 16.4361C3.03309 16.2977 2.99883 16.1456 3.00009 15.9918C3.00135 15.8379 3.03809 15.6865 3.10745 15.5491C3.17681 15.4118 3.27692 15.2923 3.4 15.2L7.4 12.2C7.61217 12.0409 7.87887 11.9725 8.14142 12.0101C8.40397 12.0476 8.64087 12.1878 8.8 12.4C8.95913 12.6122 9.02746 12.8789 8.98995 13.1414C8.95244 13.404 8.81217 13.6409 8.6 13.8L7 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H6.918L8.476 18.21C8.57974 18.2906 8.6666 18.3908 8.73162 18.5049C8.79664 18.6191 8.83853 18.7449 8.85492 18.8752C8.87131 19.0055 8.86187 19.1378 8.82714 19.2645C8.79241 19.3912 8.73307 19.5098 8.6525 19.6135C8.57193 19.7173 8.47172 19.8041 8.35759 19.8691C8.24345 19.9341 8.11763 19.976 7.9873 19.9924C7.85698 20.0088 7.7247 19.9994 7.59802 19.9646C7.47134 19.9299 7.35274 19.8706 7.249 19.79V19.79ZM15.2 10.6C15.1212 10.4949 15.0639 10.3754 15.0313 10.2482C14.9987 10.121 14.9915 9.98859 15.0101 9.85858C15.0286 9.72858 15.0726 9.60351 15.1395 9.49051C15.2064 9.37751 15.2949 9.2788 15.4 9.20001L17 8.00001H4C3.73478 8.00001 3.48043 7.89465 3.29289 7.70711C3.10536 7.51958 3 7.26522 3 7.00001C3 6.73479 3.10536 6.48044 3.29289 6.2929C3.48043 6.10536 3.73478 6.00001 4 6.00001H17.082L15.524 4.79001C15.4177 4.71037 15.3284 4.61037 15.2612 4.49584C15.194 4.3813 15.1502 4.25453 15.1326 4.12291C15.1149 3.9913 15.1236 3.85748 15.1582 3.72926C15.1928 3.60105 15.2525 3.48101 15.334 3.37615C15.4155 3.27129 15.5171 3.18371 15.6328 3.11852C15.7485 3.05333 15.876 3.01184 16.0079 2.99647C16.1398 2.9811 16.2734 2.99215 16.401 3.02898C16.5286 3.06582 16.6476 3.1277 16.751 3.21101L20.613 6.21101C20.7344 6.30534 20.8323 6.42638 20.8993 6.56473C20.9663 6.70308 21.0005 6.85501 20.9993 7.00872C20.998 7.16243 20.9613 7.31378 20.8921 7.45101C20.8228 7.58824 20.7229 7.70767 20.6 7.80001L16.6 10.8C16.4949 10.8788 16.3754 10.9361 16.2482 10.9687C16.121 11.0013 15.9886 11.0085 15.8586 10.99C15.7286 10.9714 15.6035 10.9274 15.4905 10.8605C15.3775 10.7936 15.2788 10.7051 15.2 10.6V10.6Z" />
                        </svg>
                      </div>
                      <span>Transfer</span>
                    </p>
                  </div>
                </div>

                <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">I will get ≈</label>
                <div className="relative">
                  <input type="number" name="password" id="pass_input" placeholder="10.000-1049.490" className="block font-noto px-4 !pr-[90px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
                  <div className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                    {/* <p className="info-12 !text-primary cursor-pointer">Buy all</p> */}
                    <p className="info-12 cursor-pointer">USD</p>
                  </div>
                </div>
              </div>


              <div className="mb-[25px]">
                <label className="info-14 !text-grey dark:hover:!text-grey hover:!text-grey mb-[10px] block">Payment methods</label>
                <p className="info-14 dark:!text-white hover:!text-grey dark:hover:!text-white p-[12px] dark:bg-[#121314] bg-[#e8f6f7] rounded-md text-center cursor-pointer" onClick={() => { setPaymentPopup(true); showPopup2(false); }}>Add Payment Methods +</p>
              </div>
              <button className="cta w-full !bg-[#f1493fcc]">Sell</button>
            </div>
          </div>
        }

        {/* fund transfer popup */}
        {fundTransfer &&
          <div className={`${fundTransfer ? "top-[50%] opacity-1 visible" : "top-[45%] opacity-0 invisible"} dark:bg-hover-black p-[20px] z-[9] duration-300 max-w-full h-full lg:h-auto lg:max-w-[500px] w-full mx-auto fixed  left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg overflow-hidden bg-white shadow-lg dark:shadow-none`}>
            <div className="max-w-[20px] mb-[15px] w-full ml-auto cursor-pointer" onClick={() => { setClick(false); setFundTransfer(false) }}>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.963 60.842" style={{ enableBackground: 'new 0 0 60.963 60.842' }} xmlSpace="preserve">
                <path fill={mode === "dark" ? "white" : "#231F20"} d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
                c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
                l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
                C61.42,57.647,61.42,54.687,59.595,52.861z" />
              </svg>
            </div>
            <p className="info-14-16 ">Fund Transfer</p>
            <div className="my-[20px] ">
              <label className="info-14-16 !text-grey mb-[15px]">Crypto</label>
              <SelectMenu selectMenu={coinDataList} borderBottom={true} />
            </div>
            <div className="flex gap-[10px]">
              <div className="max-w-[70%] w-full dark:bg-[#121314] bg-white shadow-lg dark:shadow-none p-[12px] rounded-md">
                <div className="flex">
                  {/* <div classname="relative m-auto bg-grey mr-[10px] w-[100%] max-w-[1px] z-[5] min-w-[1px] h-[70%]"></div> */}
                  <div className={`flex ${swap ? "flex-col-reverse" : "flex-col"}`}>
                    <div className="flex items-center gap-[20px]">
                      <p className="info-12">From</p>
                      <SelectMenu height150={true} selectMenu={coinDataList3} />
                      <p className="info-12">BTC</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <p className="info-12">From</p>
                      <SelectMenu height150={true} selectMenu={coinDataList3} />
                      <p className="info-12">BTC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[30%] flex w-full dark:bg-[#121314] bg-white shadow-lg dark:shadow-none p-[12px] rounded-md">
                <div className="max-w-[24px] w-full rotate-90 m-auto cursor-pointer" onClick={() => { setSwap(!swap) }}>
                  <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill={mode === "dark" ? "#1da2b4" : "#231F20"} d="M7.249 19.79L3.387 16.79C3.26545 16.6957 3.1673 16.5746 3.1002 16.4361C3.03309 16.2977 2.99883 16.1456 3.00009 15.9918C3.00135 15.8379 3.03809 15.6865 3.10745 15.5491C3.17681 15.4118 3.27692 15.2923 3.4 15.2L7.4 12.2C7.61217 12.0409 7.87887 11.9725 8.14142 12.0101C8.40397 12.0476 8.64087 12.1878 8.8 12.4C8.95913 12.6122 9.02746 12.8789 8.98995 13.1414C8.95244 13.404 8.81217 13.6409 8.6 13.8L7 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H6.918L8.476 18.21C8.57974 18.2906 8.6666 18.3908 8.73162 18.5049C8.79664 18.6191 8.83853 18.7449 8.85492 18.8752C8.87131 19.0055 8.86187 19.1378 8.82714 19.2645C8.79241 19.3912 8.73307 19.5098 8.6525 19.6135C8.57193 19.7173 8.47172 19.8041 8.35759 19.8691C8.24345 19.9341 8.11763 19.976 7.9873 19.9924C7.85698 20.0088 7.7247 19.9994 7.59802 19.9646C7.47134 19.9299 7.35274 19.8706 7.249 19.79V19.79ZM15.2 10.6C15.1212 10.4949 15.0639 10.3754 15.0313 10.2482C14.9987 10.121 14.9915 9.98859 15.0101 9.85858C15.0286 9.72858 15.0726 9.60351 15.1395 9.49051C15.2064 9.37751 15.2949 9.2788 15.4 9.20001L17 8.00001H4C3.73478 8.00001 3.48043 7.89465 3.29289 7.70711C3.10536 7.51958 3 7.26522 3 7.00001C3 6.73479 3.10536 6.48044 3.29289 6.2929C3.48043 6.10536 3.73478 6.00001 4 6.00001H17.082L15.524 4.79001C15.4177 4.71037 15.3284 4.61037 15.2612 4.49584C15.194 4.3813 15.1502 4.25453 15.1326 4.12291C15.1149 3.9913 15.1236 3.85748 15.1582 3.72926C15.1928 3.60105 15.2525 3.48101 15.334 3.37615C15.4155 3.27129 15.5171 3.18371 15.6328 3.11852C15.7485 3.05333 15.876 3.01184 16.0079 2.99647C16.1398 2.9811 16.2734 2.99215 16.401 3.02898C16.5286 3.06582 16.6476 3.1277 16.751 3.21101L20.613 6.21101C20.7344 6.30534 20.8323 6.42638 20.8993 6.56473C20.9663 6.70308 21.0005 6.85501 20.9993 7.00872C20.998 7.16243 20.9613 7.31378 20.8921 7.45101C20.8228 7.58824 20.7229 7.70767 20.6 7.80001L16.6 10.8C16.4949 10.8788 16.3754 10.9361 16.2482 10.9687C16.121 11.0013 15.9886 11.0085 15.8586 10.99C15.7286 10.9714 15.6035 10.9274 15.4905 10.8605C15.3775 10.7936 15.2788 10.7051 15.2 10.6V10.6Z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="info-12 my-[24px]">Amount for transfer</p>
            <div className="relative">
              <input type="number" name="password" id="pass_input" placeholder="0.00000000" className="block font-noto px-4 !pr-[90px] max-w-full  w-full bg-transparent border  border-black dark:border-white rounded min-h-[46px] text-black dark:text-white outline-none focus:!border-primary" />
              <div className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] right-[10px]">
                <p className="info-12 cursor-pointer">USDT</p>
                <p className="info-12 !text-primary cursor-pointer">All</p>
              </div>
            </div>
            <p className="info-12 my-[10px]">Transferable USDT quantity:0.00000000</p>
            <div className="text-end mt-[15px]">
              <button className="cta">Confirm</button>
            </div>
          </div>
        }


        {
          paymentPopup &&
          <Paymentmodal paymentods={paymentods} />
        }



      </div>
    </section>
  )
}

export default P2PBuySell;