import Layout from 'components/layout/Layout'

import React, { useState, useContext, use , useRef } from 'react'
import { getProviders, getSession } from 'next-auth/react'
import SearchDropdown from 'components/snippets/search-dropdown'
import Context from 'components/contexts/context'
import SelectMenu from 'components/snippets/selectMenu'
import AdImage from 'components/snippets/adImage'
import Link from 'next/link'
import WithDrawTable from 'components/asset/withDraw/withDrawTable'
import ActiveCta from 'components/snippets/activeCta'
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import VerificationCode from 'components/login-register/verification-code'

const Withdraw = ({
  assets,
  tokens,
  networks,
  sessions,
  tokenBalnces,
  getWithdrawlist,
}) => {
  const router = useRouter()
  const { mode } = useContext(Context)
  let dateFilter = ['Last 7 Days', 'Last 30 Days']

  let coinData = ['All', 'BGB', 'BTC']

  const refFrom = useRef()


  const [show, setShow] = useState(1)
  const [active, setActive] = useState(0)
  const [rotate, setRotate] = useState(false)
  const [data, setData] = useState(true)
  const [dropDown, setDropDown] = useState(false)
  const [filterShow, setfilterShow] = useState(false)
  const [coin, setCoin] = useState('Select Coin')
  const [coinImg, setCoinImg] = useState(
    'https://bitlivecoinnetwork.com/images/logo.png',
  )
  const [network, setNetwork] = useState([])
  const [assetList, setAssetList] = useState()

  const [userwalletAddress, setWalletAddress] = useState('')
  const [tokenBalance, setTokenBlance] = useState(0)
  const [selectedNetworkID, setselectedNetworkID] = useState(0)

  const [clearnextwork, setClearNetwork] = useState(false)

  const [selectedTokens, setselectedTokens] = useState()
  const [addfee, setFee] = useState(0)
  const [yourecived, setyourecived] = useState(0)

  const [validAmount, setValidamount] = useState('')
  const [minimunWithdraw, setMinimumWithdraw] = useState(0.02)
  // withraw list get in state

  const [withdrwaList, setWithdrawList] = useState(getWithdrawlist)

  useEffect(() => {
    if (validAmount != '') {
      // var numb = validAmount.match(/\d/g).join('')
      setValue('withdrawAmont', validAmount)
      setValidamount(validAmount)
      setyourecived(validAmount - addfee)
    }

    if (sessions) {
      setValue('userid', sessions.user.id)
    }
  }, [validAmount])



  const schema = yup
    .object()
    .shape({
      usertoken: yup.mixed().required('Please select at least one item...'),
      usernetwork: yup.string().required('Please Select network'),
      userwallet: yup.string().required('Please enter crypto waller address'),
      withdrawAmont: yup
        .number()
        .positive()
        .min(minimunWithdraw)
        .max(tokenBalance - addfee)
        .required('Please enter amount'),
    })
    .required()


  let {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const selectCoin = async (item) => {
    console.log('i am here!', item)
    setCoin(item?.symbol)
    setCoinImg(item?.image)
    setMinimumWithdraw(item?.minimum_withdraw)
    setselectedNetworkID(0)
    setNetwork([])
    setClearNetwork(true)
    setselectedTokens(item)
    setFee(0)

    setValue('usertoken', item)
    setWithdrawList(
      getWithdrawlist.filter((e) => {
        return e.tokenID === item?.id
      }),
    )
    // ==== get token balances
    if (tokenBalnces.length > 0) {
      let flag = false
      tokenBalnces.forEach((token, index) => {
        if (token.token_id === item.id) {
          setTokenBlance(token['sum(balance)'])
          flag = true
        }
      })

      if (flag === false) setTokenBlance(0)
    }

    // get balance end

    let selectedToken = tokens.filter((token) => {
      return item.id === token.id
    })

    let filternetwork = []
    for (const tokennet of JSON.parse(selectedToken[0].networks)) {
      networks.filter((net) => {
        if (net.id === tokennet.id) {
          filternetwork.push(net)
        }
      })
    }
    setNetwork(filternetwork)
  }

  const selectedNetwork = (e) => {
    setClearNetwork(false)
    if (JSON.parse(selectedTokens.networks).length > 0) {
      JSON.parse(selectedTokens.networks).forEach((ele) => {
        if (e.id === ele.id) {
          setFee(ele.fee)
        }
      })
    }

    setselectedNetworkID(e.id)
    setValue('usernetwork', e.id)
  }

  // selected menu return value

  const [tokenFilter, setTokenFilter] = useState(0)
  const [daysFilter, setDaysFilter] = useState(0)
  const [showVerifictionModal, setShowVerifictionModal] = useState(false)
  const [alliswell, setAllisWell] = useState(false)
  const [formData , setFormData] = useState({})

  
  const updateUser = async () => {
    alert('all is well!')
    console.log(formData)

    await setAllisWell(true)
    await setShowVerifictionModal(false)
    // if all is well then submit new request
    await save_withdraw()
    setAllisWell(true)
    // 
  }


  // save withdraw request 

  const save_withdraw = async () => {
    
    await fetch(`${process.env.NEXT_PUBLIC_APIURL}/withdraw/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((results) => {
        // console.log(results)
        setselectedNetworkID(0)
        setNetwork([])
        setClearNetwork(true)
        setselectedTokens({})
        setValidamount('')
        setWalletAddress('')
        setFee(0)
        setCoin('Select Coin')
        setCoinImg('https://bitlivecoinnetwork.com/images/logo.png')
        setTokenBlance(0)
        setyourecived(0)
        setShowVerifictionModal(false)
        setFormData({})
        setAllisWell(false)
        router.push('/asset/withdraw')
        toast.success(results.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        })
        
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        })

        console.log(err)
      })
  }

  // on submit handle
  const onSubmit = async (data) => {

    console.log('i am here!', alliswell)

    if (alliswell) {
      reset();
    } else {
      setShowVerifictionModal(true)
      setFormData(data)
    }
  }

  // manage SelectMenu Dropdown
  const returnToSelected = (vls) => {
    if (vls?.type === 'token') {
      // check filter name is token
      setTokenFilter(vls?.obj?.id)
      setWithdrawList(
        getWithdrawlist.filter((e) => {
          return e.tokenID === vls?.obj?.id
        }),
      )
      console.log(getWithdrawlist)
    } else if (vls?.type === 'days') {
      // check if days filter
      console.log(vls)
    }
  }

  const setShow1 = (vl) => {
    setShowVerifictionModal(vl)
  }


  return (
    <>
      {showVerifictionModal && (
        <VerificationCode
          bindFunCode={false}
          CloseCta={true}
          fixed={true}
          showState={show}
          showSetState={setShow1}
          updateUser={updateUser}
          loginData={sessions.user}
          withdraw={true}
        />
      )}

      <ToastContainer />
      <Layout data={assets} name="Withdraw">
        <div className="grow p-4 md:p-8 font-noto ">
          <div className="grid lg:grid-cols-2 gap-8">
            <form ref={refFrom} onSubmit={handleSubmit(onSubmit)}>
              <div className={`flex items-end gap-5 mb-10`}>
                <button
                  className={`section-secondary-heading font-noto ${
                    show === 2 && 'text-disable-clr'
                  }`}
                  onClick={() => {
                    setShow(1)
                  }}
                >
                  Withdraw
                </button>
                <button
                  className={`section-secondary-heading font-noto ${
                    show === 1 && 'text-disable-clr'
                  }`}
                  onClick={() => {
                    setShow(2)
                  }}
                >
                  Internal Funds Transfer
                </button>
              </div>
              <div>
                <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  Coin
                </h4>
                <div className="border-b border-border-clr">
                  <div className="relative">
                    <div
                      className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
                      onClick={() => {
                        setDropDown(!dropDown)
                        setRotate(!rotate)
                      }}
                    >
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={` ${
                          rotate && 'rotate-90'
                        } duration-300 w-6 h-6`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={mode === 'dark' ? 'white' : 'currentColor'}
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

                <div className="!text-red-700 info-12">
                  {errors.usertoken?.message}
                </div>
              </div>

              <div>
                {show === 2 && (
                  <div className="mt-8">
                    <ActiveCta
                      type="second"
                      data={ctas}
                      active={active}
                      setActive={setActive}
                    />
                  </div>
                )}
                {show === 1 && (
                  <div className="mt-4">
                    <h6 className="info-12 dark:hover:text-white dark:text-white">
                      Networks
                    </h6>
                    <div className="font-bold mt-2 border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr">
                      <SelectMenu
                        selectNetwork={selectedNetwork}
                        selectMenu={network}
                        network={true}
                        clear={clearnextwork}
                      />
                    </div>
                    <div className="!text-red-700 info-12">
                      {errors.usernetwork?.message}
                    </div>
                  </div>
                )}
                <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  <div>
                    <h4 className="">
                      {show === 1 ? 'Withdrawal address' : 'Account ID'}
                    </h4>
                  </div>
                  <div className=" mt-4  ">
                    <input
                      type="text"
                      className="caret-primary w-full bg-transparent  outline-none"
                      placeholder={
                        show === 1
                          ? 'Enter Withdrawl Addresss'
                          : 'Enter a BLC-Eachange account email'
                      }
                      onChange={(e) => {
                        setValue('userwallet', e.target.value)
                        setWalletAddress(e.target.value)
                      }}
                      value={userwalletAddress}
                    />
                  </div>
                </div>
                <div className="!text-red-700 info-12">
                  {errors.userwallet?.message}
                </div>
                <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  <h4 className="">Amount</h4>
                  <div className="flex  mt-4 items-end ">
                    <input
                      type="number"
                      step="0.001"
                      // pattern="^[0-9]+[0-9]*$"
                      className="caret-primary w-full bg-transparent  outline-none"
                      placeholder={
                        show === 1
                          ? 'Enter Withdrawl Amount'
                          : 'Minimum withdrawal amount: 0.001'
                      }
                      onChange={(e) => {
                        setValidamount(e.target.value)
                      }}
                      value={validAmount}
                    />

                    <span className="text-primary">All</span>
                  </div>
                </div>
                <div className="!text-red-700 info-12">
                  {errors.withdrawAmont?.message}
                </div>

                <div className="info-14 mt-2 flex justify-between hover:!text-grey dark:hover:!text-white dark:text-white">
                  <span>
                    Available: {tokenBalance > 0 ? tokenBalance : '0.000000'}
                  </span>
                  <span className="text-primary">
                    Withdrawal Limit: - - Increase Limit
                  </span>
                </div>

                <span className="info-14 mt-4  hover:!text-grey dark:hover:!text-white dark:text-white block">
                  Fee Free {addfee}{' '}
                  {selectedTokens ? selectedTokens.symbol : ''}
                </span>
                <span className="info-14 mt-2 hover:!text-grey dark:hover:!text-white dark:text-white block">
                  To Receive - {((tokenBalance) < yourecived) ? 0 : (yourecived+addfee)} -{' '}
                  {selectedTokens ? selectedTokens.symbol : ''}
                </span>

                <div className="mt-8">
                  <button className="cta w-full">Submit</button>
                  {show === 2 && (
                    <div className="p-4 bg-light-hover dark:bg-black-v-2 info-14 mt-8 hover:!text-grey dark:text-white  dark:hover:!text-white">
                      <h6>Please note:</h6>
                      <p>
                        For security purposes, phone verification may be
                        required to withdraw assets. Please be on the look out
                        for calls from BLC-Eachange customer service
                      </p>
                      <p className="text-red-600 ">
                        Minimum withdrawal amount: 0.001. You cannot withdraw
                        exceeding the available amount in your account.
                      </p>
                      <p>
                        - It is recommended that you complete KYC verification
                        to improve account security; the total daily withdrawal
                        amount without verification is 50000 USD; the total
                        monthly withdrawal amount is 100000 USD; the daily total
                        withdrawal amount after verification is 3000000 USD.
                      </p>
                      <p>
                        Make sure that your device and browser are secure and
                        your information is protected from being tampered with
                        or leaked.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
            <AdImage />
          </div>

          {/* dataTable */}
          {/* <DepositTable data={data} /> */}
        </div>
        {/* history  */}
        <div className="grow px-4 md:px-8">
          <div className="flex gap-3 justify-between items-center">
            <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
              Withdrawal Records
            </h3>
            {/* faq pending */}
            <Link
              href={'/faq'}
              className="info-14 hover:text-grey dark:text-white dark:hover:text-white"
            >
              Have not received your deposit?
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap justify-between lg:justify-start">
            <div className="">
              <h4 className="hidden lg:block info-14 hover:text-grey dark:text-white dark:hover:text-white">
                Coin
              </h4>
              <div className="border border-border-clr ">
                <SelectMenu
                  selectMenu={tokens}
                  type={'withdraw'}
                  returnvals={returnToSelected}
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <h4 className="hidden lg:block info-14 hover:text-grey dark:text-white dark:hover:text-white">
                Time
              </h4>
              <div className="border border-border-clr">
                <SelectMenu
                  selectMenu={dateFilter}
                  type={'days'}
                  returnvals={returnToSelected}
                />
              </div>
            </div>

            <div className="hidden lg:flex  gap-3 h-[40px] self-end px-1 border border-border-clr dark:bg-black-v-4">
              <input
                type="date"
                className="focus:outline-none bg-transparent  dark:text-white"
              />
              <input
                type="date"
                className="focus:outline-none bg-transparent dark:text-white "
              />
            </div>
            <button
              className="lg:hidden "
              onClick={() => {
                setfilterShow(true)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                viewBox="0 96 960 960"
                width={24}
                fill={mode === 'dark' ? 'white' : 'currentcolor'}
              >
                <path d="M440 896q-17 0-28.5-11.5T400 856V616L168 320q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560 616v240q0 17-11.5 28.5T520 896h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
              </svg>
            </button>
            {/* filter  */}
            <div
              className={`fixed -bottom-[100%] duration-500 right-0 w-full bg-white h-[100vh] ${
                filterShow && 'bottom-[0%] z-[4] '
              } dark:bg-black-v-1`}
            >
              <div className="flex justify-between mb-4  p-4 border-b lg:hidden border-t border-border-clr">
                <h3 className="info-14-20">Filter</h3>

                <button
                  className="ml-auto mr-0"
                  onClick={() => {
                    setfilterShow(false)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={mode === 'dark' ? 'white' : 'currentcolor'}
                    className="w-6 h-6 mr-0 ml-auto "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* filter  */}
              <div className="mt-4 px-2">
                <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  Coin
                </h4>
                <div className="border border-border-clr mt-2">
                  <SelectMenu selectMenu={coinData} />
                </div>
              </div>
              <div className="mt-4 px-2">
                <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  Time
                </h4>
                <div className="border border-border-clr mt-2">
                  <SelectMenu selectMenu={dateFilter} />
                </div>
              </div>
              <div className="mt-4 px-2 ">
                <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  Start Time:
                </h4>
                <input
                  type="date"
                  className="w-full border border-border-clr p-2 mt-2  bg-transparent dark:text-white"
                />
              </div>
              <div className="mt-4 px-2 ">
                <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                  End Time:
                </h4>
                <input
                  type="date"
                  className="w-full border border-border-clr p-2 mt-2 bg-transparent dark:text-white"
                />
              </div>

              <div className="mt-4 px-2 flex gap-4">
                <button className="cta2 w-full">Reset</button>
                <button className="cta w-full">Confirm</button>
              </div>
            </div>
          </div>
          <div className="mb-16 ">
            <WithDrawTable data={withdrwaList} />
          </div>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })
  const providers = await getProviders()

  if (session) {
    // =================== get menus add header/foooter links ================== //
    let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + '/hello')

    // =================== get token lsit ================================//
    let tokenList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/token`, {
      method: 'GET',
    }).then((response) => response.json())

    // ================== get networks ===========================//

    let networkList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/network`, {
      method: 'GET',
    }).then((response) => response.json())

    // =============== get token balances by user id ============ //

    let tokenBalnces = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/token/balances/${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())

    // ================ get withdraw list

    let getWithdrawlist = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/withdraw/list/${session.user.id}`,
      {
        method: 'GET',
      },
    ).then((response) => response.json())


    let menu = await data.json()
    return {
      props: {
        assets: menu.specialNav.assets,
        tokens: tokenList,
        networks: networkList,
        sessions: session,
        tokenBalnces: tokenBalnces,
        getWithdrawlist: getWithdrawlist,
      }, // will be passed to the page component as props
    }
  }
  // return {
  //     props: {
  //         providers,
  //     },
  // }
  return {
    redirect: { destination: '/' },
  }
}
export default Withdraw
