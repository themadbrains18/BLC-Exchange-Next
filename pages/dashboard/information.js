import InstInformation from 'components/institute-verification/information'
import React from 'react'
import Layout from 'components/layout/Layout'
import { getProviders, getSession } from "next-auth/react"
const Information = ({ account, sessions }) => {
    return (
        <>
            <Layout data={account} name="ID Verification" verify_cta={true} >
              
           
                <div className=' grow '>
                   <InstInformation />
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

export default Information
