import Layout from "components/layout/Layout";
import React, { useState } from "react";
import { getProviders, getSession } from "next-auth/react";
import AuditTable from "components/asset/audit/auditTable";

const Audit = ({ assets }) => {
  let [data, setData] = useState(true);
 
  return (
    <>
      <Layout data={assets} name="Audit">
        <div className="grow p-4 md:p-8">
          <div className="flex gap-3 justify-between items-center">
            <h3 className="section-secondary-heading font-noto hidden md:block mb-4 ">
              Audit
            </h3>
            <p className="info-14 hover:text-grey">
              User registration time: 2023-02-14 10:13:48
            </p>
          </div>
          {/* dataTable */}
          <AuditTable data={data} />
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
export default Audit;
