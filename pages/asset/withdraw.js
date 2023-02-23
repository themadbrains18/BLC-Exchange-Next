import Layout from '/components/layout/layout'
import React from 'react'
import { getProviders, getSession } from "next-auth/react";

const Withdraw = ({assets}) => {
  return (
    <>
    <Layout data={assets} name="Withdraw">

    </Layout>
    </>
  )
}
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
export default Withdraw