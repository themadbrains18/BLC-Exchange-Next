import Layout from "/components/layout/layout";
import { useState, useContext } from "react";
import { getProviders, getSession } from "next-auth/react";
import ActiveCta from "/components/snippets/activeCta";
import SelectMenu from "@/components/snippets/selectMenu";
import Image from "next/image";
import Context from "/components/contexts/context";
import Table from "@/components/asset/order/table";

const Spot = ({ assets }) => {
  let activeCta = ["Open Orders", "Order History", "Trading Details"];
  let selectMenu = ["Limit Orders", "Trigger Orders", "OCO"];
  let coinList = ["All", "BTC", "OCO"];
  let dateFilter = ["Last 7 Days", "Last 30 Days"];
  const [active, setActive] = useState(0);
  const [data, setData] = useState(false);
  const [fliterShow, setFliterShow] = useState(false);
  const { setClick, mode } = useContext(Context);
  return (
    <>
      <Layout data={assets} name="Spot">
        <div className="grow p-4 md:p-8">
          <h3 className="hidden md:block section-secondary-heading">Spot</h3>
          <div className="mt-4">
            <ActiveCta data={activeCta} active={active} setActive={setActive} />
          </div>
          <div className="flex justify-between items-center gap-3 md:bg-table-bg mt-2 md:mt-4 ">

         
          <div className="  p-2 flex justify-between lg:justify-start gap-4 md:flex-wrap grow">
           {
            active!=2 &&
            <SelectMenu selectMenu={selectMenu} />
           }
          
            {/* search */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="py-2 text-sm text-black  rounded-md pl-10 pr-2 focus:outline-primary focus:bg-white focus:text-primary"
                  placeholder="Search Token"
                  autoComplete="off"
                />
              </div>
              <span className="text-grey">/</span>
              <SelectMenu selectMenu={coinList} />
              <button className="cta leading-8 h-full">Search</button>
            </div>
            {
              active!=0 && <SelectMenu selectMenu={dateFilter} />
            }
            <button
              className="lg:hidden"
              onClick={() => {
                setFliterShow(true);
              }}
            >
              <Image
                src="/assets/icons/filter.svg"
                height={24}
                width={24}
                alt=""
              />
            </button>
            
              <div
                className={`fixed -bottom-[100%] duration-500 right-0 w-full bg-white h-[100vh] ${fliterShow && "bottom-[0%] z-[4] "} `}
              
              >
                <div className="flex justify-between mb-4  p-4 border-b md:hidden border-t border-border-clr">
                  <h3 className="info-14-20">Filter</h3>

                  <button
                    className="ml-auto mr-0"
                    onClick={() => {
                      setFliterShow(false);
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
                <div className="mt-4 px-2">
                  <SelectMenu selectMenu={selectMenu} />
                </div>
                <div className="mt-4 px-2">
                  <SelectMenu selectMenu={coinList} />
                </div>
                <div className="mt-4 px-2 flex gap-4">
                  <button className="cta2 w-full">Reset</button>
                  <button className="cta w-full" >Confirm</button>
                </div>
              </div>
    
          </div>
          {
            active!=0 &&
            <button className="cta2 leading-8 bg-transparent whitespace-nowrap rounded-sm hidden lg:inline">Export Data</button>
          }
          
          </div>
          {
            active!=0 &&
            <div className="text-end lg:hidden">

              <button className="transparent-cta  rounded-sm  ">Export Data</button>
            </div>
          }
          {/* table */}
          <Table data={data} />
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
export default Spot;
