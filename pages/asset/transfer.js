import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getProviders, getSession } from "next-auth/react";
import Layout from "components/layout/Layout";
import SelectMenu from "components/snippets/selectMenu";
import Image from "next/image";
import Context from "components/contexts/context";
import { useRouter } from "next/router";
import SearchDropdown from "components/snippets/search-dropdown";
import TransferDataTable from "components/asset/transfer/transferDataTable";
import AdImage from "components/snippets/adImage";
import Icons from "components/snippets/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup
  .object()
  .shape({
    from_wallet: yup.string().required('File is required'),
    to_wallet: yup.string().required('File is required'),
    token_id: yup.number().required('File is required'),
    value: yup.number().positive().required('This field is required'),
  })
  .required();

const Transfer = ({ assets, sessions, tokenAssets, history, tokens }) => {
  let dateFilter = ["Last 7 Days", "Last 30 Days"];
  let coinData = ["All", "BGB", "BTC"];
  const [data, setData] = useState(true);
  const router = useRouter();

  let fromMenu = [{ "id": 1, "name": "Main Account", "wallet": "main_wallet" },
  { "id": 2, "name": "Trading Account", "wallet": "trading_wallet" },
  { "id": 3, "name": "Funding Account", "wallet": "funding_wallet" }];
  let toMenu = [{ "id": 1, "name": "Main Account", "wallet": "main_wallet" },
  { "id": 2, "name": "Trading Account", "wallet": "trading_wallet" },
  { "id": 3, "name": "Funding Account", "wallet": "funding_wallet" }];

  let { register, setValue, handleSubmit, watch, setError, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const [bindFromMenu, setFromMenu] = useState(fromMenu)

  const [bindToMenu, setToMenu] = useState(toMenu)

  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const { mode } = useContext(Context);
  const [coinImg, setCoinImg] = useState("bnb.png");
  const [coinImg2, setCoinImg2] = useState('');
  const [coin, setCoin] = useState("USD");
  const [coin2, setCoin2] = useState("Select Coin");
  let tradingPair = ["BTC/USDT", "ETH/USDT", "BTC/USDT", "BTC/USDT"];
  const [Switch, setSwitch] = useState(false);

  const [first_wallet, setfirst_wallet] = useState();
  const [first_wallet_name, setfirst_wallet_name] = useState('');

  const [second_wallet, setsecond_wallet] = useState();
  const [second_wallet_name, setsecond_wallet_name] = useState('');
  const [filterShow, setfilterShow] = useState(false);
  const [assetBalance, setAssetBalance] = useState(0.00);
  const [historyList, setHistoryList] = useState()

  useEffect(() => {
     setHistoryList(history)
  }, []);

  const selectNetwork = async (item) => {
    let filterCoin = item;

    let filterList = [];
    // console.log("==========history", history)
  
    history.filter((item) => {
      if (filterCoin === "all") {
        filterList.push(item)
      }
      else if(item.symbol === filterCoin) {
        filterList.push(item)
      }
    })
    setHistoryList(filterList)

  };
  const selectCoin2 = async (item) => {
    setCoin2(item.symbol);
    setCoinImg2(item.image);
    setRotate2(false);

    let asset = tokenAssets.filter((ass) => {
      return ass.token_id === item.id && ass.walletType === first_wallet_name;
    })

    setAssetBalance(asset !== undefined && asset.length > 0 ? asset[0]?.balance.toFixed(2) : 0.00);

    setValue('token_id', item.id);
  };

  const setFromWallet = (item) => {
    setfirst_wallet(item.name)
    setfirst_wallet_name(item.wallet)
    let menu = toMenu.filter((e) => {
      return e.id !== item.id
    })
    setToMenu(menu)

    setValue('from_wallet', item.wallet);
  }

  const setToWallet = (item) => {
    setsecond_wallet(item.name)
    setsecond_wallet_name(item.wallet)
    let menu = fromMenu.filter((e) => {
      return e.id !== item.id
    })
    setFromMenu(menu)
    setValue('to_wallet', item.wallet);
  }

  const switchWallet = (e) => {

    e.preventDefault();
    setFromMenu(bindToMenu);
    setToMenu(bindFromMenu);

    setsecond_wallet(first_wallet)
    setsecond_wallet_name(first_wallet_name)

    setfirst_wallet(second_wallet)
    setfirst_wallet_name(second_wallet_name)

    setValue('from_wallet', second_wallet_name);
    setValue('to_wallet', first_wallet_name);

    setCoin2('');
    setCoinImg2('');
    setValue('token_id', '')
    setValue('value', 0)
    setAssetBalance(0.00)
  }

  const onSubmit = async (data) => {

    if (data.value > assetBalance) {
      toast.error('Value must be less than your current balance', {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
      return;
    }

    data.userid = sessions.user.id;

    let transferResponse = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/assets`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(response => response.json());

    console.log(transferResponse);
    if (transferResponse.data.status === 200) {
      toast.success(transferResponse.data.message, {
        position: toast.POSITION.TOP_RIGHT, autoClose: 5000
      })
      router.push('/asset/transfer');
    }
  }

  return (
    <>
      <ToastContainer />
      <Layout data={assets} name="Transfer">
        <div className="grow p-4 md:p-8">
          <div className="grid lg:grid-cols-2  gap-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
                  Transfer
                </h3>
                <div className="bg-[#f9faff] dark:bg-black-v-4 p-2 flex items-center w-fit gap-4">
                  <div className="p-4">
                    <div className="bg-primary w-1 h-1 rounded-xl"></div>
                    <div className="bg-border-clr w-[1px] h-10 m-auto"></div>
                    <div className="bg-primary w-1 h-1 rounded-xl"></div>
                  </div>
                  <div className="">
                    <div className="border-b border-border-clr flex gap-4 items-center w-max">
                      <span className="info-12">From</span>
                      <div className={`${Switch ? "hidden" : "block"}`}>
                        <SelectMenu selectMenu={bindFromMenu} transfer={true} from={true} to={false} setFromWallet={setFromWallet} fromValue={first_wallet} />
                      </div>
                    </div>
                    <div className="!text-red-700 info-12">{errors.from_wallet?.message}</div>
                    <div className=" flex gap-4 items-center justify-between">
                      <span className="info-12">To</span>
                      <div className={`${Switch ? "hidden" : "block"}`}>
                        <SelectMenu selectMenu={bindToMenu} transfer={true} to={true} from={false} setToWallet={setToWallet} fromValue={second_wallet} />
                      </div>
                    </div>
                    <div className="!text-red-700 info-12">{errors.to_wallet?.message}</div>
                  </div>
                  <button type="button"
                    onClick={(e) => {
                      switchWallet(e);
                    }}
                  >
                    <div className="-rotate-90 ">
                      <Icons type="transfer" stroke="stroke-primary" />
                    </div>
                    {/* <Image
                    src={"/assets/icons/switch.svg"}
                    height={24}
                    width={24}
                    alt=""
                  /> */}
                  </button>
                </div>
                <div>
                  {/* <div className="mt-8">
                  <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                    Trading Pair
                  </h4>
                  
                  <div className="border-b border-border-clr">
                    <div className="relative">
                      <div
                        className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
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
                            src={`/assets/images/${coinImg}`}
                          ></Image>
                          <p className="info-14-16 font-bold">{coin}</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className={` ${
                            rotate && "rotate-90"
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
                </div> */}
                  <div className="mt-8 ">
                    <h4 className="info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                      Coin
                    </h4>
                    <div className="border-b border-border-clr ">
                      <div className="relative">
                        <div
                          className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
                          onClick={() => {
                            setDropDown2(!dropDown2);
                            setRotate2(!rotate2);
                          }}
                        >
                          <div className="flex gap-3 ">
                            {coinImg2 !== '' &&
                              <img
                                className="self-start"
                                height={24}
                                width={24}
                                alt="Coin Image"
                                src={`${coinImg2}`}
                              ></img>
                            }
                            <p className="info-14-16 font-bold" >{coin2}</p>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className={` ${rotate2 && "rotate-90"
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
                            coin={true}
                            selectCoin={selectCoin2}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="!text-red-700 info-12">{errors.token_id?.message}</div>
                  <div className="border-b mt-8 info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                    <h4 className="">Transfer Amount</h4>
                    <div className="flex  mt-4 items-end ">
                      <input
                        type="text"
                        className="caret-primary w-full bg-transparent  outline-none" onChange={(e) => { setValue('value', e.target.value) }}
                      />
                      <span className="text-black dark:text-white">{coin2}</span>
                      <span className="text-primary ml-2">All</span>
                    </div>

                  </div>
                  <div className="!text-red-700 info-12">{errors.value?.message}</div>
                  <div className="mt-4 flex justify-between info-14 hover:!text-grey dark:hover:!text-white dark:text-white">
                    <span>Available {coin2}: {assetBalance !== undefined ? assetBalance : '0.00'} </span>
                    {/* <span>Available Trading Bonus: 0 {coin2}</span> */}
                  </div>
                </div>
                <p className="mt-4 text-orange-300 font-noto">
                  <Image
                    className="inline"
                    src={"/assets/icons/warning.svg"}
                    height={24}
                    width={24}
                    alt=""
                  />{" "}
                  After transferring, all existing trading bonuses will become
                  invalid, and your account equity will be reduced accordingly. Be
                  aware the changes in risk if you have any open positions.{" "}
                </p>
                <p className="mt-4 text-orange-300 font-noto">
                  <Image
                    className="inline"
                    src={"/assets/icons/warning.svg"}
                    height={24}
                    width={24}
                    alt=""
                  />{" "}
                  You will lose your trading bonuses if they are applied after
                  transferring any assets, which may affect your positions and
                  open orders. Your positions may be reduced (or liquidated), and
                  open orders will not be kept. Carefully consider this before
                  proceeding with any further transfers.{" "}
                </p>
                <button type="submit" className="cta mt-8 w-full rounded-xl">Confirm</button>
              </div>
            </form>
            <AdImage />

          </div>
          <div className="grow p-4 md:p-8">
            <div className="flex gap-3 justify-between items-center">
              <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
                Transfer History
              </h3>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="">
                <h4 className="info-14 hidden lg:block hover:text-grey dark:text-white dark:hover:text-white">
                  Coin
                </h4>
                <div className="border border-border-clr ">
                  <SelectMenu selectMenu={tokens} selectNetwork={selectNetwork} all={true} />
                </div>
              </div>
              <div className="hidden lg:block">
                <h4 className="info-14 hover:text-grey dark:text-white dark:hover:text-white">
                  Time
                </h4>
                <div className="border border-border-clr">
                  <SelectMenu selectMenu={dateFilter} />
                </div>
              </div>

              <div className=" gap-3 h-[40px] hidden lg:flex self-end px-1 border border-border-clr dark:bg-black-v-4">
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
                className="lg:hidden"
                onClick={() => {
                  setfilterShow(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  viewBox="0 96 960 960"
                  width={24}
                  fill={mode === "dark" ? "white" : "currentcolor"}
                >
                  <path d="M440 896q-17 0-28.5-11.5T400 856V616L168 320q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560 616v240q0 17-11.5 28.5T520 896h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
                </svg>
              </button>
              <div
                className={`fixed -bottom-[100%] duration-500 right-0 w-full bg-white h-[100vh] dark:bg-black-v-1 ${filterShow && "bottom-[0%] z-[4] "
                  } `}
              >
                <div className="flex justify-between mb-4  p-4 border-b lg:hidden border-t border-border-clr">
                  <h3 className="info-14-20">Filter</h3>

                  <button
                    className="ml-auto mr-0"
                    onClick={() => {
                      setfilterShow(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={mode === "dark" ? "white" : "currentcolor"}
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
                <div className="mt-4 px-2 ">
                  <div className="border border-border-clr">
                    <SelectMenu selectMenu={coinData} />
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <div className="border border-border-clr">
                    <SelectMenu selectMenu={dateFilter} />
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
                </div>
                <div className="mt-4 px-2 flex gap-4 ">
                  <button className="cta2 w-full">Reset</button>
                  <button className="cta w-full">Confirm</button>
                </div>
              </div>
            </div>
            {/* dataTable */}

            <TransferDataTable data={historyList} />
          </div>
        </div>
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");

    let tokenList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/token`, {
      method: "GET"
    }).then(response => response.json());

    let tokens = []
    for (const item of tokenList) {
      tokens.push(item.symbol);
    }

    console.log(tokens)

    let menu = await data.json();

    let assetList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/assets/${session?.user?.id}`, {
      method: "GET"
    }).then(response => response.json());

    let transferList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/assets/history/${session?.user?.id}`, {
      method: "GET"
    }).then(response => response.json());


    return {
      props: {
        assets: menu.specialNav.assets,
        sessions: session,
        tokenAssets: assetList,
        history: transferList.data,
        tokens: tokens
      }, // will be passed to the page component as props
    };
  }

  return {
    redirect: { destination: "/" },
  };
}
export default Transfer;
