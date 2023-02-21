import SearchDropdown from "/components/snippets/search-dropdown";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Layout from "/components/layout/Layout";
import { getProviders, getSession } from "next-auth/react";
import Context from "/components/contexts/context";

const Deposit = ({ assets }) => {
  const [coin, setCoin] = useState("USD");
  const [rotate, setRotate] = useState(false);
  const [coinImg, setCoinImg] = useState("bnb.png");
  const [networks, setNetworks] = useState("bsc");
  const [dropDown, setDropDown] = useState(false);
  const [open, setOpen] = useState(false);
const {mode}=useContext(Context)
  let network = ["BTC", "Bsc "];

  const selectCoin = async (item) => {
    console.log("=====coin", item);
    setCoin(item.name);
    setCoinImg(item.image);
  };
  const selectId = async (item) => {
    setNetworks(item);
  };
  return (
    <>
      <Layout data={assets} name="Dashboard">
        <section className="flex p-4 md:p-8 flex-col md:flex-row gap-4">
          <div className="md:relative">
            <h6 className="info-12">Coin</h6>
            <div
              className="flex cursor-pointer justify-between w-full border border-border-clr rounded p-2 mt-2 "
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
              <img
                src="/assets/icons/down.svg"
                className={`${rotate && "rotate-90"} duration-300`}
              ></img>
            </div>
            {dropDown != false && (
              <SearchDropdown
                setShowDropdown={setDropDown}
                coin={true}
                selectCoin={selectCoin}
              />
            )}
          </div>
          <div className="md:relative">
            <h6 className="info-12">Network</h6>
            <div
              className="flex cursor-pointer justify-between w-full border border-border-clr rounded p-2 mt-2 "
              onClick={() => {
                setOpen(!open);
                setRotate(!rotate);
              }}
            >
              <div className="flex gap-3 ">
                {/* <Image
                  className="self-start"
                  height={24}
                  width={24}
                  alt="Coin Image"
                  src={`/assets/images/${coinImg}`}
                ></Image> */}
                <p className="info-14-16 font-bold">{networks}</p>
              </div>
              <img
                src="/assets/icons/down.svg"
                className={`${rotate && "rotate-90"} duration-300`}
              ></img>
            </div>
            {open != false && (
              <SearchDropdown
                idData={network}
                setShowDropdown={setOpen}
                selectId={selectId}
              />
            )}
          </div>
          <div className="md:relative">
            <h6 className="info-12">Network</h6>
            <div
              className="flex cursor-pointer items-center justify-between w-full border border-border-clr rounded p-2 mt-2 "
              onClick={() => {
                setOpen(!open);
                setRotate(!rotate);
              }}
            >
              <div className="flex gap-3 ">
                {/* <Image
                  className="self-start"
                  height={24}
                  width={24}
                  alt="Coin Image"
                  src={`/assets/images/${coinImg}`}
                ></Image> */}
                <p className="info-14-16 font-bold">{networks}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={mode==="dark"?"white":"currentColor"}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/images/launchPadOffer.png"
              height={360}
              width={360}
            />
          </div>
            <div className="grid place-items-center p-2">
                <img src="/assets/images/qr.png" alt="" />

            </div>
        </section>
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
    let menu = await data.json();
    return {
      props: {
        assets: menu.specialNav.assets,
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
