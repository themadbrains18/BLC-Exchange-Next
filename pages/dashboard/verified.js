import VerificationType from 'components/verified/verificationType'
import React from 'react'
import Layout from '@/components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"
const Verified = ({ account, sessions }) => {
    return (
        <>
            <Layout data={account} name="Verified" >
                <div className='p-4 md:p-8 grow '>
                    <VerificationType session={sessions.user}/>
                </div>
            </Layout>
        </>
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
      },
    };
  }
  return {
    redirect: { destination: "/" },
  };


}

export default Verified
