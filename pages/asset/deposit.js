import SearchDropdown from "components/snippets/search-dropdown";
import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import Layout from "components/layout/Layout";
import { getProviders, getSession } from "next-auth/react";
import Context from "/components/contexts/context";
import SelectMenu from "components/snippets/selectMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DepositTable from "/components/asset/deposit/depositTable";
import Link from "next/link";
const Deposit = ({ assets, tokens, networks, sessions }) => {
  let [data, setData] = useState(true);

  const [coin, setCoin] = useState("Select Coin");
  const [rotate, setRotate] = useState(false);
  const [coinImg, setCoinImg] = useState("https://bitlivecoinnetwork.com/images/logo.png");
  const [dropDown, setDropDown] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [network, setNetwork] = useState([]);
  const [address, setAddress] = useState('');

  let dateFilter = ["Last 7 Days", "Last 30 Days"];
  let coinData = ["All", "BGB", "BTC"];
  const { mode } = useContext(Context);
  const ref = useRef(null);
  let autoTransfer = ["Spot", "Bsc "];


  const selectCoin = async (item) => {
    setCoin(item.symbol);
    setCoinImg(item.image);

    let selectedToken = tokens.filter((token) => {
      return item.id === token.id
    })

    let filternetwork = [];

    for (const tokennet of JSON.parse(selectedToken[0].networks)) {
      networks.filter((net) => {
        if (net.id === tokennet.id) {
          filternetwork.push(net);
        }
      })
    }

    setNetwork(filternetwork);
  };

  const getDepositAddress = async (type) => {
    let result = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/users/address/${sessions.user.id}/${type}`, {
      method: "GET"
    }).then(response => response.json());

    if(result.status === 200){
      setAddress(result.deposit_address);
    }
    else{
      console.log(result);
    }
  };

  return (
    <>
      <ToastContainer />
      <Layout data={assets} name="Deposit">
        <div>
          <div className="grid lg:grid-cols-2  p-4 md:p-8 gap-10">
            <div className="">
              <div className="relative">
                <h6 className="info-12 dark:hover:text-white dark:text-white">
                  Coin
                </h6>
                <div
                  className="flex cursor-pointer justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 "
                  onClick={() => {
                    setDropDown(!dropDown);
                    setRotate(!rotate);
                  }}
                >
                  <div className="flex gap-3 ">
                    <img
                      className="self-start"
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
                    className={` ${rotate && "rotate-90"} duration-300 w-6 h-6`}
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
              <div className="mt-4">
                <h6 className="info-12 dark:hover:text-white dark:text-white">
                  Networks
                </h6>
                <div className="font-bold mt-2 border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr">
                  <SelectMenu deposit={true} selectMenu={network} getDepositAddress={getDepositAddress} />
                </div>
              </div>

              <div className="relative mt-4">
                <h6 className="info-12 dark:hover:text-white dark:text-white">
                  Deposit address:
                </h6>
                <div
                  className={`flex cursor-pointer items-center justify-between w-full border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr rounded p-2 mt-2 `}
                >
                  <div className="flex gap-3 ">
                    <p ref={ref} className="info-14-16 font-bold">
                      {address}
                    </p>
                  </div>

                  <div>
                    {/* copy to clipboard */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(ref.current.innerText);
                          toast.success("Copied to Clipboard", {
                            autoClose: 1000,
                          });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke={mode === "dark" ? "white" : "currentColor"}
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                          />
                        </svg>
                      </button>

                      {/* qr symbol  */}
                      <button
                        className="hidden md:block"
                        onClick={() => {
                          setShowQr(!showQr);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke={mode === "dark" ? "white" : "currentColor"}
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* qr code  */}
                    <div
                      className={` hidden md:block md:absolute md:right-0 md:transition-[opacity] md:duration-300  md:bg-white md:rounded-lg  place-items-center md:shadow-2xl  p-2 ${showQr
                        ? "visible opacity-1 z-[3] "
                        : "invisible opacity-0 "
                        } mt-4`}
                    >
                      <img src={'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' + address} alt="" />
                    </div>
                  </div>
                </div>
                {/* qr code  */}
                <div className={`grid place-items-center p-2 mt-4 md:hidden`}>
                  <img src="/assets/images/qr.png" alt="" />
                </div>
              </div>
              {/* <div className="mt-4">
                <h6 className="info-12 dark:hover:text-white dark:text-white">
                  Automatically transfer to
                </h6>
                <div className="font-bold mt-2 border md:border-t-0 md:border-r-0 md:border-l-0  border-border-clr">
                  <SelectMenu selectMenu={autoTransfer} />
                </div>
              </div> */}
              <div className="p-4 bg-light-hover dark:bg-black-v-2 info-14 mt-4 hover:!text-grey dark:text-white  dark:hover:!text-white">
                <h6>Please note:</h6>
                <p>
                  - Please don’t deposit any other digital assets except BTC to
                  the above address. Any deposited asset which is not BTC will
                  not be retrieved
                </p>
                <p className="text-red-600 ">
                  - Minimum deposit amount: 0.0004 BTC. Any deposits less than
                  the minimum will not be credited or refunded.
                </p>
                <p>
                  - Depositing to the above address requires confirmations of
                  the blockchain network. It will arrive after 1 confirmations.
                </p>
                <p>
                  Make sure that your device and browser are secure and your
                  information is protected from being tampered with or leaked.{" "}
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <Image
                src="/assets/images/launchPadOffer.png"
                height={360}
                width={360}
                alt=""
              />
            </div>
          </div>
          <div className="grow p-4 md:p-8">
            <div className="flex gap-3 justify-between items-center">
              <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
                Deposit History
              </h3>
              {/* faq pending */}
              <Link
                href={"/faq"}
                className="info-14 hover:text-grey dark:text-white dark:hover:text-white"
              >
                Have not received your deposit?
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="">
                <h4 className="info-14 hover:text-grey dark:text-white dark:hover:text-white">
                  Coin
                </h4>
                <div className="border border-border-clr ">
                  <SelectMenu selectMenu={coinData} />
                </div>
              </div>
              <div className="">
                <h4 className="info-14 hover:text-grey dark:text-white dark:hover:text-white">
                  Time
                </h4>
                <div className="border border-border-clr">
                  <SelectMenu selectMenu={dateFilter} />
                </div>
              </div>

              <div className="flex gap-3 h-[40px] self-end px-1 border border-border-clr dark:bg-black-v-4">
                <input
                  type="date"
                  className="focus:outline-none bg-transparent  dark:text-white"
                />
                <input
                  type="date"
                  className="focus:outline-none bg-transparent dark:text-white "
                />
              </div>
            </div>
            {/* dataTable */}
            <DepositTable data={data} />
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

    let networkList = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/network`, {
      method: "GET"
    }).then(response => response.json());

    let menu = await data.json();
    return {
      props: {
        assets: menu.specialNav.assets,
        tokens: tokenList,
        networks: networkList,
        sessions: session
      }, // will be passed to the page component as props
    };
  }
  // return {
  //     props: {
  //         providers,
  //     },
  // }
  return {
    redirect: { destination: "/" },
  };
}

export default Deposit;
