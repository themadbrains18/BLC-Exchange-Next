import React from 'react';
import Layout from 'components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"
import AntiFishingCode from './../../components/dashboard/anti-fishing-code';
const ModifyAntiPhishing = ({account,sessions}) => {
  return (
    <Layout data={account} slug="dashboard">
        <AntiFishingCode session={sessions.user}/>
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
          sessions: session
        }, // will be passed to the page component as props
      };
    }
    return {
      redirect: { destination: "/" },
    };
  
  }
export default ModifyAntiPhishing;