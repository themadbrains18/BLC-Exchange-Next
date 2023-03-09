import Header from "components/chart/header";
import React, { useState, useEffect } from "react";

import SearchBox from "components/chart/searchBox";
import Desktop from "components/chart/desktop";
import Mobile from "components/chart/mobile";
import ActiveCta from "components/snippets/activeCta";
import ChartDataTable from "components/chart/chartDataTable";
import { getProviders, getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Chart = ({ coins, assets, orders }) => {
  let ctas = ["Open Orders", "Order History"];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(false);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(1025);

  const router = useRouter()

  const { slug } = router.query;

  useEffect(() => {
    let innerWidth = window.innerWidth;
    setWidth(innerWidth);

    window.addEventListener("resize", () => {
      let innerWidth = window.innerWidth;
      setWidth(innerWidth);
    });
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setOpen(false);
        }}
        className={` bg-black  opacity-0 invisible  duration-300 fixed top-0 left-0  w-full ${open && "!visible opacity-50 z-[2]"
          }`}
      ></div>
      <Header setOpen={setOpen} open={open} coins={coins} symbol={slug} />

      <div className="flex ">
        <SearchBox open={open} setOpen={setOpen} coins={coins} />
        {width < 1024 ? <Mobile symbol={slug} assets={assets} coins={coins} orders={orders}/> : <Desktop symbol={slug} assets={assets} coins={coins} orders={orders}/>}
      </div>
      <div>
        <div className="dark:bg-black-v-3">
          <div className="p-8">
            <ActiveCta data={ctas} active={active} setActive={setActive} />

            <ChartDataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { req,params } = context;
  const session = await getSession({ req });
  const providers = await getProviders();

  console.log(params.slug,'============slug')

  let tokenList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/token/marketcoin`, {
    method: "GET"
  }).then(response => response.json());

  let orders = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/market/create?token=${params.slug}`, {
    method: "GET"
  }).then(response => response.json());

  if (session) {

    let assetList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/assets/userasset?userid=${session?.user?.id}`, {
      method: "GET"
    }).then(response => response.json());

    return {
      props: {
        coins: tokenList.data.data,
        sessions: session.user,
        assets: assetList.data,
        orders : orders.data.data
      }, // will be passed to the page component as props
    };
  }
  return {
    props: {
      coins: tokenList.data.data,
      sessions: {},
      assets: [],
      orders : orders.data.data
    }, // will be passed to the page component as props
  };


}

export default Chart;
