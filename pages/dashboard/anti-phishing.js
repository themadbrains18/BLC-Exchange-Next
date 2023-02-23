import React from 'react';
import Layout from '/components/layout/layout'
import { getProviders, getSession } from "next-auth/react"
import AntiFishingCode from './../../components/dashboard/anti-fishing-code';
const AntiPhishing = ({account}) => {
  return (
    <Layout data={account} slug="dashboard">
        <AntiFishingCode />
    </Layout>
  )
}
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders()
    if (session) {
      let data = await fetch(process.env.NEXT_PUBLIC_BASEURL + "/hello");
      let menu = await data.json();
      return {
        props: {
          account: menu.specialNav.account,
          session: session
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
export default AntiPhishing;