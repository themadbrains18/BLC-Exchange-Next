import Layout from "/components/layout/layout";
import React, { useState } from "react";
import { getProviders, getSession } from "next-auth/react";
import SelectMenu from "/components/snippets/selectMenu";
import MegaSwapTable from "/components/asset/megaSwap/megaSwapTable";

const MegaSwap = ({ assets }) => {
  let [data, setData] = useState(true);
  let sell = ["All"];
  let buy = ["All"];
  let status = ["Failed", "Succeed", "Swapping", "All States"];
  let dateFilter = ["Last 7 Days", "Last 30 Days"];
  return (
    <>
      <Layout data={assets} name="Mega Swap Orders">
        <div className="grow p-4 md:p-8">
          <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
            MegaSwap Orders
          </h3>
          <div className="flex gap-4 flex-wrap">
            <div className="">
              <h4 className="info-14 hover:text-grey">Currency (sell)</h4>
              <div className="border border-border-clr">

              <SelectMenu selectMenu={sell} />
              </div>
            </div>
            <div className="">
              <h4 className="info-14 hover:text-grey">Currency (buy)</h4>
              <div className="border border-border-clr">
              <SelectMenu selectMenu={buy} />
              </div>
            </div>
            <div className="">
              <h4 className="info-14 hover:text-grey">Status</h4>
              <div className="border border-border-clr">
                <SelectMenu selectMenu={status} />
              </div>
            </div>

            <div className="">
              <h4 className="info-14 hover:text-grey">Time</h4>
              <div className="border border-border-clr">
                <SelectMenu selectMenu={dateFilter} />
              </div>
            </div>

            <div className="">
              <h4 className="info-14 hover:text-grey">Time</h4>
              <div className="flex gap-3 h-[36px] px-1 border border-border-clr">
                <input type="date" className="focus:outline-none" />
                <input type="date" className="focus:outline-none" />
              </div>
            </div>
          </div>
          {/* dataTable */}
          <MegaSwapTable data={data} />
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
export default MegaSwap;
